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
    let pict = svg.append("g")
        .style("stroke", "brown")
        .style("stroke-width", 1.5)
        .style("fill", "red");
    
    pict.append("circle") 
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 70)
        .style("fill", "lightblue");
    
    pict.append("polygon") 
        .attr("points", "70,0 0,70 -70,0 0,-70")
        .style("fill", "blue");
    
    
        
    pict.append("polygon") 
        .attr("points", "70,0 0,70 -70,0 0,-70")
        .style("fill", "blue");
    
    pict.append("line") 
        .attr("x1", 70)
        .attr("y1", 0)
        .attr("x2", -70)
        .attr("y2", 0)
        .style("fill", "red");

    pict.append("line") 
        .attr("x1", 0)
        .attr("y1", 70)
        .attr("x2", 0)
        .attr("y2", -70)
        .style("fill", "red");

    pict.append("polygon") 
        .attr("points", "35,35 -35,35 -35,-35 35,-35")
        .style("fill", "green");

    pict.append("circle") 
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 25)
        .style("fill", "orange");

     
    pict.append("circle") 
        .attr("cx", -10)
        .attr("cy", -5)
        .attr("r", 2.5)
        .style("fill", "lightblue");
    
    pict.append("circle") 
        .attr("cx", 10)
        .attr("cy", -5)
        .attr("r", 2.5)
        .style("fill", "lightblue");
    
    let arc = d3.arc()
       .innerRadius(12.5)
       .outerRadius(12.5);    
    pict.append("path")
       .attr("d", arc({startAngle: Math.PI /3 * 2, endAngle: Math.PI/3 * 4}))
       .style("stroke", "brown")

    

     return pict  
}   