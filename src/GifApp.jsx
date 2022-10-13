import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifApp = () => {

    const [categories, setCategories] = useState(['One piece', 'Demon Slayer']);

    const onAddCategory = (newCategory) => {
        const isExist = categories.some(category => category.toLowerCase() === newCategory.toLowerCase());
        if (isExist) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/* Title */}
            <h1> Gif App </h1>

            {/* Input */}
            <AddCategory onNewCategory={(newElement) => onAddCategory(newElement)} />

            {/* List Gif Categories */}
            {
                categories.map(category => {
                    //This functional component will return an object
                    return (
                        < GifGrid
                            key= {category}
                            category={ category }
                        />
                    )
                })
            }


        </>
    );
}