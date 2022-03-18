import React, { forwardRef } from 'react'
import TextTruncate from 'react-text-truncate'
import {ThumbUpSharp} from '@material-ui/icons'

import './videocard.css'


const Videocard = forwardRef(({ movie }, ref) => {
    const base_url = "https://image.tmdb.org/t/p/original"
    return (
        <div ref={ref} className='videoCard'>
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="" />
            <TextTruncate
                line={1}
                element="p"
                truncateText="...."
                text={movie.overview}
            />
            <h2>{movie.title}</h2>
            <p className='stats'>Relesed on : {movie.release_date || movie.first_air_date}  </p>
            <p className="stats"><ThumbUpSharp/> {movie.vote_count}</p>
        </div>
    )
})

export default Videocard