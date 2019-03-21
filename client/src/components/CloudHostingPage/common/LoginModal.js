import React, { Component } from 'react';

class LoginModal extends Component {
  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          <h4>Account Login</h4>
          <p>Login to access your account dashboard</p>
          <form>
            <div className="input-field">
              <input type="email" id="email" />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
              <input type="password" id="password" />
              <label htmlFor="password">Password</label>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close btn grey">
            <i className="fa fa-sync" /> Reset Password
          </a>
          <a href="#!" className="modal-action modal-close btn purple">
            <i className="fa fa-lock" /> Login
          </a>
        </div>
      </div>
    );
  }
}

export default LoginModal;
