'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What services does Vihep Group offer?",
    answer: "Vihep Group offers a comprehensive range of services including business consulting, project management, digital transformation, and strategic planning. We specialize in helping businesses optimize their operations and achieve sustainable growth."
  },
  {
    question: "How can I schedule a consultation?",
    answer: "You can schedule a consultation by filling out our contact form, calling our office directly, or sending us an email. Our team will respond within 24 business hours to arrange a meeting at your convenience."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve clients globally, with a primary focus on [Region/Country]. Our team can work both remotely and on-site, depending on your needs and preferences."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on scope and complexity. During our initial consultation, we'll assess your needs and provide a detailed timeline. We pride ourselves on delivering projects on schedule while maintaining high quality standards."
  },
  {
    question: "Do you offer customized solutions?",
    answer: "Yes, we specialize in creating customized solutions tailored to each client's unique needs and challenges. We work closely with you to understand your business objectives and develop strategies that align with your goals."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-gray-200">
      {faqs.map((faq, index) => (
        <div key={index} className="py-6">
          <button
            onClick={() => toggleQuestion(index)}
            className="flex w-full items-start justify-between text-left"
          >
            <span className="text-lg font-medium text-gray-900">
              {faq.question}
            </span>
            <span className="ml-6 flex h-7 items-center">
              <ChevronDownIcon
                className={`h-6 w-6 transform transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </span>
          </button>
          {openIndex === index && (
            <div className="mt-3 pr-12">
              <p className="text-base text-gray-700">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 