'use client';
import React, { useState } from 'react';
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAnswer = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqData = [
    {
      question: "What types of products do you sell?",
      answer: "We offer a wide range of products across various categories including men's and women's clothing, jewelry, electronics, and more. Popular items include casual t-shirts, jackets, accessories like rings and bracelets, and high-quality electronics like external hard drives and SSDs.",
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is processed, you will receive a tracking number via email that you can use to track your order through our carrier's tracking system. You can also check the status of your order by logging into your account.",
    },
    {
      question: "What is the return policy?",
      answer: "We accept returns on most products within 30 days of purchase. Items must be in original condition with all tags attached. For more details, please visit our Returns & Exchanges page.",
    },
    {
      question: "Do you offer gift wrapping services?",
      answer: "Currently, we do not offer gift wrapping services. However, we will ensure that all your products are carefully packaged for safe delivery.",
    },
    {
      question: "How do I know if a product is available?",
      answer: "Our website shows real-time availability for all products. If an item is out of stock, it will be clearly indicated, and you may choose to be notified when it becomes available.",
    },
    {
      question: "How can I pay for my order?",
      answer: "We accept all major credit and debit cards, PayPal, and other payment methods available at checkout. Your payment is securely processed through our encrypted system.",
    },
    {
      question: "Can I change or cancel my order after placing it?",
      answer: "Once an order is placed, it is processed immediately to ensure fast shipping. If you wish to make changes or cancel, please contact us as soon as possible. We may not be able to modify orders once they are in processing or shipped.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we offer international shipping. The shipping cost and delivery time may vary depending on your location. Please check the shipping details at checkout.",
    },
    {
      question: "How do I use a discount code?",
      answer: "You can enter your discount code during checkout on the payment page. Make sure to apply the code before completing the payment process to enjoy your savings.",
    },
    {
      question: "How do I know if a product is right for me?",
      answer: "We provide detailed product descriptions, sizes, and reviews from other customers to help you make an informed decision. If you are unsure about sizing or fit, please refer to our size guide or contact our customer support.",
    },
    {
      question: "What if a product I receive is damaged or defective?",
      answer: "If you receive a damaged or defective product, please contact our customer service immediately with your order number and photos of the item. We will arrange for a replacement or refund as per our policy.",
    },
    {
      question: "Are the products on your site genuine?",
      answer: "Yes, all the products listed on our website are 100% authentic and sourced from reputable manufacturers.",
    },
    {
      question: "How can I contact customer support?",
      answer: "You can contact us via the 'Contact Us' form on our website, or email our support team at support@example.com.",
    },
    {
      question: "Do you have any promotions or sales?",
      answer: "We often run promotions and sales, especially during seasonal changes or holidays. Make sure to subscribe to our newsletter or follow us on social media to stay updated on the latest offers!",
    },
  ];
  return (
    <div className="bg-red-500 border-t border-red-500 ">

      <div className="bg-white p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-red-500 mb-6">Frequently Asked Questions (FAQs)</h1>
        {faqData.map((item, index) => (
          <div key={index} className="faq-item mb-4">
            <div
              className="faq-question text-lg sm:text-xl font-semibold cursor-pointer p-4 bg-red-500 text-white rounded-md hover:bg-red-600 duration-300"
              onClick={() => toggleAnswer(index)}
            >
              {item.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer mt-2 p-4 text-gray-600 bg-red-100 rounded-md">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
