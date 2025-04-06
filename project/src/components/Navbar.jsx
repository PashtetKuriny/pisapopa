import React from 'react';
import { Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-[#4A3428] text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Coffee size={32} />
            <h1 className="text-2xl font-bold">Кофемания</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:text-[#D4A574] transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="hover:text-[#D4A574] transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D4A574] transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <button className="bg-[#D4A574] text-white px-4 py-2 rounded hover:bg-[#B88B5D] transition-colors">
              Войти
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;