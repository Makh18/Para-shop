import React from 'react';
import {movies} from '../utilities/data.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './Movie.js';
import './Style.css';


export default function Read() {
    return (
        <>
        <div className="mymain">
            {
           movies.map(elem => (
                        <Movie name={elem.name} id={elem.id} rating={elem.rating} device={elem.device} image={elem.image} />
                    ))
           } 
        </div>
        </>
        
    )
}
