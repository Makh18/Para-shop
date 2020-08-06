import React from 'react';
import {bebe} from '../utilities/bebe.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './Movie.js';
import './Style.css';


export default function Readbebe() {
    return (
        <>
        <div className="mymain">
            {
           bebe.map(elem => (
                        <Movie name={elem.description} id={elem.id} rating={elem.status} image={elem.image} />
                    ))
           } 
        </div>
        </>
        
    )
}
