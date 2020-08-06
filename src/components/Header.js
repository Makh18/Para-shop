import React from 'react';
import im3 from '../images/12.png';
import im4 from '../images/wave.png';
import './Style.css';
import { Form, Button, Modal} from 'react-bootstrap'

export default function Header() {
    return (
        <div class="sectionbanner">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h2 class="promo-title">My Para Shop</h2>
                        <p>Société spécialise dans la vente des produit para-pharmaceutique</p>
                        <p>Nous offrons tous les produits pour toutes les générations</p> 
                        <Button variant="primary" type="submit" className="mybuton">
                                En savoir plus
                             </Button>
                             
                    </div>
                    <div class="col-md-6">
                        <img src={im3} class="image-fluid im-header"></img>
                    </div>

                </div>

            </div>
            <img src={im4} class="bottomimg"></img>
        </div>
    )
}
