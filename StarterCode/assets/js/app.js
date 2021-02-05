//Data Journalism

// The code for the chart is wrapped inside a function that
// automatically resizes the chart
function makeResponsive() {

    // if the SVG area isn't empty when the browser loads,
  // remove it and replace it with a resized version of the chart
  var svgArea = d3.select("body").select("svg");

   // clear svg is not empty
   if (!svgArea.empty()) {
    svgArea.remove();
  }
  
  //Setup Chart parameters and Dimensions
  var svgWidth = window.innerWidth;
  var svgHeight = window.innerHeight;
  
  //set SVG margins
  var margin = {
    top: 50,
    bottom: 50,
    right: 50,
    left: 50
  };

  //Define Chart area dimensions
  var height = svgHeight - margin.top - margin.bottom;
  var width = svgWidth - margin.left - margin.right;

// Create an SVG Element/Wrapper - Select Body, Append SVG Area & Set the Dimensions
var svg = d3
.select("#scatter")
.append("svg")
.attr("width", svgWidth)
.attr("height", svgHeight);

// Append group element
var chartGroup = svg.append("g")
.attr("transform", `translate(${margin.left}, ${margin.top})`);

   //read CSV data file
  var chosenXAxis = "Age";
  var chosenYAxis = "Smokers";

  // Function for Updating xScale Upon Click on Axis Label
  function xScale(acsData, chosenXAxis) {
    // Create Scale Functions for the Chart (chosenXAxis)
    var xLinearScale = d3.scaleLinear()
      .domain([d3.min(acsData, d => d[chosenXAxis]) * 0.8,
        d3.max(acsData, d => d[chosenXAxis]) * 1.2
      ])
      .range([0, width]);
    return xLinearScale;
  }
   // Function for Updating yScale Upon Click on Axis Label
   function yScale(acsData, chosenYAxis) {
    // Create Scale Functions for the Chart (chosenYAxis)
    var yLinearScale = d3.scaleLinear()
      .domain([d3.min(acsData, d => d[chosenYAxis]) * 0.8,
        d3.max(acsData, d => d[chosenYAxis]) * 1.2
      ])
      .range([height, 0]);
    return yLinearScale;
  }
  // Function for Updating xAxis Upon Click on Axis Label
  function renderXAxes(newXScale, xAxis) {
    var bottomAxis = d3.axisBottom(newXScale);
    xAxis.transition()
      .duration(1000)
      .call(bottomAxis);
    return xAxis;
  }

  // Function for Updating yAxis Upon Click on Axis Label
  function renderYAxes(newYScale, yAxis) {
    var leftAxis = d3.axisLeft(newYScale);
    yAxis.transition()
      .duration(1000)
      .call(leftAxis);
    return yAxis;
  }

 // Function for Updating Circles Group with a Transition to New Circles
  function renderCircles(circlesGroup, newXScale, chosenXAxis, newYScale, chosenYAxis) {

    circlesGroup.transition()
      .duration(1000)
      .attr("cx", d => newXScale(d[chosenXAxis]))
      .attr("cy", d => newYScale(d[chosenYAxis]));
    return circlesGroup;
  }

  // Function for Updating Text Group with a Transition to New Text
   function renderText(textGroup, newXScale, chosenXAxis, newYScale, chosenYAxis) {

    textGroup.transition()
      .duration(1000)
      .attr("x", d => newXScale(d[chosenXAxis]))
      .attr("y", d => newYScale(d[chosenYAxis]))
      .attr("text-anchor", "middle");

    return textGroup;
  }










}

