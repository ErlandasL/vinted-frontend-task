import React from 'react';
import { useInfiniteScroll } from './hooks/useInfiniteScroll';
import { fetchImages } from './services/flickrAPI';
import ItemList from './components/ItemList';
import Loader from './components/Loader';
import './styles/global.css';

const App: React.FC = () => {
  const { items, loading } = useInfiniteScroll(fetchImages);

  return (
    <div>
      <ItemList items={items} />
      {loading && <Loader />}
    </div>
  );
};

export default App;