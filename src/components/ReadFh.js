import React from 'react';
import {fh} from '../utilities/fh.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './Movie.js';
import './Style.css';


export default function ReadFh() {
    return (
        <>
        <div className="mymain">
            {
           fh.map(elem => (
                        <Movie name={elem.description} id={elem.id} rating={elem.status} image={elem.image} />
                    ))
           } 
        </div>
        </>
        
    )
}
