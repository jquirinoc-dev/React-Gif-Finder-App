import { useState } from 'react'
import { AddCategory, GifGrid } from './Components';

export const GifExpertApp = ( ) => {

    const [ categories, setCategories ] = useState([ '' ]);

    const onAddCategory = ( newCategory ) => {
        // console.log(newCategory);
        if ( categories.includes(newCategory)) return;

        setCategories([ newCategory, ...categories ]);
        // setCategories(cat => [ ...cat, 'Valorant' ])
        
    }

  return (
    <>
        <h1>Gif Finder App</h1>

        <AddCategory 
            onNewCategory={ value => onAddCategory(value) }
            currentCategories={categories}
        />

        { 
            categories.map( category => (
                    <GifGrid 
                        key={ category }
                        category={ category } />
                ))
        }
        
    </>
  )
}
