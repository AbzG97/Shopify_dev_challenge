import React from 'react'
import styled from 'styled-components'

function NomintatedMovie({movie, nominatedMovies, setNominatedMovies, movies}) {

    const RemoveNominatedMovie = () => {
        const filter = nominatedMovies.filter((filtered) => filtered.imdbID !== movie.imdbID); // filter out the clicked movie to be removed
        localStorage.setItem("list", JSON.stringify(filter)); // update the local storage
        setNominatedMovies(filter); // update nominate movie state

        // remove the disabled status from the nominated button in the movie results list by deleting the nominated property
        if(movies){
            movies.Search.forEach((element) => {
                if(element.nominated === true){
                    delete element.nominated; 
                }
            })
        }
    }
       

    return (
        <StyledNominatedMovie>
           <div> <p>{movie.Title} / ({movie.Year}) <button onClick={RemoveNominatedMovie}>Remove</button> </p> </div>
        </StyledNominatedMovie>
    )
}

const StyledNominatedMovie = styled.div`
    display: flex;
    flex-direction: column;
    padding: .5rem;
    font-weight: bold;
    div {
        animation: display 1s ease-in-out;
        @keyframes display {
            0% {
                transform: translateX(25%);
                opacity: 0;
            }
            100% {
                transform: translateX(0%);
                opacity: 1;
            }
        }
    }
    button {
        color: white;
        background-color: transparent;
        border-radius: 50px;
        outline: none;
        border: 2px solid red;
        padding: .25rem 1rem .25rem 1rem;
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        cursor: pointer;
        transition: all .25s ease-in-out;
        letter-spacing: 1px;
        &:hover {
            color: black;
            background-color: red;

        }
    }
`

export default NomintatedMovie;
