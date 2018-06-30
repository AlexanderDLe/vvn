import React, { Component } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
// import classnames from 'classnames';
import axios from 'axios';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    const emailData = { name, email, message };

    axios
      .post('/contact', emailData)
      .then(() => console.log('Success'))
      .catch(err => this.setState({ errors: err.response.data }));
  }

  render() {
    // const { errors } = this.state;

    return (
      <div>
        <div className="wrapTitle centerContent">
          <h1 className="cinzel text-center pageTitle text-light ">Contact</h1>
        </div>

        <div className="wrap centerContent ">
          <div className="container">
            <Form onSubmit={this.onSubmit} className="justify-content-center">
              <FormGroup className="input-group input-group-lg mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-user" />
                  </span>
                </div>
                <Input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </FormGroup>

              <FormGroup className="input-group input-group-lg mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="far fa-envelope" />
                  </span>
                </div>
                <Input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </FormGroup>

              <FormGroup className="input-group input-group-lg mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-pencil-alt" />
                  </span>
                </div>
                <Input
                  type="textarea"
                  name="message"
                  className="form-control"
                  placeholder="Message"
                  value={this.state.message}
                  onChange={this.onChange}
                  rows="5"
                />
              </FormGroup>

              <Button className="contactButton text-center m-auto">
                SUBMIT
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
