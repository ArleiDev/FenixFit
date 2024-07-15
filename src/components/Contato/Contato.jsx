import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Contato = () => {
  

  return (
   
    <div id='Contato' className="custom-bg2 h-screen bg-cover bg-center py-10">
      <h1 className="text-5xl text-white font-bold text-center mb-10">Fale Conosco</h1>
      <div className="max-w-3xl mx-auto mt-24 bg-white p-6 rounded-lg shadow-md ">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nome</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Seu email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mensagem</label>
            <textarea
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Sua mensagem"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-violet-900 text-white py-2  rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Enviar
          </button>
        </form>

      
      </div>
    </div>
  );
};

export default Contato;
