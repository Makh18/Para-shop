import React from 'react'
import imm1 from '../images/logo1.png';
import im44 from '../images/wave2.png';
import { Form, FormControl, FormText, Button, FormLabel } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhone, faEnvelope,faHome} from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
    return (
        <div class="myfooter">
            <img src={im44}></img>
            <div class="container">
                <div class="row">
                    <div class="col-md-4 footer-box">
                        <img src={imm1}></img>
                        <p>Bienvenue dans notre para shop
                        </p>
                    </div>
                    <div class="col-md-4 footer-box">
                        <p><b>Nous Contacter</b></p>
                        <p><FontAwesomeIcon icon={faHome} style={{ color: '#a517ba' }} size="lg" />Avenue Taieb elmhiri 6000 Gabés</p>
                        <p><FontAwesomeIcon icon={faPhone} style={{ color: '#a517ba' }} size="lg" />+216 23 1200 1233</p>
                        <p><FontAwesomeIcon icon={faEnvelope} style={{ color: '#a517ba' }} size="lg" />pharmacieAl@gmail.com</p>
                    </div>
                    <div class="col-md-4 footer-box">
                        <p><b>Subscribe Newsletter</b></p>
                        <Form class="myform">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mybuton">
                                Subscribe
                             </Button>
                        </Form>

                    </div>
                </div>
                <hr  style={{
    color: '#ffffff',
    backgroundColor: '#ffffff',
    height: .5,
    borderColor : '#ffffff'
}}/>
                <p>Theme design 2020 | copyright tout droits réservés </p>
            </div>

        </div>
    )
}
