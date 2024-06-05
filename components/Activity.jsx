import React from 'react';
import { useState } from 'react';
import Clientes from '../components/Clientes';
import Ventas from '../components/Ventas'

const Activity = () => {
  const [selectedFilter, setSelectedFilter] = useState('ventas'); // Mueve la declaración de useState dentro del componente

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value); // Mueve la función handleFilterChange dentro del componente
  };

  const renderComponent = () => {
    if (selectedFilter === 'ventas') {
      return <Ventas />;
    } else if (selectedFilter === 'clientes') {
      return <Clientes />;
    }
  };

  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
      <h1 className='font-bold'>Actividades recientes</h1>
      <h2>Filtrar por</h2>
      <div className='p-4 grid md:grid-cols-1 gap-4'>
        <div>
          <input
            type="radio"
            name="radio-2"
            className="radio radio-primary"
            value="clientes"
            checked={selectedFilter === 'clientes'}
            onChange={handleFilterChange}
          />
          <span>Clientes</span>
        </div>
        <div>
          <input
            type="radio"
            name="radio-2"
            className="radio radio-primary"
            value="ventas"
            checked={selectedFilter === 'ventas'}
            onChange={handleFilterChange}
          />
          <span>Ventas</span>
        </div>
      </div>
      {renderComponent()}
    </div>
  );
};

export default Activity;