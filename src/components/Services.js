import React from 'react'
import i1 from '../images/1.png';
import i2 from '../images/2.png';
import i3 from '../images/3.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClinicMedical,faCapsules,faCannabis} from "@fortawesome/free-solid-svg-icons";
export default function Services() {
    return (
        <div class="sectionservices">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-4 services">
                        
<FontAwesomeIcon icon={faClinicMedical} style={{ color: '#a517ba' }} size="3x" />
                        <h4>Vente en ligne</h4>
                        <p>Nous offrons Un large choix de produits de parapharmacie (santé, beauté, minceur, et bien être.) au meilleur prix et sélectionnés parmi les plus grands laboratoires.</p>
                    </div>
                    <div class="col-md-4 services">
                    <FontAwesomeIcon icon={faCapsules} style={{ color: '#a517ba' }} size="3x" />
                      
                        <h4>Consultation</h4>
                        <p>Nous offrons des spécialistes dans le domaine pharmacitique que vous aide à choisir le bon traitement et etre trés satisfait.</p>
                    </div>
                    <div class="col-md-4 services">
                    <FontAwesomeIcon icon={faCannabis} style={{ color: '#a517ba' }} size="3x" />
                        <h4>Laivraison par tout</h4>
                        <p>Nous avons  des différentes transporteurs dans toute la Tunisie pour transmettre vos commandes dans le bref délais.</p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

