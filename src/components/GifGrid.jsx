import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types';

import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs (category);

    return (
        <div className="category category__container">
                <h3 className="category__title"> {category} </h3>
                {
                    isLoading && ( <h3> Cargando imagenes... </h3> )
                }
                <div className="card__flex">
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
        </div>
    );
}

GifGrid.propTypes = {
    category : PropTypes.string.isRequired
}
