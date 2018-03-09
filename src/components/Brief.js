import React from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';

function Brief(props) {
  return (
    <div>
      <h1>Brief</h1>
      <Form className="brief">
        {props.brief.map((field, i) => {
          const { label, name, placeholder, type, value } = field;
          return (
            <FormGroup row key={name}>
              <Label for={name} sm={2}>{label}</Label>
              <Col sm={10}>
                <Input
                  name={name}
                  placeholder={placeholder}
                  type={type}
                  value={value}
                  onChange={event => props.onChange(name, event.target.value)}
                />
              </Col>
            </FormGroup>
          )
        })}
      </Form>
    </div>
  );
}

Brief.defaultProps = {
  brief: [],
  onChange: () => {},
}

export default Brief;
