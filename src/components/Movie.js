import React from 'react'
import styled from 'styled-components'

function Movie({movie, setNominatedMovies, nominatedMovies, movies}) {


    // set a new propety for movies called nominated which will be used to disable the button so a nominated movies won't be nominated
    // again until its removed from nominated list
    const check = () => {
        const isNominated = movies.Search.filter(movie => nominatedMovies.find(nominated => nominated.imdbID === movie.imdbID)); 
        isNominated.map(movie => movie.nominated = true);
    }
    check();

  

    const NominateMovie = (e) => {
        if(nominatedMovies.length === 5){
            alert("nominated movie list limit reached");
        } else {
            setNominatedMovies((arr) => [...arr, movie]); // update nominated movies list with a new movie object
            const updatedList = [...nominatedMovies, movie];
            localStorage.setItem("list", JSON.stringify(updatedList)); // update the local storage with new items
        }
    }  

    return (
        <StyledMovieSection>
            <p>{movie.Title} / ({movie.Year}) <button className={movie.nominated ? "disableButton" : ""} onClick={NominateMovie}>Nominate</button></p>
        </StyledMovieSection>
    )
}

const StyledMovieSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: .5rem;
    font-weight: bold;
    button {
        color: white;
        background-color: transparent;
        border-radius: 50px;
        outline: none;
        border: 2px solid limegreen;
        padding: .25rem 1rem .25rem 1rem;
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        cursor: pointer;
        transition: all .25s ease-in-out;
        letter-spacing: 1px;
        &:hover {
            color: black;
            background-color: limegreen;

        }
    }
    .disableButton {
        pointer-events: none;
        background-color: red;
        border-color: red;
    }

`

export default Movie;
