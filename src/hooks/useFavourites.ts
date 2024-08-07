import { useState, useEffect } from 'react';

export const useFavourites = () => {
  const [favourites, setFavourites] = useState<string[]>(() => {
    const saved = localStorage.getItem('favourites');
    return saved ? JSON.parse(saved) : [];
  });

  const addFavourite = (id: string) => {
    setFavourites(prev => {
      const newFavourites = [...prev, id];
      localStorage.setItem('favourites', JSON.stringify(newFavourites));
      return newFavourites;
    });
  };

  const removeFavourite = (id: string) => {
    setFavourites(prev => {
      const newFavourites = prev.filter(fav => fav !== id);
      localStorage.setItem('favourites', JSON.stringify(newFavourites));
      return newFavourites;
    });
  };

  return { favourites, addFavourite, removeFavourite };
};