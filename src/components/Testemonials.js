import React from 'react'
import im6 from '../images/femme.jpg'
import im9 from '../images/elle.jpg'

export default function Testemonials() {
    return (
        <div class="testemonials">
            <div class="container">
                <div class="row offset-1">
                    <div class="col-md-5 testim">
                        <p>Parfait..service et livraison rapide,Temps de livraison courte et plusieurs produits disponibles.</p>
                        <img src={im6}></img>
                        <p class="user-details"><b>Asma</b><br/>Dermatologue-cln</p>
                    </div>
                    <div class="col-md-5 testim">
                        <p>La livraison correspondait totalement a ce que nous avions choisi.Je recommande</p>
                        <img src={im9}></img>
                        <p class="user-details"><b>Rania</b><br/>Expert en esthétique</p>
                    </div>

                </div>
            </div>
            
        </div>
    )
}
