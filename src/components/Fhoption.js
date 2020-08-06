import React from 'react'
import {fh} from '../utilities/fh'
import { Link } from 'react-router-dom'

export default function Fhoption() {
    return (
        <div style={{backgroundColor: '#a517ba', color:'#ffffff', padding: 10, display: 'inline-block', margin:20}}>
            <h1 style={{color:'#ffffff'}}>Produits</h1>
            {fh.map(product => (
                <div key={product.id} style={{marginBottom: 6}}>
                    <Link to={`/homme-femme/${product.id}`}> {product.description} </Link>    
                </div>
            ))}
        </div>
    )
}
