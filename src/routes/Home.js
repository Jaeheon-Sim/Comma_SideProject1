import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      // api 가져옴
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );
    const json = await response.json(); //JSON.parse 대신 사용 .json()
    setMovies(json.data.movies); // state 변경
    setLoading(false); // state 변경
  };
  useEffect(() => {
    // useEFFECT 사용해서 처음 홈페이지 렌더링할때만 가져옴
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div>
              <Movie />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
