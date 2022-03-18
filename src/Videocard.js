import React from 'react'
import TextTruncate from 'react-text-truncate'
import './videocard.css'

function Videocard({ movie }) {
    const base_url = "https://image.tmdb.org/t/p/original"
    return (
        <div className='videoCard'>
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="" />
            <TextTruncate
                line={1}
                element="p"
                truncateText="...."
                text={movie.overview}
            />
            <h2>{movie.title}</h2>
            <p>{movie.release_date || movie.first_air_date}</p>
        </div>
    )
}

export default Videocard