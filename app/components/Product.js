"use client";

import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import FilterDropdown from '../components/FilterDropdown';

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  // const [category, setCategory] = useState('');
  // const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const handleFilter = (category) => {
    // setCategory(category);
    if (category) {
      setFilteredProducts(products.filter((p) => p.category === category));
    } else {
      setFilteredProducts(products);
    }
  };

  const handleSort = (order) => {
    // setSortOrder(order);
    const sorted = [...filteredProducts].sort((a, b) => (order === 'asc' ? a.price - b.price : b.price - a.price));
    setFilteredProducts(sorted);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product Dashboard</h1>
      <div className="flex gap-4 mb-4">
        <FilterDropdown options={[...new Set(products.map((p) => p.category))]} onChange={handleFilter} />
        <select
          onChange={(e) => handleSort(e.target.value)}
          className="border rounded p-2 text-gray-950"
          defaultValue=""
        >
          <option value="" disabled>
            Sort by Price
          </option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
