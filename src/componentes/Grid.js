import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Grid() {
  return (
    <Container>
      <Row>
        <Col>Desafio</Col>
        <Col>Descrição</Col>
      </Row>
    </Container>
  );
}

export default Grid;