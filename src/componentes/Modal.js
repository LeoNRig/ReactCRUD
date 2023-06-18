import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalAdd() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleSave = () => {
    const desafiosValue = document.getElementById('desafio').value
    const descricaoValue = document.getElementById('descricao').value

    let listDesafios = localStorage.getItem('listDesafios');
    if(listDesafios) {
      listDesafios = JSON.parse(listDesafios);
    } else {
      listDesafios = [];
    }

    const obj = {
      desafios: desafiosValue,
      descricao: descricaoValue,
    }

    listDesafios.push(obj);

    localStorage.setItem('listDesafios', JSON.stringify(listDesafios));

    alert('Dados salvos');
    handleClose();
  }

  return (
    <>
    <Button variant="outline-success" onClick={handleShow}>Add</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Desafio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="desafio">
              <Form.Label>Desafio</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o desafio"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="descricao"
            >
              <Form.Label>Descrição</Form.Label>
              <Form.Control as="textarea" rows={3} 
              placeholder="Digite a Descrição"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAdd;