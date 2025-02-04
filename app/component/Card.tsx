import React from "react";
interface CardProps {
    name: string;
    descp: string;
    price: string | number;
    imgSrc: string;
    alt: string;
    slug:string
  }
const Card: React.FC<CardProps> = ({name, descp, price, imgSrc, alt, slug}) => {
  return (
    <div className="bg-white w-full max-w-md md:max-w-lg lg:max-w-xl shadow-lg rounded-lg overflow-hidden mx-auto mt-10 transition hover:shadow-xl">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/5 p-6 text-center">
        <img
          src={imgSrc}
          width={240}
          height={240}
          alt={alt}
          className="mx-auto"
        />
      </div>
      <div className="md:w-3/5 p-6 border-t md:border-t-0 md:border-l border-gray-200">
        <h2 className="text-lg font-bold text-gray-700 uppercase">{name}</h2>
        <h4 className="text-xs text-gray-500 uppercase font-semibold">{slug}</h4>
        <h1 className="text-2xl text-gray-700 font-light pt-2">${price}</h1>
        <p className="text-sm text-gray-500 py-4">{descp}</p>
        <div className="flex space-x-2">
          <button className="border border-gray-300 px-4 py-2 text-sm uppercase font-medium text-gray-700 transition hover:border-green-400 hover:text-green-400">
            Add to Cart
          </button>
          <button className="border border-gray-300 px-4 py-2 text-sm uppercase font-medium text-gray-700 transition hover:border-green-400 hover:text-green-400">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};
export default Card;
