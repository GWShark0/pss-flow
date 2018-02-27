import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Nav from './Nav';

import './BriefPage.css';

class BriefPage extends Component {
  render() {
    return (
      <div>
        <h1>Brief</h1>
        <Form className="brief">
          {this.props.brief.map((field, i) => {
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
                    onChange={event =>
                      this.props.onBriefChange(i, event.target.value)
                    }
                  />
                </Col>
              </FormGroup>
            )
          })}
        </Form>
        <Nav
          previousPath={this.props.previousPath}
          nextPath={this.props.nextPath}
        />
      </div>
    );
  }
}

export default BriefPage;
