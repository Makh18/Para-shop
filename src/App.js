import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav, NavDropdown,Form, Button,FormControl} from 'react-bootstrap';
import Home from './pages/Home';
import im1 from './images/logo1.png';
import Bebe from './pages/Bebe';
import BebeDetails from './pages/BebeDetails'
import Mackup from './pages/Mackup'
import MackupDetails from './pages/MackupDetails'
import Fh from './pages/Fh'
import FhDetails from './pages/FhDetails';
import Contact from './pages/Contact'

function App() {
  return (
    <div>
       <Router>
      <Navbar bg="light" expand="lg" className="colory">
  <Navbar.Brand href="#home"><img src={im1}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="#link" className="ss"><Link to="/home">Home </Link></Nav.Link>
      <Nav.Link href="#link"><Link to="/bebe"> Bebe et Enfant</Link></Nav.Link>
      <Nav.Link href="#link"><Link to="/mackup"> Maquiage</Link></Nav.Link>
      <Nav.Link href="#link"><Link to="/femmehomme"> Homme-femme</Link></Nav.Link>
      <Nav.Link href="#link"><Link to="/contact"> Contact</Link></Nav.Link>

    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-danger">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  

  <Switch>
    <Route path="/home" exact={true} component={Home}/>
    <Route path="/bebe" exact component={Bebe} />
    <Route path="/bebe/:id" exact component={BebeDetails} />
    <Route path="/mackup" exact component={Mackup} />
    <Route path="/mackup/:id" exact component={MackupDetails} />
    <Route path="/femmehomme" exact component={Fh} />
    <Route path="/femmehomme/:id" exact component={FhDetails} />
    <Route path="/contact" exact component={Contact} />






    
  </Switch>
  
</Router>

    </div>
  );
}

export default App;
