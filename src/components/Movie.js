import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import './Style.css';
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';

export default function Movie(props) {



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (

        <>
            <div>
                <Card style={{ width: '18rem' }} className="h">

                    <Card.Img variant="top" src={props.image} />
                    <Card.Body>
                        <Card.Title className="a">{props.name}</Card.Title>
                        <Card.Text className="a">
                            {props.rating}{props.device}
                        </Card.Text>

                    </Card.Body>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="info" type="submit" className="mybuton" onClick={handleShow}>Ajouter au panier
                     </Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton className="mytitle">
                                <Modal.Title><h4 >Produit ajouté au panier avec succès</h4></Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="show-grid">
                                <Container>
                                    <Row>
                                        <Col xs={12} md={8}>
                                            <h2>{props.name}</h2>
            </Col>
                                        <Col xs={6} md={4}>
                                            <p>Prix: {props.rating}{props.device}</p>
            </Col>
                                    </Row>

                                    <Row>
                                        <Col xs={6} md={4}>
                                            <img src={props.image} className="myimg"/>
            </Col>
                                        <Col xs={6} md={4}>
                                            <p>Frais de port : gratuit</p>
            </Col>
                                        <Col xs={6} md={4}>
                                        <p>Quantité : 1</p>
            </Col>
                                    </Row>
                                </Container>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose} className="mybuton">
                                    Continuer mes achats
          </Button>
                                <Button variant="primary" onClick={handleClose} className="mybuton">
                                    Commander
          </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>

                </Card>

            </div>
        </>










    )
}
