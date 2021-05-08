import React from 'react'
import Movie from './Movie'
import styled from 'styled-components'

function MovieList({movies, setNominatedMovies, nominatedMovies, setMovies}) {


    return (
        <div>
            
            <StyledMovieList>
                {movies.Search.map((movie) => (
                    <Movie movies={movies} movie={movie} setMovies={setMovies} key={movie.imdbID} setNominatedMovies={setNominatedMovies} nominatedMovies={nominatedMovies} />
                 
                ))}
            </StyledMovieList>
        </div>
    )
}

const StyledMovieList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin: .25rem 1rem 1rem 10rem;
`

export default MovieList
