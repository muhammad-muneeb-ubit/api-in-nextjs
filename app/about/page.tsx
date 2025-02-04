import React from 'react';
const AboutUs = () => {
  return (
    <div className="bg-red-500 border-t border-red-500 border-b ">
      <div className="bg-white py-12 sm:py-16 px-6 sm:px-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-red-500 mb-6">About Us</h1>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            Welcome to our e-commerce store, where we bring you a wide selection of high-quality products, from the latest fashion trends to cutting-edge electronics. Our goal is to provide our customers with an easy, convenient, and enjoyable shopping experience, all while offering top-notch customer service.
          </p>

          <h2 className="text-2xl font-semibold text-red-500 mb-4">Our Mission</h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            Our mission is simple – to offer a diverse range of products at competitive prices, ensuring that you can find exactly what you need without the hassle. We are committed to providing exceptional customer service and making sure that every customer leaves with a smile.
          </p>

          <h2 className="text-2xl font-semibold text-red-500 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-lg sm:text-xl text-gray-700 space-y-3">
            <li>High-quality products sourced from trusted manufacturers.</li>
            <li>Secure and reliable payment methods to keep your information safe.</li>
            <li>Fast and efficient shipping to deliver your products on time.</li>
            <li>Easy returns and exchanges to ensure satisfaction with every purchase.</li>
            <li>Responsive and friendly customer support to assist with any issues.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-red-500 mb-4 mt-6">Our Story</h2>
          <p className="text-lg sm:text-xl text-gray-700">
            Our journey started with a simple idea – to provide a seamless online shopping experience that combines convenience, quality, and customer service. Over the years, we’ve expanded our product offerings and refined our services to meet the growing demands of our customers. We continue to evolve, keeping up with the latest trends and technologies to offer you the best shopping experience possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
