import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-white text-red-500 py-10 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-red-500">ShopEase</h2>
          <p className="mt-2 text-sm">Your one-stop shop for everything!</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-red-500">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><Link href="/about" className="hover:text-red-700 text-red-500">About Us</Link></li>
            <li><Link href="/products" className="hover:text-red-700 text-red-500">Shop</Link></li>
            <li><Link href="/contact" className="hover:text-red-700 text-red-500">Contact</Link></li>
            <li><Link href="/faq" className="hover:text-red-700 text-red-500">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-red-500">Follow Us</h3>
          <div className="flex mt-3 space-x-4">
            <a href="#" className="text-red-500 hover:text-red-700 text-2xl"><FaFacebook /></a>
            <a href="#" className="text-red-500 hover:text-red-700 text-2xl"><FaTwitter /></a>
            <a href="#" className="text-red-500 hover:text-red-700 text-2xl"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-red-500 mt-6 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Muhammad Muneeb. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
