import React from 'react'
import Fhoption from '../components/Fhoption'
import ReadFh from '../components/ReadFh'
import Footer from '../components/Footer'

export default function Fh() {
    return (
        <div>
        <div style={{display: 'flex'}} class="mybabyDT">
            <Fhoption />
            <div style={{display: 'flex', justifyContent: 'center', width: '60%'}}>
                <ReadFh/>
            </div>
        </div>
        <Footer />
        </div>
    )
}
