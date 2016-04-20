import React from "react";
import ReactDOM from "react-dom";
import createChart from "../doctorChart";


class ChartComponent extends React.Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.setState({
      name: this.props.name,
      data: this.props.data
    });
    createChart(this.state.name, this.state.data);
  }

  /* non-state methods */
  render() {
    <div classID={`chart${name}`} />
  }

}

export default ChartComponent;
