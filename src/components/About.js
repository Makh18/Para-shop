import React from 'react';
import im8 from '../images/jm2.png'

export default function About() {
    return (
        <div class="aboutus">
            <div class="container">
                <div class="row">
                     <div class="col-md-6 about1">
                         <h4 class="abtitle">Pourquoi nous sommes différent?</h4>
                         <ul>
                             <li>Spécialiste dans la vente parapharmacie en Tunisie</li>
                             <li>Propose une large gamme de produits des plus grandes marques</li>
                             <li>Soins du corps, du Visage, Maternité, Solaire, Minceur, Bio, Vétérinaire. </li>
                             <li>Un large choix de produits de parapharmacie au meilleur prix et sélectionnés parmi les plus grands laboratoires.</li>
                         </ul>
                         </div> 
                         <div class="col-md-6">
                             <img src={im8} class="imagefluid"/>
                         </div>
                </div>
            </div>
        </div>
    )
}
