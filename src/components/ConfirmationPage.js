import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Nav from './Nav';

import './ConfirmationPage.css';

class ConfirmationPage extends Component {
  render() {
    return (
      <div>
        <h1>Confirmation</h1>
        <Form className="confirmation">
          {this.props.brief.map((field) => {
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
              <Input type="text" value={this.props.plan} readOnly />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Time</Label>
            <Col sm={10}>
              <Input type="text" value={this.props.time} readOnly />
            </Col>
          </FormGroup>
        </Form>
        <Nav
          previousPath={this.props.previousPath}
          nextPath={this.props.nextPath}
        />
      </div>
    );
  }
}

export default ConfirmationPage;
