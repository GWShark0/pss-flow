import React from 'react';
import { Col, Form, FormFeedback, FormGroup, Label, Input } from 'reactstrap';

function FormWrapper(props) {
  return (
    <Form>
      {props.form.map(field => {
        const { feedback, label, name, valid, ...rest } = field;
        return (
          <FormGroup row key={name}>
            <Label for={name} sm={2}>{label}</Label>
            <Col sm={10}>
              <Input
                {...rest}
                name={name}
                readOnly={props.readOnly}
                valid={(props.readOnly || !props.showErrors) ? undefined : valid}
                onChange={event => props.onChange(name, event.target.value)}
              />
              <FormFeedback>{feedback}</FormFeedback>
            </Col>
          </FormGroup>
        );
      })}
    </Form>
  );
}

FormWrapper.defaultProps = {
  form: [],
  readOnly: false,
  onChange: () => {},
}

export default FormWrapper;
