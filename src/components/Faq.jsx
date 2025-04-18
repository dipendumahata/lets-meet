import React, { useState } from 'react';

const faqData = [
  {
    question: 'How to boost productivity at work?',
    answer: 'Making your workday more productive can lead to better results. Here are some tips: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    question: 'What are the best books to read for personal growth?',
    answer: 'Some recommended titles include: "The Power of Now" by Eckhart Tolle and "Atomic Habits" by James Clear.',
  },
  {
    question: 'How to maintain a healthy work-life balance?',
    answer: 'Find time for hobbies, exercise, and relaxation to maintain this balance.',
  },
  {
    question: 'How to stay motivated on a challenging project?',
    answer: 'Break down the project into smaller tasks, celebrate small victories, and seek support from colleagues.',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            You Have Questions, We Have Answers!
          </h2>
          <p className="mt-4 text-base text-gray-600">
            Have a question in mind? Check out the most common ones below.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="text-lg font-semibold text-black">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`px-4 pb-5 sm:px-6 sm:pb-6 transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'block' : 'hidden'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-base mt-9">
          Still have questions?{' '}
          <a
            href="#"
            className="font-medium text-blue-600 hover:text-blue-700 hover:underline"
          >
            Reach out to us
          </a>{' '}
          for personalized assistance.
        </p>
      </div>
    </section>
  );
};

export default Faq;