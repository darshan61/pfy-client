import React, { Component } from 'react';

export default class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="username">
              Email address
              <input type="email" className="form-control" id="username" placeholder="Email" />
            </label>
            <label htmlFor="password">
              Password
              <input type="email" className="form-control" id="password" placeholder="Password" />
            </label>
            <div className="row">
              <button type="submit" className="btn btn-outline-primary">Join Now</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
