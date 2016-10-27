var w = window.innerWidth,
          h = window.innerHeight,
          margin = { top: 40, right: 20, bottom: 20, left: 40 },
          radius = 6;

      var svg = d3.select(".dots").append("svg").attr({
        width: w,
        height: h
      });

      var dataset = [
        { x: 100, y: 110 },
        { x: 83, y: 43 },
        { x: 92, y: 28 },
        { x: 49, y: 74 },
        { x: 51, y: 10 },
        { x: 25, y: 98 },
        { x: 77, y: 30 },
        { x: 20, y: 83 },
        { x: 11, y: 63 },
        { x:  4, y: 55 },
        { x:  0, y:  0 },
        { x: 85, y: 100 },
        { x: 60, y: 40 },
        { x: 70, y: 80 },
        { x: 10, y: 20 },
        { x: 40, y: 50 },
        { x: 25, y: 31 }
      ];

      // We're passing in a function in d3.max to tell it what we're maxing (x value)
      var xScale = d3.scale.linear()
          .domain([0, d3.max(dataset, function (d) { return d.x + 10; })])
          .range([margin.left, w - margin.right]);  // Set margins for x specific

      // We're passing in a function in d3.max to tell it what we're maxing (y value)
      var yScale = d3.scale.linear()
          .domain([0, d3.max(dataset, function (d) { return d.y + 10; })])
          .range([margin.top, h - margin.bottom]);  // Set margins for y specific

      // Add a X and Y Axis (Note: orient means the direction that ticks go, not position)
      var xAxis = d3.svg.axis().scale(xScale).orient("top");
      var yAxis = d3.svg.axis().scale(yScale).orient("left");

      var circleAttrs = {
          cx: function(d) { return xScale(d.x); },
          cy: function(d) { return yScale(d.y); },
          r: radius
      };


      // Adds X-Axis as a 'g' element
      svg.append("g").attr({
        "class": "axis",  // Give class so we can style it
        transform: "translate(" + [0, margin.top] + ")"  // Translate just moves it down into position (or will be on top)
      }).call(xAxis);  // Call the xAxis function on the group

      // Adds Y-Axis as a 'g' element
      svg.append("g").attr({
        "class": "axis",
        transform: "translate(" + [margin.left, 0] + ")"
      }).call(yAxis);  // Call the yAxis function on the group

      svg.selectAll("circle")
          .data(dataset)
          .enter()
          .append("circle")
          .attr(circleAttrs)  // Get attributes from circleAttrs var
          .on("mouseover", handleMouseOver)
          .on("mouseout", handleMouseOut);

      // On Click, we want to add data to the array and chart
      svg.on("click", function() {
          var coords = d3.mouse(this);

          // Normally we go from data to pixels, but here we're doing pixels to data
          var newData= {
            x: Math.round( xScale.invert(coords[0])),  // Takes the pixel number to convert to number
            y: Math.round( yScale.invert(coords[1]))
          };

          dataset.push(newData);   // Push data to our array

          svg.selectAll("circle")  // For new circle, go through the update process
            .data(dataset)
            .enter()
            .append("circle")
            .attr(circleAttrs)  // Get attributes from circleAttrs var
            .on("mouseover", handleMouseOver)
            .on("mouseout", handleMouseOut);
        })

      // Create Event Handlers for mouse
      function handleMouseOver(d, i) {  // Add interactivity

            // Use D3 to select element, change color and size
            d3.select(this).attr({
              fill: "orange",
              r: radius * 2
            });

            // Specify where to put label of text
            svg.append("text").attr({
               id: "t" + d.x + "-" + d.y + "-" + i,  // Create an id for text so we can select it later for removing on mouseout
                x: function() { return xScale(d.x) - 30; },
                y: function() { return yScale(d.y) - 15; }
            })
            .text(function() {
              return [d.x, d.y];  // Value of the text
            });
          }

      function handleMouseOut(d, i) {
            // Use D3 to select element, change color back to normal
            d3.select(this).attr({
              fill: "black",
              r: radius
            });

            // Select text by id and then remove
            d3.select("#t" + d.x + "-" + d.y + "-" + i).remove();  // Remove text location
          }

