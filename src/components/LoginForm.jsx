import React from "react";
import ReactDOM from "react-dom";
import API from "../API";


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  componentDidMount() {
  }

  /* non-state methods */
  onChange() {
  }

  onLogin(e) {
    e.preventDefault();
    let _this = this;
    let formData = {
      username: _this.state.username,
      password: _this.state.password
    };
    this.props.onLogin(formData);
  }

  updateUserName(e) {
    this.setState({
      username: e.target.value
    });
  }

  updatePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    let who = (this.props.type === 'doctor') ? 'Doctors' : 'Patients';

    return (
      <form onSubmit={this.onLogin.bind(this)}>
        <h4> {who} </h4>
        <div className="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input
            onChange={this.updateUserName.bind(this)}
            value={this.state.username}
            type="input"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Username" />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            onChange={this.updatePassword.bind(this)}
            value={this.state.password}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password" />
        </div>
        <input
          type="submit"
          className="btn btn-default login-button" />
      </form>
    )
  }

};


export { LoginForm };
