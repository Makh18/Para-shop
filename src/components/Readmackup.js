import React from 'react';
import {Mackup} from '../utilities/Mackup.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './Movie.js';
import './Style.css';


export default function Readmackup() {
    return (
        <>
        <div className="mymain">
            {
           Mackup.map(elem => (
                        <Movie name={elem.description} id={elem.id} rating={elem.status} image={elem.image} />
                    ))
           } 
        </div>
        </>
        
    )
}
