import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);


    /*const handleAdd = () => {
        setCategories([...categories, 'Yolanda' ]);
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategories={setCategories} />
            <ul>
                {
                    categories.map((category, index) => (
                        <GifGrid key={index + category} category={ category } />
                    )
                    )
                }
            </ul>
        </>
    );

}

export default GifExpertApp;