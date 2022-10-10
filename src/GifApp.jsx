import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifApp = () => {

    const [categories, setCategories] = useState(['One puch man', 'Demon Slayer']);

    const onAddCategory = ( newCategory ) => {
        console.log(newCategory);
        const isExist = categories.some(category => category.toLowerCase() === newCategory.toLowerCase());
        if(isExist) return
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/* Title */}
            <h1> Gif App </h1>

            {/* Input */}
            <AddCategory onNewCategory = { (newElement) => onAddCategory(newElement)}/>

            /* List Gif Categories */
            <ol>
                {categories.map(category => {
                    return <li key={category} > {category} </li>
                })}

            </ol>
        </>
    );
}