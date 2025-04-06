import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Эспрессо',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=400',
    description: 'Классический итальянский эспрессо'
  },
  {
    id: 2,
    name: 'Капучино',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400',
    description: 'Эспрессо с молочной пенкой'
  },
  {
    id: 3,
    name: 'Латте',
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=400',
    description: 'Эспрессо с горячим молоком'
  },
  {
    id: 4,
    name: 'Фирменный десерт',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400',
    description: 'Особый рецепт нашего шеф-кондитера'
  }
];

const Catalog = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#4A3428] mb-8">Каталог</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link 
            to={`/product/${product.id}`} 
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#4A3428] mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Catalog;