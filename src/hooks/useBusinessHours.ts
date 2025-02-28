import { useState, useEffect } from 'react';

interface BusinessPeriod {
  isActive: boolean;
  type: 'tax' | 'regular' | 'holiday';
}

export function useBusinessHours(): BusinessPeriod {
  const [currentPeriod, setCurrentPeriod] = useState<BusinessPeriod>({
    isActive: false,
    type: 'regular',
  });

  useEffect(() => {
    function checkBusinessHours() {
      const now = new Date();
      const month = now.getMonth() + 1; // 1-12
      const date = now.getDate();
      const day = now.getDay(); // 0-6 (Sunday-Saturday)
      const hour = now.getHours();
      const minute = now.getMinutes();
      const currentTime = hour * 60 + minute;

      // Holiday Period (December 20 - January 5)
      if ((month === 12 && date >= 20) || (month === 1 && date <= 5)) {
        return { isActive: false, type: 'holiday' as const };
      }

      // Tax Season (January 6 - April 30)
      if ((month === 1 && date >= 6) || month === 2 || month === 3 || (month === 4 && date <= 30)) {
        const isTaxDay = day >= 1 && day <= 6; // Monday-Saturday
        const isWithinTaxHours = currentTime >= 600 && currentTime < 1200; // 10:00 AM - 8:00 PM
        return { isActive: isTaxDay && isWithinTaxHours, type: 'tax' as const };
      }

      // Regular Business Hours (May 1 - December 19)
      const isRegularDay = day >= 1 && day <= 5; // Monday-Friday
      const isWithinRegularHours = currentTime >= 600 && currentTime < 1020; // 10:00 AM - 5:00 PM
      return { isActive: isRegularDay && isWithinRegularHours, type: 'regular' as const };
    }

    // Initial check
    setCurrentPeriod(checkBusinessHours());

    // Update every minute
    const interval = setInterval(() => {
      setCurrentPeriod(checkBusinessHours());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return currentPeriod;
}