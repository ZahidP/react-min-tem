import React from "react";
import ReactDOM from "react-dom";
import API from "../API";


class DoctorPortal extends React.Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }

  /* non-state methods */
  render() {
    let doctorname = '';
    if (this.props.doctordata) {
      doctorname = this.props.doctordata.name;
    }
    let patientvisits = this.props.patientdata[0].visit_history.map((visit) => {
      return (
        <div className="row basic-info-body" key={visit.key}>
          <div className="col-md-4"> {visit.date} </div>
          <div className="col-md-4"> No reason. </div>
          <div className="col-md-4"> {visit.notes} </div>
        </div>)
    });

    return (
      <div className="row portal">
          <div className="row portal-header">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <h2> Doctor Portal </h2>
            </div>
          </div>
          <div className="row portal-body">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <h3> Welcome {doctorname} </h3>
                <h3> Patient Basic Info </h3>
                <div className="basic-info">
                <div className="row basic-info-header">
                    <div className="col-md-4"> Name </div>
                    <div className="col-md-4"> Location </div>
                    <div className="col-md-4"> DOB (Age) </div>
                  </div>
                  <div className="row basic-info-body">
                    <div className="col-md-4"> {this.props.patientdata[0].name} </div>
                    <div className="col-md-4"> {this.props.patientdata[0].location} </div>
                    <div className="col-md-4"> {this.props.patientdata[0].dob} </div>
                  </div>
                </div>
                <h3> Patient Visit Info </h3>
                <div className="basic-info">
                  <div className="row basic-info-header">
                    <div className="col-md-4"> Date </div>
                    <div className="col-md-4"> Reason </div>
                    <div className="col-md-4"> Notes </div>
                  </div>
                  <div className="medical-info-body-container">
                    {patientvisits}
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
  }

};


export { DoctorPortal };
