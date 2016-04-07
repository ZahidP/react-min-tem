import React from "react";
import ReactDOM from "react-dom";
import API from "../API";


class PatientPortal extends React.Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  /* non-state methods */
  onChange() {
  }
  logForm() {
  }

  render() {
    let visits = this.props.personaldata.visit_history.map((visit) => {
      return (
        <div key={visit.key}>
          <div> Visit </div>
          <div> {visit.date} </div>
        </div>
      );
    });

    return (
      <div className="row portal">
          <div className="row portal-header">
            <div className="col-md-1"></div>
            <div className="col-md-10">
                <h2> Patient Portal </h2>
            </div>
          </div>
          <div className="row portal-body">
            <div className="col-md-1"></div>
            <div className="col-md-10">
                <div className="basic-info">
                  <div className="row basic-info-header">
                    <div className="col-md-4"> Name </div>
                    <div className="col-md-4"> Location </div>
                    <div className="col-md-4"> DOB (Age) </div>
                  </div>
                  <div className="row basic-info-body">
                    <div className="col-md-4"> {this.props.personaldata.name} </div>
                    <div className="col-md-4"> {this.props.personaldata.location} </div>
                    <div className="col-md-4"> {this.props.personaldata.dob} </div>
                  </div>
                </div>
                {/*<div className="row">
                  <h3> Your Visit History </h3>
                  <div className="col-md-4">
                    <div className="row basic-info-header">
                      <div className="col-md-4"> Visits </div>
                    </div>
                    <div className="row basic-info-body">
                      <div className="col-md-4"> {visits} </div>
                    </div>
                  </div>
                </div>*/}
                <div className="row upload-row">
                    <h4> File input </h4>
                    <form action={this.testLog}
                      onSubmit={this.testLog}
                      method="post"
                      encType="multipart/form-data"
                      className="form-upload">
                        <div className="upload">
                          <label className="file-upload">
                            Upload File Here
                            <input type="file" name="upload"/>
                          </label>
                        </div>
                        <input type="submit" value="Post" />
                    </form>
                </div>
              </div>
        </div>
        </div>
    )
  }

};


export { PatientPortal };
