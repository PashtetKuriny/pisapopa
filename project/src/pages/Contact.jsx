import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-[#4A3428] mb-6">Напишите нам</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Имя
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D4A574] focus:border-[#D4A574]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D4A574] focus:border-[#D4A574]"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Тема
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D4A574] focus:border-[#D4A574]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Сообщение
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D4A574] focus:border-[#D4A574]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#4A3428] text-white px-6 py-2 rounded-md hover:bg-[#3A2820] transition-colors"
            >
              Отправить
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#4A3428] mb-6">Адрес</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="text-[#D4A574]" />
              <p className="text-gray-700">+7 (999) 123-45-67</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-[#D4A574]" />
              <p className="text-gray-700">info@coffemania.ru</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-[#D4A574]" />
              <p className="text-gray-700">ул. Кофейная, 42, Москва</p>
            </div>
          </div>

          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.5887738251014!2d37.618696!3d55.756694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzI0LjEiTiAzN8KwMzcnMDcuMyJF!5e0!3m2!1sen!2sru!4v1635959562834!5m2!1sen!2sru"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;