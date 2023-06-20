import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Edit from './Edit';

function Grid({ desafios, onRemove, onEdit }) {
  const handleRemove = (index) => {
    onRemove(index);
  };

  const handleEditDesafio = (index, desafioEditado) => {
    onEdit(index, desafioEditado);
  };

  return (
    <Container>
      <Row>
        <Col><b>Desafio</b></Col>
        <Col><b>Descrição</b></Col>
        <Col><b>Ação</b></Col>
      </Row>
      {desafios.map((desafio, index) => (
        <Row key={index}>
          <Col>{desafio.desafio}</Col>
          <Col>{desafio.descricao}</Col>
          <Col>
            <Edit desafioInicial={desafio} onEdit={(desafioEditado) => handleEditDesafio(index, desafioEditado)} />
            <Button variant="danger" onClick={() => handleRemove(index)}>Remover</Button>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default Grid;
