import React, { useEffect, useState } from 'react'
import FlipMove from 'react-flip-move'

import './result.css'
import Videocard from './Videocard'
import axios from './axios'

function Result({ selectedoption }) {
    const [movies, setmovies] = useState([])
    useEffect(() => {
        async function fetchData() {
            const requests = await axios.get(selectedoption)
            setmovies(requests.data.results)
        }
        fetchData()
    }, [selectedoption])

    return (
        <div className='result'>
            <FlipMove>
                {movies.map((movie) => (
                    <Videocard key={movie.id} movie={movie} />
                ))}
            </FlipMove>

        </div>
    )
}

export default Result