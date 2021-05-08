import React from 'react'
import NomintatedMovie from './NomintatedMovie'
import styled from 'styled-components'

function NomintatedMovies({nominatedMovies, setNominatedMovies, movies, setMovies}) {

    return (
        <StyledNominatedList>
            {nominatedMovies.map((movie) => (
                <NomintatedMovie movie={movie} movies={movies} key={movie.imdbID} nominatedMovies={nominatedMovies} setNominatedMovies={setNominatedMovies} setMovies={setMovies}/>
            ))}
            
        </StyledNominatedList>
    )
}

const StyledNominatedList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin: .25rem 1rem 1rem 10rem;
`

export default NomintatedMovies
