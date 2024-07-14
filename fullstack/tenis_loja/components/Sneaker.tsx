import React from 'react';

interface SneakerProps {
  sneaker: {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    brand:string;
  };
}

const Sneaker: React.FC<SneakerProps> = ({ sneaker }) => {
  return (
    <div className="card">
      <img src={sneaker.image} alt={sneaker.name} className="w-full h-12 object-cover rounded-t" />
      <div className="p-1">
        <h2>{sneaker.name}</h2>
        <p className='descricao_tenis'>{sneaker.description}</p>
        <p className='preco_tenis'>R$ {sneaker.price}</p>
      </div>
    </div>
  );
};

export default Sneaker;