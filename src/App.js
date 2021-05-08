import React from 'react'
import MovieList from './components/MovieList'
import axios from 'axios'
import NomintatedMovies from './components/NomintatedMovies';
import styled from 'styled-components'


function App() {

  const [movieTitle, setMovieTitle] = React.useState("");
  const [movies, setMovies] = React.useState("");
  const [nominatedMovies, setNominatedMovies] = React.useState(JSON.parse(localStorage.getItem("list")) || []);

  const InputHandler = async (e) => {
    setMovieTitle(e.target.value);
    const response = await axios(`https://www.omdbapi.com/?s=${e.target.value}&apikey=${process.env.REACT_APP_OMDB_API_KEY}&type=movie`);
    if(response.data.Response === "False"){
      setMovies("");
    } else {
      setMovies(response.data);
    }
  }


  return (
    <StyledAppSection>
      <div className="title">
        <p>The Shoppies</p>
      </div>
      <form>
        <input type="text" placeholder="enter a movie name" value={movieTitle} onChange={InputHandler}/>
      </form>
      <div className="moviesContainer">
       <div>
         <h2>Show results for <span>{movieTitle}</span></h2>  
         {movies && <MovieList movies={movies} setNominatedMovies={setNominatedMovies} nominatedMovies={nominatedMovies} setMovies={setMovies} /> } </div>
       <div>
          <h2>Nominated movies list</h2>
          {nominatedMovies && <NomintatedMovies nominatedMovies={nominatedMovies} setNominatedMovies={setNominatedMovies} movies={movies} setMovies={setMovies}/> } </div>
      </div>
     
    </StyledAppSection>
  );
}

const StyledAppSection = styled.div`
  letter-spacing: 3px;
  font-family: 'Poppins', sans-serif;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    padding: .25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      font-size: 2rem;
      padding: .5rem 0rem .5rem 0;
    }
  }
  form {
    input {
      outline: none;
      width: 100%;
      height: 75%;
      padding: 1rem 1rem 1rem .5rem;
      border-radius: 50px;
      border-color: black;
      font-family: 'Poppins', sans-serif;
      letter-spacing: 2px;
      font-weight: bold;

    }

  }
  .moviesContainer {
    h2 {
      span {
        color: violet;
      }
      padding: 1rem;
      margin: 1rem 1rem 1rem 10rem;
    }
    width: 100%;
    display: grid; 
    grid-template-columns: 50% 50%; 
  }
  
`

export default App;
