"use client";

import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

export default function FavoritesPage() {
  const favorites = useSelector((state) => state.favorites.favoriteProducts);
   console.log("favorites",favorites)
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Favorite Products</h1>
      {favorites.length === 0 ? (
        <p>No favorite products added.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
} 