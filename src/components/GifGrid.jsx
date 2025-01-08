import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };
  useEffect(() => {
    // getGifs(category).then((newImages) => setImages(newImages));
    getImages();
  }, []);

  // console.log(images.map((image) => image));

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {
          /* {images.map()} */
          images.map((image) => (
            <GifItem key={image.id} {...image} />
          ))
        }
      </div>
    </>
  );
};