// ************************************LINE GRAPH*****************************
var margin = {top: 30, right: 40, bottom: 70, left: 50}, 
  width = 700 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

var parseDate = d3.time.format("%d-%b-%y").parse;

var x = d3.time.scale().range([0, width]);
var y0 = d3.scale.linear().range([height, 0]);
var y1 = d3.scale.linear().range([height, 0]);  

var xAxis = d3.svg.axis().scale(x)
  .orient("bottom").ticks(5);

var yAxisLeft = d3.svg.axis().scale(y0)
  .orient("left").ticks(5);

var yAxisRight = d3.svg.axis().scale(y1)
  .orient("right").ticks(5);    

var valueline = d3.svg.line()
  .x(function(d) { return x(d.date); })
  .y(function(d) { return y0(d.close); });  
    
var valueline2 = d3.svg.line()
  .x(function(d) { return x(d.date); })
  .y(function(d) { return y1(d.open); });
  
var svg = d3.select("body")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
var data = [
{"date":"9-Apr-12","close":436,"open":9.04},
{"date":"7-Apr-12","close":221,"open":4.02},
{"date":"5-Apr-12","close":113,"open":9.02},
{"date":"4-Apr-12","close":64,"open":32.05},
{"date":"3-Apr-12","close":29,"open":46.03},
{"date":"2-Apr-12","close":18,"open":51.03}
];

// Get the data
data.forEach(function(d) {
  d.date = parseDate(d.date);
  d.close = +d.close;
  d.open = +d.open;
});

// Scale the range of the data
x.domain(d3.extent(data, function(d) { return d.date; }));
y0.domain([0, d3.max(data, function(d) { 
  return Math.max(d.close); })]);
y1.domain([0, d3.max(data, function(d) { 
  return Math.max(d.open); })]);

svg.append("path")
  .attr("class", "line")
  .attr("id", "blueLine")
  .attr("d", valueline(data));

svg.append("path")
  .attr("class", "line")
  .style("stroke", "red")
  .attr("id", "redLine")
  .attr("d", valueline2(data));

svg.append("g") 
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis);

// edit the Y Axis Left
svg.append("g") 
  .attr("class", "y axis")
  .style("fill", "steelblue")
  .attr("id", "blueAxis")
  .call(yAxisLeft);

svg.append("g")
  .attr("class", "y axis")
  .attr("transform", "translate(" + width + " ,0)")
  .style("fill", "red")
  .attr("id", "redAxis")
  .call(yAxisRight);

// Add the blue line title
svg.append("text")
  .attr("x", 0)             
  .attr("y", height + margin.top + 10)    
  .attr("class", "legend")
  .style("fill", "steelblue")         
  .on("click", function(){
    // Determine if current line is visible
    var active   = blueLine.active ? false : true,
      newOpacity = active ? 0 : 1;
    // Hide or show the elements
    d3.select("#blueLine").style("opacity", newOpacity);
    d3.select("#blueAxis").style("opacity", newOpacity);
    // Update whether or not the elements are active
    blueLine.active = active;
  })
  .text("Blue Line");

// Add the red line title
d3.select("body")
  .append("svg")

svg.append("text")
  .attr("x", 0)             
  .attr("y", height + margin.top + 30)    
  .attr("class", "legend")
  .style("fill", "red")         
  .on("click", function(){
    // Determine if current line is visible
    var active   = redLine.active ? false : true ,
      newOpacity = active ? 0 : 1;
    // Hide or show the elements
    d3.select("#redLine").style("opacity", newOpacity);
    d3.select("#redAxis").style("opacity", newOpacity);
    // Update whether or not the elements are active
    redLine.active = active;
  })
  .text("Red Line");


