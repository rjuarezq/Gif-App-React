import { getEnvironments } from './getEnvironments';

export const getGifs = async (category) => {
    const { VITE_API_KEY} = getEnvironments();
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${VITE_API_KEY}&q=${category}&limit=6`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( item => ({
        id: item.id,
        title: item.title,
        url: item.images.downsized_medium.url
    }));
    return gifs;
}