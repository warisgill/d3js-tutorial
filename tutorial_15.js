d3.select("p").text("Hello World !");

d3.select("body").append("p").text("second paragraph");
console.log(d3);
var width = 500; // in pixel
var height = 500; // in pixel

var canvas  = d3.select("body")
    .append("svg")
    .attr("width",width)
    .attr("height",height)
    .append("g") // Tutorial 6.  To group all svg emements 
    .attr("transform","translate(50,50)");

var data = {
    "name":"Pakistan",
    "children":[
        {
            "name": "Lahore",
            "children": [
                {
                    "name":"Attack 1",
                    "children":[{"name":"Source"},{"name":"Target"}]
                }
            ]
        },
        {
            "name": "Islamabad",
            "children": [
                {
                    "name":"Attack 1",
                    "children":[{"name":"Source"},{"name":"Target"}]
                },
                {
                    "name":"Attack 2",
                    "children":[{"name":"Source"},{"name":"Target"}]
                }
            ]
        },
        {
            "name": "Quetta",
            "children": [
                {
                    "name":"Attack 1",
                    "children":[{"name":"Source"},{"name":"Target"}]
                }
            ]
        },
        {"name": "Karachi"},
        {"name": "Peshawar"}
    ]
};

var data2 = {
    "name": "Eve",
    "children": [
      {
        "name": "Cain"
      },
      {
        "name": "Seth",
        "children": [
          {
            "name": "Enos"
          },
          {
            "name": "Noam"
          }
        ]
      },
      {
        "name": "Abel"
      },
      {
        "name": "Awan",
        "children": [
          {
            "name": "Enoch"
          }
        ]
      },
      {
        "name": "Azura"
      }
    ]
  };

var tree = d3.layout.tree()
    .separation(function(a, b) { return a.parent === b.parent ? 1 : 1.5; })
    .size([400,400]);

var nodes_points = tree.nodes(data);

var links_points = tree.links(nodes_points);


var nodes = canvas.selectAll(".node")
    .data(nodes_points)
    .enter()
    .append("g")
    .attr("class","node")
    .attr("transform", function (d){return "translate(" +d.y +"," + d.x +")" ;});

    nodes.append("circle")
    .attr("r",10)
    .attr("fill","steelblue");

text_check= nodes.append("text")
                // .attr("text-anchor","middle")
                .text((d)=>{return d.name});
console.log(text_check);

canvas.selectAll(".link")
    .data(links_points)
    .enter()
    .append("path")
    .attr("class","link")
    .attr("fill","none")
    .attr("stroke","red")
    .attr("d",d3.svg.diagonal().projection((d)=>{return [d.y,d.x];}));

