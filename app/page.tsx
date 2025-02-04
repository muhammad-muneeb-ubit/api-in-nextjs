import { FaShoppingCart } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      <div className="bg-red-500 h-[500px] text-5xl font-bold text-center pt-3 text-white flex justify-center items-center flex-col sm:flex-row">
        <div className="sm:mr-4">e-commerce website</div>
        <FaShoppingCart 
          className="hover:scale-125 duration-300 cursor-pointer mt-4 sm:mt-0 sm:text-6xl text-4xl"
        />
      </div>
    </div>
  );
}
