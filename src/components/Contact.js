import React, { Component } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import axios from 'axios';
import classnames from 'classnames';
import Spinner from './Spinner';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      errors: {},
      success: '',
      loading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { name, email, message } = this.state;

    const emailData = { name, email, message };

    axios
      .post('/contact', emailData)
      .then(this.setState({ loading: true, success: '' }))
      .then(res => {
        if (res) {
          this.setState({
            name: '',
            email: '',
            message: '',
            errors: {},
            success: 'Your message has been sent!',
            loading: false
          });
        }
      })
      .catch(err =>
        this.setState({
          errors: err.response.data,
          success: '',
          loading: false
        })
      );
  }

  render() {
    const { errors, success } = this.state;

    return (
      <div>
        <div className="wrapTitle centerContent anim">
          <h1 className="cinzel text-center pageTitle text-light ">Contact</h1>
        </div>

        <div className="wrap centerContent">
          <div className="container anim">
            <Form
              noValidate
              onSubmit={this.handleSubmit}
              className="justify-content-center"
            >
              <FormGroup className="input-group input-group-lg mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-user" />
                  </span>
                </div>
                <Input
                  type="text"
                  name="name"
                  className={classnames('form-control', {
                    'is-invalid': errors.name
                  })}
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                {errors.name && (
                  <div className="invalid-feedback lead">{errors.name}</div>
                )}
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
                  className={classnames('form-control', {
                    'is-invalid': errors.email
                  })}
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                {errors.email && (
                  <div className="invalid-feedback lead">{errors.email}</div>
                )}
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
                  className={classnames('form-control', {
                    'is-invalid': errors.message
                  })}
                  placeholder="Message"
                  value={this.state.message}
                  onChange={this.handleChange}
                  rows="5"
                />
                {errors.message && (
                  <div className="invalid-feedback lead">{errors.message}</div>
                )}
              </FormGroup>

              {success && (
                <div className="lead pb-3 text-success ">{success}</div>
              )}

              {this.state.loading ? <Spinner /> : ''}

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
