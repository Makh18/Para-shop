import React from 'react'
import {bebe} from '../utilities/bebe'
import { Link } from 'react-router-dom'

export default function Bebeoption() {
    return (
        <div style={{backgroundColor: '#a517ba', color:'#ffffff', padding: 10, display: 'inline-block', margin:20}}>
            <h1 style={{color:'#ffffff'}}>Produits</h1>
            {bebe.map(product => (
                <div key={product.id} style={{marginBottom: 6}}>
                    <Link to={`/bebe/${product.id}`}> {product.description} </Link>    
                </div>
            ))}
        </div>
    )
}
