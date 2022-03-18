import React from 'react'
import './nav.css'
import request from './request'

function Nav({ setselectedoption }) {
    return (
        <div className='nav'>
            <h2 onClick={() => setselectedoption(request.fetchTrending)}>Trending</h2>
            <h2 onClick={() => setselectedoption(request.fetchTopRated)}>Top Rated</h2>
            <h2 onClick={() => setselectedoption(request.fetchActionMovies)}>Action</h2>
            <h2 onClick={() => setselectedoption(request.fetchComedyMovies)}>Comedy</h2>
            <h2 onClick={() => setselectedoption(request.fetchHorrorMovies)}>Horror</h2>
            <h2 onClick={() => setselectedoption(request.fetchRomanceMovies)}>Romance</h2>
            <h2 onClick={() => setselectedoption(request.fetchMystery)}>Mystery</h2>
            <h2 onClick={() => setselectedoption(request.fetchSciFi)}>Sci-fi</h2>
            <h2 onClick={() => setselectedoption(request.fetchWestern)}>Western</h2>
            <h2 onClick={() => setselectedoption(request.fetchAnimation)}>Animation</h2>
            <h2 onClick={() => setselectedoption(request.fetchTV)}>Movie</h2>

        </div>
    )
}

export default Nav