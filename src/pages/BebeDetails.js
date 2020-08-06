import React from 'react'
import Bebeoption from '../components/Bebeoption'
import {bebe} from '../utilities/bebe'
import Movie from '../components/Movie'
import Footer from '../components/Footer'

export default function BebeDetails(props) {
    const relatedProduct = bebe.find( item => item.id ===  props.match.params.id)
    console.log('relatedProduct: ', relatedProduct)
    return (
        <div>
        <div style={{display: 'flex'}} class="mybabyDT"> 
            <Bebeoption />
            <div style={{display: 'flex', width: '60%', flexDirection: 'column', paddingLeft: 10}}>
                {/* <p> {props.match.params.id}  </p> 
                <h3> {relatedProduct.name} </h3>
                <p> {relatedProduct.description} </p>
                <hr style={{width: '100%'}} />
                <h5> {relatedProduct.status} </h5>
                */}
                <Movie name={relatedProduct.description} id={props.match.params.id}  rating={relatedProduct.status} image={relatedProduct.image}/>
                
            </div>

        </div>
                    <Footer/>
                    </div>

    )
}
