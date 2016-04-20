import React from "react";
import ReactDOM from "react-dom";
import API from "../API";
import d3 from "d3";
import createChart from "../doctorChart.js";
import ChartComponent from './ChartComponent.jsx';


class DoctorPortal extends React.Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }

  /* non-state methods */
  render() {
    let doctorname = '';
    let charts = [
      {
        chartName: "Metric A",
        chartData: this.props.patientdata[0].metrics['A']
      },
      {
        chartName: "Metric B",
        chartData: this.props.patientdata[0].metrics['B']
      }
    ];
    let night = this.props.night;
    if (this.props.doctordata) {
      doctorname = this.props.doctordata.name;
    }
    // table of patient visits
    let patientvisits = this.props.patientdata[0].visit_history.map((visit) => {
      return (
        <div className={`row basic-info-body ${night}`} key={visit.key}>
          <div className="col-md-4"> {visit.date} </div>
          <div className="col-md-4"> No reason. </div>
          <div className="col-md-4"> {visit.notes} </div>
        </div>)
    });
    // patient data in charts
    let chartTemplate = charts.map((chartInfo) => {
      <div className="metric-col col-md-4">
        <div className="metric-header">
          {chartInfo.chartName}
        </div>
        <div className="metric-chart">
          <ChartComponent
            name={chartInfo.chartName}
            data={chartInfo.data} />
        </div>
      </div>
    })

    return (
      <div className="row portal">
          <div className={`row portal-header ${night}`}>
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <h2> Doctor Portal </h2>
            </div>
          </div>
          <div className={`row portal-body ${night}`}>
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <h3 className={`portal-welcome ${night}`}> Welcome {doctorname} </h3>
                <h3 className={`basic-info-title ${night}`}> Patient Basic Info </h3>
                <div className={`basic-info ${night}`}>
                <div className={`row basic-info-header ${night}`}>
                    <div className="col-md-4"> Name </div>
                    <div className="col-md-4"> Location </div>
                    <div className="col-md-4"> DOB (Age) </div>
                  </div>
                  <div className={`row basic-info-body ${night}`}>
                    <div className="col-md-4"> {this.props.patientdata[0].name} </div>
                    <div className="col-md-4"> {this.props.patientdata[0].location} </div>
                    <div className="col-md-4"> {this.props.patientdata[0].dob} </div>
                  </div>
                </div>
                <h3 className={`basic-info-title ${night}`}> Patient Visit Info </h3>
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
                {/*Patient Key Metrics Bloc*/}
                <h3 className={`basic-info-title ${night}`}> Key Metrics </h3>
                <div className="basic-info">
                    {chartTemplate}
                  <div className="metric-col col-md-4">
                    <div className="metric-header"></div>
                    <div className="metric-chart"></div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
  }

};


export { DoctorPortal };
