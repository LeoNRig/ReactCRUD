import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Edit({ desafioInicial, onEdit }) {
  const [show, setShow] = useState(false);
  const [desafio, setDesafio] = useState(desafioInicial.desafio);
  const [descricao, setDescricao] = useState(desafioInicial.descricao);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = () => {
    const desafioEditado = {
      ...desafioInicial,
      desafio,
      descricao,
    };
    onEdit(desafioEditado);
    handleClose();
  };

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Editar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Desafio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="desafio">
              <Form.Label>Desafio</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o desafio"
                value={desafio}
                onChange={(e) => setDesafio(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="descricao">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Digite a Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
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

export default Edit;
