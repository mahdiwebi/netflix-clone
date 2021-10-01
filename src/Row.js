import React , {useState, useEffect} from 'react'
import axios from './axios';
import './App.css';

const base_url ='https://image.tmdb.org/t/p/original'

const Row = ({title , fetchurl ,isLargeRow}) => {

    const [movies , setmovies] = useState([]);

        // code that runs on spefic condition

        useEffect( () => {
         async function fetchData() {

            const request = await axios.get(fetchurl);
          
            setmovies(request.data.results)
    
            console.log(request)

            return request;

           
    
         }

         fetchData();
        
        } , [fetchurl])
  
    return (
        <div className='row'>
            <h2> {title} </h2>
            
            <div className='row_posters'>
               
               { movies.map( movie => {

                 return (<img className={ `row_poster ${isLargeRow && "row_poster_large" }`}  src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} key={movie.id} alt=" " />)
                   
                 
                   
                   
                        
                   //console.log(`${base_url}${movie.poster_path}`)

                   
               })}

               
            </div>

             </div>
    )
}
 
export default Row;