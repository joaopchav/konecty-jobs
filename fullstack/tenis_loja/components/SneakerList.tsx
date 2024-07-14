// SneakerList.tsx
'use client';

import React, { useState } from 'react';
import { sneakers } from '../src/data';
import Sneaker from './Sneaker';

const SneakerList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [noResults, setNoResults] = useState(false);

  const filteredSneakers = sneakers.filter((sneaker) => {
    if (filterBy === 'all') {
      return true;
    } else if (filterBy === 'marca') {
      return sneaker.brand.toLowerCase().includes(selectedBrand.toLowerCase());
    } else if (filterBy === 'preco') {
      return sneaker.price >= minPrice && sneaker.price <= maxPrice;
    } else if (filterBy === 'category') {
      return sneaker.category.toLowerCase().includes(selectedCategory.toLowerCase());
    }
    return false;
  });

  const handleBrandFilter = (brand: string) => {
    setFilterBy('marca');
    setSelectedBrand(brand);
  };

  const handlePriceFilter = () => {
    setFilterBy('preco');
  };

  const handleCategoryFilter = (category: string) => {
    setFilterBy('category');
    setSelectedCategory(category);
  };

  const handleClearFilters = () => {
    setFilterBy('all');
    setSelectedBrand('');
    setMinPrice(0);
    setMaxPrice(1000);
    setSelectedCategory('');
  };

  const handlePriceChange = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  return (

    <div className="sneaker-list">
      <div className="title-container flex justify-end mr-auto mb-4"> 
        <h1 className="titulo_loja">Nossos produtos</h1>
        <p className="descricao_titulo">{sneakers.length} tênis cadastrados</p>
      </div>
      <div className="filter-buttons sticky top-0 z-10">
        <button onClick={() => setFilterBy('all')}>Todos</button>
        {Object.keys(sneakers.reduce((acc, sneaker) => ({...acc, [sneaker.brand]: true }), {})).map((brand) => (
          <button key={brand} onClick={handleBrandFilter.bind(null, brand)}>
            {brand}
          </button>
        ))}
        {Object.keys(sneakers.reduce((acc, sneaker) => ({...acc, [sneaker.category]: true }), {})).map((category) => (
          <button key={category} onClick={handleCategoryFilter.bind(null, category)}>
            {category}
          </button>
        ))}
        <button onClick={() => handleClearFilters()}>Limpar filtros</button>
        <button onClick={handlePriceFilter}>Aplicar</button>
      </div>
      <div className="input-group sticky top-0 z-10">
        <div className="price-filter">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => handlePriceChange(parseInt(e.target.value), maxPrice)}
            placeholder="Min. preço"
          />
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => handlePriceChange(minPrice, parseInt(e.target.value))}
            placeholder="Max. preço"
          />
        </div>
      </div>
      {filteredSneakers.length === 0 ? (
        <div className="no-results">
          <p>Nenhum resultado encontrado</p>
        </div>
      ) : (
        <div className="sneaker-list">
          {filteredSneakers.map((sneaker) => (
            <Sneaker key={sneaker.id} sneaker={sneaker} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SneakerList;