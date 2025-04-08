// создаем изображение смайлик
// рисуем его относительно точки (0, 0)
function drawSmile(svg) {
    let smile = svg.append("g")
        .style("stroke", "brown")
        .style("stroke-width", 2)
        .style("fill", "brown");
    //лицо
    smile.append("circle") 
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 50)
        .style("fill", "yellow");
    //левый глаз   
    smile.append("circle") 
        .attr("cx", -20)
        .attr("cy", -10)
        .attr("r", 5);
    //правый глаз
    smile.append("circle") 
        .attr("cx", 20)
        .attr("cy", -10)
        .attr("r", 5);
    // улыбка
    let arc = d3.arc()
       .innerRadius(35)
       .outerRadius(35);    
    smile.append("path")
       .attr("d", arc({startAngle: Math.PI /3 * 2, endAngle: Math.PI/3 * 4}))
       .style("stroke", "brown")

    

     return smile  
}   


function drawPict(svg) {
    let ship = svg.append("g")
        .style("stroke-width", 1.1)
        .style("fill", "brown");

    ship.append("polygon") 
        .attr("points", "1,18 21,14 18,20 1,20")
        .style("fill", "steelblue");

    ship.append("circle") 
        .attr("cx", 17)
        .attr("cy", 17)
        .attr("r", 1);

    ship.append("polygon") 
        .attr("points", "5,17 20,14 10,4")
        .style("fill", "gray");

    ship.append("polygon") 
        .attr("points", "10,1 16,1 16,4 10,4")
        .style("fill", "red");
  

     return ship;
}   