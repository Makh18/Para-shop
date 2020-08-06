import React from 'react'
import {Mackup} from '../utilities/Mackup'
import { Link } from 'react-router-dom'

export default function Mackupoption() {
    return (
        <div style={{backgroundColor: '#a517ba', color:'#ffffff', padding: 10, display: 'inline-block', margin:20}}>
            <h1 style={{color:'#ffffff'}}>Produits</h1>
            {Mackup.map(product => (
                <div key={product.id} style={{marginBottom: 6}}>
                    <Link to={`/mackup/${product.id}`}> {product.description} </Link>    
                </div>
            ))}
        </div>
    )
}
