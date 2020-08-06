import React from 'react'
import Mackupoption from '../components/Mackupoption'
import Readmackup from '../components/Readmackup'
import Footer from '../components/Footer'

export default function Mackup() {
    return (
        <div>
        <div style={{display: 'flex'}} class="mybabyDT">
            <Mackupoption />
            <div style={{display: 'flex', justifyContent: 'center', width: '60%'}}>
                <Readmackup/>
            </div>
        </div>
        <Footer />
        </div>
    )
}
