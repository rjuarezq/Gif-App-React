import {useState, useEffect} from 'react';
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [images, setImages] = useState( [] );
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    //It avoids us from redoing the HTTP request for every minor change within our page unless a new search is added and the component is retriggered.
    useEffect( () => {
        getImages();
    }, []);

    return {
        images,
        isLoading,
    }
}