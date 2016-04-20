import d3 from "d3";


function createChart(name, data) {
  if (data && data.length) {
    let margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = 360 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;


    let svg = d3.select(`#chart${name}`).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      let data_arr = [];
      let avg = 0;
      for (var key in data) {
        // skip loop if the property is from prototype
        if (!data.hasOwnProperty(key)) continue;
        let obj = data[key];
        data_arr.push(obj);
      }

      let x = d3.time.scale()
          .range([0, width]);

      let y = d3.scale.linear()
          .range([height, 0]);

      let xAxis = d3.svg.axis()
          .scale(x)
          .orient("bottom");

      let yAxis = d3.svg.axis()
          .scale(y)
          .orient("left");
      x.domain(d3.extent(data, function(d) { return d.visit }));
      y.domain(d3.extent(data, function(d) { return d.number }));

      let line = d3.svg.line()
          .x(function(d) {
            return x(d.visit);
          })
          .y(function(d) {
            return y(d.number);
      });

      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("metric (units)");

      svg.append("path")
          .datum(data)
          .attr("class", "line")
          .attr("d", line);
    }
}

export default createChart;
