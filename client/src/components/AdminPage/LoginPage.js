import React, { Component } from 'react';

class LoginPage extends Component {
  render() {
    return (
      <div className="section section-login">
        <div className="container">
          <div className="row">
            <div className="col s12 m8 offset-m2 l6 offset-l3">
              <div className="card-panel blue darken-2 white-text center">
                <h1>Madmin Login</h1>
                <form>
                  <div className="input-field">
                    <i className="material-icons prefix">email</i>
                    <input type="email" id="email" />
                    <label className="white-text" htmlFor="email">
                      Email
                    </label>
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">lock</i>
                    <input type="password" id="password" />
                    <label className="white-text" htmlFor="password">
                      Password
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-extended grey lighten-4 black-text"
                    style={{
                      display: 'block',
                      width: '80%',
                      margin: 'auto',
                      marginTop: '20px'
                    }}
                  >
                    LOGIN
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
