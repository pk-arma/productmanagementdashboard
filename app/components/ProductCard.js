"use client";

import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/favoritesSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favoriteProducts);
  const isFavorite = favorites.some((item) => item.id === product.id);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(product));
    } else {
      dispatch(addFavorite(product));
    }
  };

  return (
    <div className="border rounded p-4  bg-slate-50">
      <div>
      <h2 className="font-bold text-lg text-gray-950"> {product.title}</h2>
      <p className='text-gray-950'>Price:   ${product.price} </p>
      <p className='text-gray-950'>Category:  {product.category}</p>
      </div>
      <div className='flex'>
      <button
        onClick={handleFavorite}
        className={`mt-2 px-4 py-2 rounded ${isFavorite ? 'bg-red-500 text-white' : 'bg-gray-900'}`}
        >
        {isFavorite ? 'Remove Favorite' : 'Add to Favorite'}
      </button>
        </div>
    </div>
  );
}
