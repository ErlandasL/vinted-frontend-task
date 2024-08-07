const API_KEY = 'b192d0151cd8de8b328e8b7eb8926d29';
const BASE_URL = 'https://api.flickr.com/services/rest/';

export const fetchImages = async (page: number) => {
  const response = await fetch(`${BASE_URL}?method=flickr.photos.getRecent&api_key=${API_KEY}&format=json&nojsoncallback=1&page=${page}`);
  const data = await response.json();
  return data.photos.photo.map((photo: any) => ({
    id: photo.id,
    title: photo.title,
    imageUrl: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
  }));
};