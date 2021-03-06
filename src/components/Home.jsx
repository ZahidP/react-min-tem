import React from "react";
import ReactDOM from "react-dom";
import API from "../API";

import { LoginForm } from './LoginForm.jsx';
import { PatientPortal } from './PatientPortal.jsx';
import { DoctorPortal } from './DoctorPortal.jsx';
import data from '../../data/mock_data';


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      doctors: data.Doctors,
      patients: data.Patients,
      loggedInAs: 'doctor',
      showLogin: true,
      showFailedLogin: false,
      night: true
    }
  }
  componentDidMount() {
    //onInit()
    this.setState({
      doctors: data.Doctors,
      patients: data.Patients,
      loggedInAs: false
    })
  }
  componentWillUnmount() {
    // code
  }
  /* non-state methods */
  onChange() {
    this.setState(_getAppState);
  }
  onFileUpload(formData) {
    API.postDocument((err, resp) => {

    })
  }
  onInit(callback) {
    let stateData = {};
    API.fetchDoctors()
      .then(function(err, data) {
        stateData.Doctors = data;
        API.fetchPatients
          .then((err, patients) => {
            if (err) throw err;
            stateData.Patients = patients;
            return Promise.resolve(stateData);
        });
      });
  }
  toggleNightMode() {
    if (this.state.night === true) {
      this.setState({
        night: false
      })
    }
    else {
      this.setState({
        night: true
      })
    }
  }
  onLogin(formData,type) {
    let loggedIn= {};
    let db = type === 'doctor' ? `doctors` : `patients`;
    this.state[db].map((user) => {
      if (user.login === formData.username &&
          (user.password === formData.password)) {
        loggedIn = user;
        this.setState({
          loggedInAs: type,
          user: loggedIn,
          showLogin: false,
          showFailedLogin: false
        });
      }
      else {
        this.setState({
          showFailedLogin: true
        });
      }
    });
  }


  render() {
    let night = this.state.night ? 'night' : '';
    let doctor = 'doctor';
    let patient = 'patient';
    let loggedInAs = this.state.loggedInAs;
    let portal = '';
    let login = '';
    let loginFailed = '';
    let showLogin = this.state.showLogin ? `visible` : `hidden`;
    if (this.state.showFailedLogin) {
      loginFailed = <h3>Your login failed.</h3>
    }
    let welcomeText = this.state.loggedInAs ? null : (<h2 className={`welcome ${night}`}> Welcome. </h2>);

    if (loggedInAs === 'doctor') {
      portal = <DoctorPortal
        night={night}
        status={this.state.status}
        doctordata={this.state.user}
        patientdata={this.state.patients}>
      </DoctorPortal>
    }
    else if (loggedInAs === 'patient') {
      portal = <PatientPortal
        night={night}
        status={this.state.status}
        personaldata={this.state.user}>
      </PatientPortal>
    }


    return (
    <div>
    <div className={`container-fluid main ${night}`}>
      <div className="row" className={`main ${night}`}>
        <div className="col-md-1">
          <button
            className={`login-button ${night} switch`}
            onClick={this.toggleNightMode.bind(this)}>
            Switch Theme
          </button>
        </div>
        <div className="col-md-10">
          <div className={`row header ${night}`}>
            <div className="col-md-2"></div>
            <div className="col-md-6">
              {welcomeText}
            </div>
          </div>
          {/*Login Here Row*/}
          <div className={showLogin}>
            <div className="col-md-2">  </div>
            <div className="col-md-10">
              <h3 className={`welcome ${night}`}>
                Login Here
              </h3>
            </div>
          </div>
          {/*Login Form*/}
          <div className={showLogin}>
              <div className="col-md-2">
                {loginFailed}
              </div>
              <div className={`col-md-4 login-row ${night}`}>
                <LoginForm
                  status={loggedInAs}
                  type={doctor}
                  night={night}
                  onLogin={((formData) => this.onLogin(formData, doctor)).bind(this)}>
                </LoginForm>
              </div>
              <div className={`col-md-4 login-row ${night}`}>
                <LoginForm
                  status={loggedInAs}
                  type={patient}
                  night={night}
                  onLogin={((formData) => this.onLogin(formData, patient)).bind(this)}>
                  {/*handleClick.bind(this, i, props)*/}
                </LoginForm>
              </div>
          </div>
          {/*Portals*/}
          <div className={"row"}>
            {portal}
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  </div>
    )
  }
};


ReactDOM.render(<Home />, document.getElementById('react'));

export { Home };
