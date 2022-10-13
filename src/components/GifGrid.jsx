import { useState, useEffect } from "react";

import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {


    const [images, setImages] = useState([]);
    
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    //It avoids us from redoing the HTTP request for every minor change within our page unless a new search is added and the component is retriggered.
    useEffect(() => {
        getImages();
    }, []);


    return (
        <div>
            <h3> {category} </h3>
                {
                    images.map(( item ) => (
                            <GifItem 
                                key = { item.id }
                                //Esparcimos todas props que vienen en item con spread operator
                                //Tecnica mayormente usada cuando se tiene una gran cantidad de propiedades
                                {...item}
                            />
                    ))

                }
        </div>
    );
}
