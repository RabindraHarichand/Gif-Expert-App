import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = (newCategory) => {
    // if (categories.includes(newCategory)) return;

    const categoryExists = categories.find((category) => {
      return category.toLowerCase() === newCategory.toLowerCase();
    });

    if (categoryExists) return;
    // console.log(newCategory);

    // categories.push(newCategory)
    // setCategories([...categories, 'One Piece'])
    setCategories((cat) => [newCategory, ...cat]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* Input Output */}
      <AddCategory
        // setCategories={setCategories} \
        onNewCategory={(value) => onAddCategory(value)}
        currentCategories={categories}
      />
      {/* Listado de Gif*/}
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
        {/* <li>ABC</li> */}
      </ol>
      {/*Gif Item*/}
    </>
  );
};
