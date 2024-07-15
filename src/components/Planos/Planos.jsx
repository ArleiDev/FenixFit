import React from 'react';

const Planos = () => {
  const plans = [
    {
      name: 'Básico',
      price: 'R$ 50,00/mês',
      description: 'Acesso limitado aos equipamentos e aulas.',
      benefits: [
        'Acesso à academia das 6h às 18h',
        '2 aulas por semana',
        'Acesso aos vestiários',
      ],
    },
    {
      name: 'Intermediário',
      price: 'R$ 100,00/mês',
      description: 'Acesso ilimitado aos equipamentos e aulas.',
      benefits: [
        'Acesso à academia 24h',
        '5 aulas por semana',
        'Acesso aos vestiários e sauna',
        'Acompanhamento de personal trainer',
      ],
    },
    {
      name: 'Avançado',
      price: 'R$ 150,00/mês',
      description: 'Todos os benefícios dos planos mais.',
      benefits: [
        'Acesso à academia 24h',
        'Aulas ilimitadas',
        'Acesso aos vestiários, sauna e piscina',
        'Acompanhamento de nutricionista',
        'Descontos em eventos',
      ],
    },
  ];

  return (
    <div id='Planos' className="bg-zinc-950 py-52 p-20">
      <h1 className="text-5xl text-white font-bold text-center mb-10">Conheça Nosso Planos:</h1>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-white w p-6 rounded-lg shadow-md w-50 md:w-1/3">
            <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
            <p className="text-xl font-bold text-violet-900 mb-4">{plan.price}</p>
            <p className="mb-4">{plan.description}</p>
            <ul className="mb-4">
              {plan.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center mb-2">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
            <button className="w-full bg-violet-900 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
              Escolher Plano
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planos;
