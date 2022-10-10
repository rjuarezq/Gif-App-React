import { useState } from "react";

export const GifApp = ()  => {

    const [categories, setCategories ] = useState(['One puch man', 'Demon Slayer']);
    //console.log(typeof categories);
    //console.log(categories);
    const onAddCategory = () =>{
        //categories.push('valoran');
        setCategories(['new value', ...categories]);
        //setCategories((ctgory) => [...ctgory, 'new item']);
    }
    return (
        <>
            <h1> Gif App </h1>
                <button onClick={ onAddCategory }> Agregar nuevo valor </button>
                <ol>
                    { categories.map( category => {
                        return <li key={ category } > { category } </li>
                    }) }
                    
                </ol>
        </>
    );
}