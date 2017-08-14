d3.select("p").text("Hello World !");

d3.select("body").append("p").text("second paragraph");
console.log(d3);


//<!-- Tutorial 3  -->
// d3.select("body")
//     .append("h1")
//     .style("color","red")
//     .text("Tutorial 3");

//<!--When Styling SVG elements we use attr method instead of style method This is a little catch here -->
// var width = 500; // in pixel
// var height = 500; // in pixel
// var canvas  = d3.select("body")
//     .append("svg")
//     .attr("width",width)
//     .attr("height",height)
//     .append("g") // Tutorial 6.  To group all svg emements 
//     .attr("transform","translate(50,50)");
// var circle = canvas.append("circle")
//     .attr("cx",250)
//     .attr("cy",250)
//     .attr("r",50)
//     .attr("fill","red")
//     .attr("stroke","green")
//     .attr("stroke-witdth",2);

// var rect = canvas.append("rect")
//     .attr("width",100)
//     .attr("height",50);

// var line = canvas.append("line")
//     .attr("x1",0)
//     .attr("y1",100)
//     .attr("x2",400)
//     .attr("y2",400)
//     .attr("stroke","green")
//     .attr("stroke-width",5);

//============================ Tutorial 4 Bind Data  ===========


var dataArray = [20,40,50];

// make a simple bar chart
//
//var bars = canvas.selectAll("rect")
//    .data(dataArray)
//    .enter()
//        .append("rect")
//        .attr("width",function(d){return d*10; })
//        .attr("height",50)
//        .attr("y",function(d,i){return i*100;});
//
//// =========================== Tutorial 5 Scale ========

/*scale are both functions and objects */

dataArray = [20,40,60]; // just repeating
var min_in_data = 0;
var max_in_data = 60;
var width = 500; // in pixel
var height = 500; // in pixel

// scaling 
var widthScale = d3.scale.linear()
    .domain([min_in_data,max_in_data])
    .range([0,width]);
var colorScale = d3.scale.linear()
    .domain([min_in_data,max_in_data])
    .range(["green","red"]);

// making axis    
var axis = d3.svg.axis()
    .ticks(5)
    .scale(widthScale);
    
var canvas  = d3.select("body")
    .append("svg")
    .attr("width",width)
    .attr("height",height)
    .append("g") // Tutorial 6.  To group all svg emements 
    .attr("transform","translate(50,50)")    
    //.call(axis); // Tut 6 make new g and add axis to it.

// moving axis to correct location 
canvas.append("g")
    .attr("transform","translate(0,400)")
    .call(axis);
    

// making dummy bar graph    
// var bars2 = canvas.selectAll("rect")
//     .data(dataArray)
//     .enter()
//         .append("rect")
//         .attr("fill",function(d){return colorScale(d);})
//         .attr("width",function(d){return widthScale(d); })
//         .attr("height",50)
//         .attr("y",function(d,i){return i*100;}); // This is for where to draw a rect


// Tutorial    =============       7  enter exit update

var data = [];

var c1 = canvas.append("circle")
    .attr("cx",50)
    .attr("cy",100)
    .attr("r",15);

var c2 = canvas.append("circle")
    .attr("cx",50)
    .attr("cy",200)
    .attr("r",15);

var cirlcles = canvas.selectAll("circle").data(data);
    
// update
cirlcles.attr("fill","red"); // update if already circle present

// enter    
cirlcles.enter()
        .append("circle")
        .attr("cx",50)
        .attr("cy",50)
        .attr("fill","green")
        .attr("r",25);
//exit    
cirlcles.exit().remove();

// Tutorial  ======================  8 Transitions

// Tutorial ======================== 9 Dealing with arrays

// Tutorial ====================== 10 Loading File




