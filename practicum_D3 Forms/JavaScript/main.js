document.addEventListener("DOMContentLoaded", function() {
    const width = 600;
    const height = 600;      
    const svg = d3.select("svg")
       .attr("width", width)
	   .attr("height", height) ;

    
    const buttonDraw = document.getElementsByTagName("input")[11];
    const buttonClear = document.getElementsByTagName("input")[12];

    const dataForm = document.getElementById("setting");

    buttonDraw.addEventListener("click", function(){
        runAnimation(dataForm);
    });

    buttonClear.addEventListener("click", function(){
        svg.selectAll('*').remove();
    });


   

})

let draw = (dataForm) => {
	const svg = d3.select("svg");
    let pict = drawPict(svg);
    pict.attr("transform", `translate(${dataForm.cx.value},${dataForm.cy.value}) scale(${dataForm.mx.value}, ${dataForm.my.value}) rotate(${dataForm.ang.value})`);
    
}

let runAnimation = (dataForm) => {
    const select = document.getElementsByTagName("select")[0];
    const time = document.getElementById("time").value * 1000;
    if (select.selectedIndex === 0){
        let path = drawPath();	
        const svg = d3.select("svg")
        let pict = drawPict(svg);
        pict.transition()
        .ease(d3.easeLinear) // установить в зависимости от настроек формы
        .duration(time)
        .attrTween('transform', translateAlong(path.node(), dataForm));
        
    }
    else if (select.selectedIndex === 1){
        let path = drawPath();	
        const svg = d3.select("svg")
        let pict = drawPict(svg);
        pict.transition()
        .ease(d3.easeElastic) // установить в зависимости от настроек формы
        .duration(time)
        .attrTween('transform', translateAlong(path.node(), dataForm));
    }
    else {
        let path = drawPath();	
        const svg = d3.select("svg")
        let pict = drawPict(svg);
        pict.transition()
        .ease(d3.easeBounce) // установить в зависимости от настроек формы
        .duration(time)
        .attrTween('transform', translateAlong(path.node(), dataForm));
    }
	
}

