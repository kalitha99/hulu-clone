

import React, { useEffect, useState } from 'react'
import './result.css'
import Videocard from './Videocard'


import request from './request'
import axios from './axios'

function Result() {
    const [movies, setmovies] = useState([])
    useEffect(() => {
        async function fetchData() {
            const requests = await axios.get(request.fetchActionMovies)
            setmovies(requests.data.results)
        }
        fetchData()
    }, [movies])

    return (
        <div className='result'>
            {movies.map((movie, index) => (
                <Videocard key={index} movie={movie} />
            ))}


        </div>
    )
}

export default Result