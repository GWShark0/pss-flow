import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Nav from './Nav';

import './BriefPage.css';

class BriefPage extends Component {
  render() {
    return (
      <div>
        <h1>Brief</h1>
        <div className="brief">
          <Form>
            <FormGroup row>
              <Label for="name" sm={2}>Name</Label>
              <Col sm={10}>
                <Input type="text" name="name" placeholder="Your Name" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="email" sm={2}>Email</Label>
              <Col sm={10}>
                <Input type="email" name="email" placeholder="Your Email" />
              </Col>
            </FormGroup>
          </Form>
        </div>
        <Nav
          previousPath={this.props.previousPath}
          nextPath={this.props.nextPath}
        />
      </div>
    );
  }
}

export default BriefPage;
