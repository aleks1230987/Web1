function createArrGraph(data, key) {  
  
    groupObj = d3.group(data, d => d[key]);

    let arrGraph =[];
    for(let entry of groupObj) {
        let minMax = d3.extent(entry[1].map(d => d['Средняя длина тела (см)']));
        arrGraph.push({labelX : entry[0], values : minMax});
     }

     return arrGraph;
}

function drawGraph(data, key, minMax, flagAll, typeGraph) {  
    const keyX = key; 
    const arrGraph = createArrGraph(data, keyX);
    
    let svg = d3.select("svg")  
    svg.selectAll('*').remove();

   attr_area = {
        width: parseFloat(svg.style('width')),
        height: parseFloat(svg.style('height')),
        marginX: 60,
        marginY: 60
   }
       
   if (typeGraph == 'point') { 
        if (flagAll == false) {
            const [scX, scY] = createAxis(svg, arrGraph, attr_area, minMax);
            
            createChart(svg, arrGraph, scX, scY, attr_area, "red", minMax);
        }
        if (flagAll == true) {
            const [scX, scY] = createAxisAD(arrGraph, attr_area, 1);
            const [fcX, fcY] = createAxis(svg, arrGraph, attr_area, 1);
            
            createChart(svg, arrGraph, scX, scY, attr_area, "red", 0); // Минимальная высота
            createChart(svg, arrGraph, fcX, fcY, attr_area, "blue", 1); // Максимальная высота
        }
    }
    if (typeGraph == 'gysto') {
        if (flagAll == false) {
            const [scX, scY] = createAxis(svg, arrGraph, attr_area, minMax);
            createGystos(svg, arrGraph, scX, scY, attr_area, "red", minMax);
        }
        if (flagAll == true) {
            const [scX, scY] = createAxisAD(arrGraph, attr_area, 1);
            const [fcX, fcY] = createAxis(svg, arrGraph, attr_area, 1);
            
            createGystos(svg, arrGraph, fcX, fcY, attr_area, "blue", 1);
            createGystos(svg, arrGraph, scX, scY, attr_area, "red", 0);
        }
    } 
    if (typeGraph == 'graph') {
        if (flagAll == false) {
            const [scX, scY] = createAxis(svg, arrGraph, attr_area, minMax);
            createGraph(svg, arrGraph, scX, scY, attr_area, "red", minMax);
        }
        if (flagAll == true) {
            const [scX, scY] = createAxisAD(arrGraph, attr_area, 1);
            const [fcX, fcY] = createAxis(svg, arrGraph, attr_area, 1);
            
            createGraph(svg, arrGraph, fcX, fcY, attr_area, "blue", 1);
            createGraph(svg, arrGraph, scX, scY, attr_area, "red", 0);
        }
    }         
}

function createAxis(svg, data, attr_area, maxH){
    // находим интервал значений, которые нужно отложить по оси OY 
    // максимальное и минимальное значение и максимальных высот по каждой стране
    const [min, max] = d3.extent(data.map(d => d.values[maxH]));
   
    // функция интерполяции значений на оси
    // по оси ОХ текстовые значения
     let scaleX = d3.scaleBand()
                    .domain(data.sort((a, b) => d3.ascending(a.labelX, b.labelX)).map(d => d.labelX))
                    .range([0, attr_area.width - 2 * attr_area.marginX]);
                    
     let scaleY = d3.scaleLinear()
                    .domain([0, max * 1.1 ])
                    .range([attr_area.height - 2 * attr_area.marginY, 0]);               
     
     // создание осей
    let axisX = d3.axisBottom(scaleX); // горизонтальная 
    let axisY = d3.axisLeft(scaleY); // вертикальная

    // отрисовка осей в SVG-элементе
    svg.append("g")
        .attr("transform", `translate(${attr_area.marginX}, 
                                      ${attr_area.height - attr_area.marginY})`)
        .call(axisX)
        .selectAll("text") // подписи на оси - наклонные
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", d => "rotate(-45)");
    
    svg.append("g")
        .attr("transform", `translate(${attr_area.marginX}, ${attr_area.marginY})`)
        .call(axisY);
        
    return [scaleX, scaleY]
}

function createAxisAD(data, attr_area, minMax){
    const [min, max] = d3.extent(data.map(d => d.values[minMax]));

    let scaleX = d3.scaleBand()
                    .domain(data.sort((a, b) => d3.ascending(a.labelX, b.labelX)).map(d => d.labelX))
                    .range([0, attr_area.width - 2 * attr_area.marginX]);
                    
    let scaleY = d3.scaleLinear()
                    .domain([0, max * 1.1 ])
                    .range([attr_area.height - 2 * attr_area.marginY, 0]);               
    
    return [scaleX, scaleY]
}

function createChart(svg, data, scaleX, scaleY, attr_area, color, mm) {
    const r = 4;
    let changing = 0;
    if (color == 'blue') changing += 4;

    svg.selectAll(".dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("r", r)
        .attr("cx", d => (scaleX(d.labelX) + scaleX.bandwidth() / 2) + changing)
        .attr("cy", d => scaleY(d.values[mm]))
        .attr("transform", `translate(${attr_area.marginX}, ${attr_area.marginY})`)
        .style("fill", color)
}

function createGystos(svg, data, scaleX, scaleY, attr_area, color, mm) {
    const w = 10;
    let changing = 0;
    if (color == 'blue') changing += 4;

    svg.selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", d => (scaleX(d.labelX) + scaleX.bandwidth() * 0.35) + changing)
        .attr("y", d => scaleY(d.values[mm]))
        .attr("width", w)
        .attr("height", d => attr_area.height - 2 * attr_area.marginY - scaleY(d.values[mm]))
        .attr("transform", `translate(${attr_area.marginX}, ${attr_area.marginY})`)
        .style("fill", color)
}

function createGraph(svg, data, scaleX, scaleY, attr_area, color, mm) {
    const r = 4;
    let changing = 0;
    if (color == 'blue') changing += 4;

    
    const lineGenerator = d3.line()
        .x(d => scaleX(d.labelX) + scaleX.bandwidth() / 2 + changing)
        .y(d => scaleY(d.values[mm]));

    
    svg.append("path")
        .data([data])
        .attr("d", lineGenerator)
        .attr("transform", `translate(${attr_area.marginX}, ${attr_area.marginY})`)
        .style("stroke", color)
        .style("fill", "none")
        .style("stroke-width", 2);

    
    svg.selectAll(".dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("r", r)
        .attr("cx", d => (scaleX(d.labelX) + scaleX.bandwidth() / 2) + changing)
        .attr("cy", d => scaleY(d.values[mm]))
        .attr("transform", `translate(${attr_area.marginX}, ${attr_area.marginY})`)
        .style("fill", color);
}