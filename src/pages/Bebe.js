import React from 'react'
import Bebeoption from '../components/Bebeoption'
import Readbebe from '../components/Readbebe'
import Footer from '../components/Footer'
export default function Bebe() {
    return (
        <div>
        <div style={{display: 'flex'}}>
            <Bebeoption />
            <div style={{display: 'flex', justifyContent: 'center', width: '60%'}}>
                <Readbebe/>
            </div>
        </div>
        <Footer/>
        </div>
    )
}
