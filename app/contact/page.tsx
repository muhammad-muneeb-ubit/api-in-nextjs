'use client'
import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
};

interface FormData {
    name: string;
    email: string;
    message: string;
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert("Message sent successfully!");
    // You can integrate with a backend service to handle form submissions
};

  return (
    <div className="bg-red-500 border-t border-red-500 border-b  ">
    
      <div className="bg-white p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-red-500 mb-6">Contact Us</h1>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg sm:text-xl text-gray-700 font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-lg sm:text-xl text-gray-700 font-semibold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-lg sm:text-xl text-gray-700 font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-red-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-red-600 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center text-gray-700">
          <h2 className="text-2xl font-semibold text-red-500">Or reach us at:</h2>
          <p className="mt-4 text-lg">
            Email: <a href="mailto:support@example.com" className="text-red-500">support@example.com</a>
          </p>
          <p className="text-lg">
            Phone: <span className="text-red-500">+1 (234) 567-890</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
