import React from 'react';
import {Row, Col} from 'react-bootstrap';

function Content() {
  return (
    <div id="content">
      <Row>
        <Col sm>sm-true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row>
    </div>
  );
}

export default Content;
