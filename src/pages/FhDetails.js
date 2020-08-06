import React from 'react'
import Fhoption from '../components/Fhoption'
import {fh} from '../utilities/fh'
import Movie from '../components/Movie'
import Footer from '../components/Footer'

export default function FhDetails(props) {
    const relatedProduct = fh.find( item => item.id ===  props.match.params.id)
    console.log('relatedProduct: ', relatedProduct)
    return (
        <div>
        <div style={{display: 'flex'}} class="mybabyDT"> 
            <Fhoption/>
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
