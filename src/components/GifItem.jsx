import React from "react";

export const GifItem = ({ title, url, id }) => {
  const { url: onlyUrl } = url;

  return (
    <div className="card">
      <img src={onlyUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
};
