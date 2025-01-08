import PropTypes from "prop-types";

export const GifItem = ({ title, url, id }) => {
  const { url: onlyUrl } = url;

  return (
    <div className="card">
      <img src={onlyUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
