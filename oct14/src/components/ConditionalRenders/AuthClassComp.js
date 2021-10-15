import React, { Component } from "react";
import "./AuthClassComp.css";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login-comp">
        <div>Login Component</div>
        <input defaultValue="email" />
        <br />
        <br />
        <input defaultValue="password"></input> <br />
        <br />
      </div>
    );
  }
}

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="reg-comp">
        <div>Register Component</div>
        <input defaultValue="email" />
        <br />
        <br />
        <input defaultValue="password"></input> <br />
        <br />
        <input defaultValue="Confirm password"></input> <br />
        <br />
        <input defaultValue="Address"></input> <br />
        <br />
      </div>
    );
  }
}

class AuthClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  showRegister = (e) => {
    this.setState({ isLoggedIn: false });
  };
  showLogin = (e) => {
    this.setState({ isLoggedIn: true });
  };
  render() {
    return (
      <div className="AuthPage">
        {this.state.isLoggedIn == true ? (
          <LoginComponent />
        ) : (
          <RegisterComponent />
        )}

        {this.state.isLoggedIn ? (
          <button className="login-btn" onClick={this.showLogin}>Logged In</button>
        ) : (
          <button className="login-btn" onClick={this.showLogin}>Log In</button>
        )}

        {this.state.isLoggedIn ? (
          <button className="register-btn" onClick={this.showRegister}>
            New Register
          </button>
        ) : (
          <button className="register-btn" onClick={this.showRegister}>
            Register
          </button>
        )}
      </div>
    );
  }
}

export default AuthClassComp;
