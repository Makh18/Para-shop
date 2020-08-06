import React from 'react'
import { Form, Col, Row, FormControl, FormLabel, FormGroup, Button } from 'react-bootstrap'
import Footer from '../components/Footer'
export default function Contact() {
    return (
        <div>
            <div className="myform">
                <p>Pour plus d'information, merci de remplir le formulaire suivant:</p>
            <Form>
                <Row>
                    <Col>
                        <Form.Control placeholder="Nom" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Prénom" />
                    </Col>
                </Row>
                <Form.Group controlId="formGroupEmail" className="ae">
                    <Form.Control type="email" placeholder="email" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows="3" placeholder="votre message"/>
                </Form.Group>
            </Form>
               <Button variant="primary" type="submit">
                    Envoyer
                 </Button>
        </div>
        <Footer/>
        </div>
    )
}
