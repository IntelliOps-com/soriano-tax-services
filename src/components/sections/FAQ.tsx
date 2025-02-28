import { useState } from 'react';
import { Container } from '../ui/Container';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_CATEGORIES } from '../../utils/constants';
import { useAnalytics } from '../../analytics/hooks/useAnalytics';
import { ANALYTICS_CATEGORIES, ANALYTICS_ACTIONS } from '../../analytics/constants';

export function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState(FAQ_CATEGORIES[0].id);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { logEvent } = useAnalytics();

  const currentCategory = FAQ_CATEGORIES.find(cat => cat.id === selectedCategory)!;

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setOpenIndex(null);
    logEvent({
      action: ANALYTICS_ACTIONS.CLICK,
      category: ANALYTICS_CATEGORIES.NAVIGATION,
      label: `FAQ Category: ${categoryId}`,
    });
  };

  const handleQuestionToggle = (index: number, question: string) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);
    logEvent({
      action: isOpening ? ANALYTICS_ACTIONS.EXPAND : ANALYTICS_ACTIONS.COLLAPSE,
      category: ANALYTICS_CATEGORIES.CONTENT,
      label: `FAQ Question: ${question}`,
      value: index,
    });
  };

  return (
    <section id="faq" className="py-20 bg-stone-200" aria-labelledby="faq-heading">
      <Container>
        <h2 id="faq-heading" className="text-3xl font-extrabold text-gray-900 text-center sm:text-4xl mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Categories */}
          <nav className="space-y-2" aria-label="FAQ Categories">
            {FAQ_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  handleCategoryChange(category.id);
                }}
                aria-selected={selectedCategory === category.id}
                aria-controls={`faq-${category.id}`}
                className={`w-full text-left border border-gray-300 px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-teal-600 text-white'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                {category.title}
              </button>
            ))}
          </nav>

          {/* Questions */}
          <div 
            id={`faq-${currentCategory.id}`}
            className="md:col-span-3 space-y-4"
            role="region"
            aria-label={`${currentCategory.title} Questions`}
          >
            {currentCategory.faqs.map((faq, index) => (
              <article key={index} className="bg-white rounded-lg shadow-sm">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => handleQuestionToggle(index, faq.question)}
                  aria-expanded={openIndex === index}
                  aria-controls={`answer-${index}`}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-teal-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div id={`answer-${index}`} className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}