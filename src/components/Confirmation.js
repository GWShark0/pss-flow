import React from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';

import './Confirmation.css';

function Confirmation(props) {
  return (
    <div>
      <h1>Confirmation</h1>
      <Form className="confirmation">
        {props.brief.map((field) => {
          const { label, name, value } = field;
          return (
            <FormGroup row key={name}>
              <Label sm={2}>{label}</Label>
              <Col sm={10}>
                <Input type="text" value={value} readOnly />
              </Col>
            </FormGroup>
          )
        })}
        <FormGroup row>
          <Label sm={2}>Plan</Label>
          <Col sm={10}>
            <Input type="text" value={props.plan} readOnly />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Time</Label>
          <Col sm={10}>
            <Input type="text" value={props.time} readOnly />
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}

export default Confirmation;
