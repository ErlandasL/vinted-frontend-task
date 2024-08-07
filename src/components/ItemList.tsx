import React from 'react';
import ItemCard from './ItemCard';
import { useFavourites } from '../hooks/useFavourites';
import styles from '../styles/ItemList.module.css';

interface ItemListProps {
  items: { id: string, title: string, imageUrl: string }[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  const { favourites, addFavourite, removeFavourite } = useFavourites();

  const handleFavouriteToggle = (id: string) => {
    if (favourites.includes(id)) {
      removeFavourite(id);
    } else {
      addFavourite(id);
    }
  };

  return (
    <div className={styles.list}>
      {items.map(item => (
        <ItemCard
          key={item.id}
          id={item.id}
          title={item.title}
          imageUrl={item.imageUrl}
          isFavourite={favourites.includes(item.id)}
          onFavouriteToggle={handleFavouriteToggle}
        />
      ))}
    </div>
  );
};

export default ItemList;