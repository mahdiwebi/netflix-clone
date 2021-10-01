// @flow strict

import React , {useEffect, useState} from 'react';
import axios from 'axios';
import Requests from './request';
import './banner.css';

function Banner() {

const [movie, setmovie] = useState({})

useEffect(() => {
    
    async function fetchData() {
        const request = await axios.get(Requests.fetchTopRated);

        setmovie(
            request.data.results[
                Math.floor(Math.random() *  request.data.results.length)
            ]

        )

        return request;
    }

    fetchData();

}, []);




    return (
        <header className="banner" style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")` 
       }}>
      

        
       
            <div className='banner-content'>
        
                  <h1 class='banner-title'> {movie?.title || movie?.original_title || movie?.original_language } </h1>
           
           
            <div className='banner-buttons'>
                <button>play </button>
                <button>watch later </button>
            </div>
          
            <div className='banner-desc'>
                <p> {movie?.overview} </p>
               
            </div>


            </div>
            
            <div className='header-fade'></div>
        </header>
    );
};

export default Banner;