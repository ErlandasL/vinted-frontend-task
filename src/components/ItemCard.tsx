import React from 'react';
import styles from '../styles/ItemCard.module.css';

interface ItemCardProps {
  id: string;
  title: string;
  imageUrl: string;
  isFavourite: boolean;
  onFavouriteToggle: (id: string) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ id, title, imageUrl, isFavourite, onFavouriteToggle }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.image} loading="lazy" />
      <div className={styles.overlay}>
        <h3 className={styles.title}>{title}</h3>
        <button onClick={() => onFavouriteToggle(id)} className={styles.favouriteButton}>
          {isFavourite ? 'Unfavourite' : 'Favourite'}
        </button>
      </div>
    </div>
  );
};

export default ItemCard;