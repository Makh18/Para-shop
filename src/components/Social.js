import React from 'react'
import im10 from '../images/40.png';
import im12 from '../images/45.png';
import im13 from '../images/50.jpg';
import im14 from '../images/55.jpg';

export default function Social() {
    return (
        <div class="social-media">
            <div class="container text-center">
                <p>Retrouvez-nous sur les réseaux sociaux
</p>
                <div class="social-icons">
                    <a href="#"><img src={im10}></img></a>
                    <a href="#"><img src={im12}></img></a>
                    <a href="#"><img src={im13}></img></a>
                    <a href="#"><img src={im14}></img></a>

                </div>
            </div>
            
        </div>
    )
}
