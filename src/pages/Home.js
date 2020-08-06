import React from 'react'
import Header from '../components/Header';
import Box from '../components/Box'
import Boxthree from '../components/Boxthree'
import Services from '../components/Services'
import About from '../components/About'
import Testmonials from '../components/Testemonials'
import Social from '../components/Social'
import Footer from '../components/Footer'
import Read from '../components/Read'
import { library } from '@fortawesome/fontawesome-svg-core';

export default function Home() {
    return (
        <div>
           <Header/> 
           <h1 class="title text-center margh">Nos Services</h1>

           <Services/>
           
           <h1 class="title text-center">Pourquoi nous choisir
</h1>
            <About/>
            <h1 class="title text-center">Avis de clients
</h1>
           <Testmonials/>
           <h1 class="title">Produits À La Une</h1>
           <Read/>
           <Social/>
           <Footer/>
        </div>
    )
}
