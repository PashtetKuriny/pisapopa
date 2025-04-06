import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#4A3428] mb-6">О нас</h2>
        <p className="text-lg text-gray-700 mb-4">
          Добро пожаловать в Кофеманию – место, где каждая чашка кофе рассказывает свою историю. 
          Мы предлагаем изысканные сорта кофе, приготовленные с любовью и мастерством наших бариста.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#4A3428] mb-6">История фирмы</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600" 
              alt="История кофейни" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg text-gray-700">
              Основанная в 2010 году, Кофемания начиналась как небольшая семейная кофейня. 
              За годы работы мы выросли в сеть уютных заведений, где каждый гость может 
              насладиться великолепным кофе и атмосферой тепла и уюта.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-[#4A3428] mb-6">Наши сотрудники</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300" 
              alt="Бариста" 
              className="rounded-full w-48 h-48 object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#4A3428]">Анна Петрова</h3>
            <p className="text-gray-600">Шеф-бариста</p>
          </div>
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300" 
              alt="Менеджер" 
              className="rounded-full w-48 h-48 object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#4A3428]">Иван Смирнов</h3>
            <p className="text-gray-600">Управляющий</p>
          </div>
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300" 
              alt="Кондитер" 
              className="rounded-full w-48 h-48 object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#4A3428]">Мария Иванова</h3>
            <p className="text-gray-600">Шеф-кондитер</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;