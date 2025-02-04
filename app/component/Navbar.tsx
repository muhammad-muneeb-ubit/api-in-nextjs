"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md px-5 py-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div>
          <Link className="text-red-500 text-lg font-bold" href={"/"}>
            ShopEase
          </Link>
        </div>
        <div className="hidden md:flex space-x-5">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-red-500 text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-3">
          <NavLinks />
        </div>
      )}
    </nav>
  );
};
const NavLinks = () => (
  <>
    <Link className="text-red-500 hover:border-2 hover:border-red-400 duration-300 px-3 py-2 rounded-md" href={'/products'}>All Products</Link>
    <Link className="text-red-500 hover:border-2 hover:border-red-400 duration-300 px-3 py-2 rounded-md" href={'/products/men-clothing'}>Men's Clothing</Link>
    <Link className="text-red-500 hover:border-2 hover:border-red-400 duration-300 px-3 py-2 rounded-md" href={'/products/women-clothing'}>Women's Clothing</Link>
    <Link className="text-red-500 hover:border-2 hover:border-red-400 duration-300 px-3 py-2 rounded-md" href={'/products/electronics'}>Electronics</Link>
    <Link className="text-red-500 hover:border-2 hover:border-red-400 duration-300 px-3 py-2 rounded-md" href={'/products/jewelery'}>Jewellery</Link>
  </>
);

export default Navbar;
