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


