import './App.css';
import Grid from './componentes/Grid.js';
import Modal from './componentes/Modal.js'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
              
  return (
    <div className="App">
      <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Crud Desafios</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Modal></Modal>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Grid/>
      </>
    </div>
  );
}

export default App;
