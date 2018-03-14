import React from 'react';
import { Col, Form as RSForm, FormGroup, Label, Input } from 'reactstrap';

function FormWrapper(props) {
  return (
    <RSForm>
      {props.form.map(field => {
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
                readOnly={props.readOnly}
              />
            </Col>
          </FormGroup>
        );
      })}
    </RSForm>
  )
}

FormWrapper.defaultProps = {
  form: [],
  onChange: () => {},
}

export default FormWrapper;
