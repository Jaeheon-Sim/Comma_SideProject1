import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ key, id, medium_cover_image, title, summary, genres }) {
  console.log(key);
  return (
    <div key={key}>
      <img src={medium_cover_image} alt="" />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.prototype = {
  key: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
