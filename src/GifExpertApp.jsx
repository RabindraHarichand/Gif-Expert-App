import {useState} from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

   const [categories, setCategories] = useState([ 'One Punch','Dragon Ball' ]) 

   const onAddCategory= ()=>{ 
        // setCategories([...categories, 'One Piece'])
        setCategories(cat => [...cat, 'Onepiece'])
       
        
     }
    
  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input Output */}
        <AddCategory />
        {/* Listado de Gif*/}
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
            {
            categories.map(category => {
                return <li key={category}>{category}</li>
            })
            }
            {/* <li>ABC</li> */}
        </ol>
        {/*Gif Item*/}
    </>
  )
}
