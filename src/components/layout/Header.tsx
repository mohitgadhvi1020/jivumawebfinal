import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <h1 className="font-playfair text-4xl font-extrabold text-orange-500 tracking-wide capitalize drop-shadow-2xl">
              Jivuma
            </h1>
          </Link>
          <nav className="flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-500">
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-orange-500">
              Products
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-500">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-500">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
