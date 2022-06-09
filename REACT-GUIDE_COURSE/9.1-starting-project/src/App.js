import React, {useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

   const fetchMoviesHandler = useCallback(async () => {
     setLoading(true);
     setError(null);

     try {
       const response = await fetch('https://react-http-b7e35-default-rtdb.firebaseio.com/movies.json');

       if (!response.ok) {
         throw new Error('Something went wrong!');
       }

       const data = await response.json();

        const loadedMovies = [];

        for (const key in data) {
            loadedMovies.push({
                id: key,
                title: data[key].title,
                openingText: data[key].openingText,
                releaseDate: data[key].releaseDate,
            })
        }

       // const transformedMovies = loadedMovies.map(movie => {
       //   return {
       //     id: movie.episode_id,
       //     title: movie.title,
       //     openingText: movie.opening_crawl,
       //     releaseData: movie.release_date
       //   };
       // });

       setMovies(loadedMovies);
     } catch (err) {
       setError(err.message);
     }
     setLoading(false);

  }, []);

  React.useEffect(() => {
    fetchMoviesHandler()
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
      console.log(movie);
      const response = await fetch('https://react-http-b7e35-default-rtdb.firebaseio.com/movies.json', {
          method: 'POST',
          body: JSON.stringify(movie),
          headers: {
              'Content-type': 'application/json'
          }
      });

      const data = await response.json();

      console.log(data);
  }

  let content = <p>Found no movies</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (loading) {
    content = <p>loading</p>;
  }

  return (
    <React.Fragment>
        <section>
            <AddMovie
                onAddMovie={addMovieHandler}
            />
        </section>
      <section>
        <button
          onClick={fetchMoviesHandler}
        >Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
