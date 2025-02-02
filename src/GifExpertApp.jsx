import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

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
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
        currentCategories={categories}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
