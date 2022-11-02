import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifApp = () => {
    const [categories, setCategories] = useState([ 'Shingeki' ]);

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        setCategories([ ...categories, newCategory ])
    }

    return (
        <>
            <h1>GIF Expert App</h1>

            <AddCategory 
                emitAddCategory={ onAddCategory }
            />

            {
                categories.map((category, i) => (
                    <GifGrid
                        key={ category }
                        category={ category }
                    />
                ))
            }
        </>
    )
}