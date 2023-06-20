import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Grid from './componentes/Grid.js';
import ModalAdd from './componentes/Modal.js';

function App() {
  const [desafios, setDesafios] = useState([]);

  const handleAddDesafio = (desafio) => {
    setDesafios([...desafios, desafio]);
    localStorage.setItem('listDesafios', JSON.stringify([...desafios, desafio]));
  };

  const handleRemove = (index) => {
    const novaListaDesafios = desafios.filter((_, i) => i !== index);
    setDesafios(novaListaDesafios);
    localStorage.setItem('listDesafios', JSON.stringify(novaListaDesafios));
  };

  const handleEditDesafio = (index, desafioEditado) => {
    const novaListaDesafios = [...desafios];
    novaListaDesafios[index] = desafioEditado;
    setDesafios(novaListaDesafios);
    localStorage.setItem('listDesafios', JSON.stringify(novaListaDesafios));
  };

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Crud Desafios</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            <ModalAdd onSave={handleAddDesafio} onCancel={() => {}} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Grid desafios={desafios} onRemove={handleRemove} onEdit={handleEditDesafio} />
      </Container>
    </div>
  );
}

export default App;
