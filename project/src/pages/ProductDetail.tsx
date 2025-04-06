import React from 'react';
import { useParams } from 'react-router-dom';

const products = {
  1: {
    name: 'Эспрессо',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800',
    shortDescription: 'Классический итальянский эспрессо, приготовленный с особым вниманием к деталям.',
    characteristics: [
      'Объем: 30 мл',
      'Крепость: высокая',
      'Время приготовления: 25-30 секунд',
      'Температура подачи: 65-70°C'
    ],
    fullDescription: 'Наш эспрессо готовится из отборных зерен арабики, обжаренных по специальной технологии. Каждая порция тщательно отмеряется и готовится при идеальном давлении и температуре, чтобы раскрыть богатый вкусовой профиль кофе.'
  },
  2: {
    name: 'Капучино',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800',
    shortDescription: 'Идеальный баланс эспрессо и молочной пены.',
    characteristics: [
      'Объем: 180 мл',
      'Соотношение: 1/3 эспрессо, 1/3 молоко, 1/3 пена',
      'Температура молока: 65°C',
      'Жирность молока: 3.2%'
    ],
    fullDescription: 'Наш капучино - это произведение искусства. Мы используем свежее фермерское молоко, которое взбивается до идеальной консистенции, создавая нежную бархатистую пену. В основе - наш фирменный эспрессо, который придает напитку насыщенный кофейный вкус.'
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products[id as keyof typeof products];

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
            onClick={() => window.open(product.image, '_blank')}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-[#4A3428] mb-4">{product.name}</h1>
          
          <h2 className="text-xl font-semibold text-[#4A3428] mb-2">Описание товара</h2>
          <p className="text-gray-700 mb-6">{product.shortDescription}</p>
          
          <h2 className="text-xl font-semibold text-[#4A3428] mb-2">Характеристики товара</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            {product.characteristics.map((char, index) => (
              <li key={index}>{char}</li>
            ))}
          </ul>
          
          <h2 className="text-xl font-semibold text-[#4A3428] mb-2">Подробное описание товара</h2>
          <p className="text-gray-700">{product.fullDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;