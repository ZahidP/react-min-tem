import React from "react";
import ReactDOM from "react-dom";
import createChart from "../doctorChart";


class ChartComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      data: null
    }
  }
  componentDidMount() {
    console.log('in chart component');
    this.setState({
      name: this.props.name,
      data: this.props.data
    });
    console.log(this.state);
  }

  /* non-state methods */
  render() {
    console.log(this.state);
    if (this.state) {
      createChart(this.state.name, this.state.data);
    }
    return(
      <div id={`innerChart${this.state.name}`}>
      </div>
    );
  }
}

export default ChartComponent;
