document.addEventListener("DOMContentLoaded", function() {
    const width = 600;
    const height = 600;      
    const svg = d3.select("svg")
       .attr("width", width)
	   .attr("height", height) ;

       
       let pict = drawPict(svg);

    const buttonDraw = document.getElementsByTagName("input")[10];
    const buttonClear = document.getElementsByTagName("input")[11];
    const buttonCheck1 = document.getElementsByTagName("input")[12];
    const buttonCheck2 = document.getElementsByTagName("input")[13];
    const select = document.getElementsByTagName("select")[1];
    const buttonAnim = document.getElementsByTagName("input")[14];
    const divLast = document.getElementsByTagName("div")[9];
    const span1 = document.getElementsByTagName("span")[2];
    const span2 = document.getElementsByTagName("span")[6];
    const span3 = document.getElementsByTagName("span")[9];
    const span4 = document.getElementsByTagName("span")[1];
    const span5 = document.getElementsByTagName("span")[3];
    const span6 = document.getElementsByTagName("span")[0];
    const select1 = document.getElementsByTagName("select")[0];

    const dataForm = document.getElementById("setting");

    buttonDraw.addEventListener("click", function(){
        draw(document.getElementById("setting"));
    });

    buttonClear.addEventListener("click", function(){
        svg.selectAll('*').remove();
    });

    buttonAnim.addEventListener("click", function(){
        if (!buttonCheck2.checked){
            runAnimation(document.getElementById("setting"));
        }
        else {
            if (select.selectedIndex === 0){
                let path = drawPath(select1.selectedIndex);	
                const svg = d3.select("svg")
                let pict = drawSmile(svg);
                pict.transition()
                    .ease(d3.easeLinear) // установить в зависимости от настроек формы
                    .duration(6000)
                    .attrTween('transform', translateAlong(path.node()));
                
            }
            else if (select.selectedIndex === 1){
                let path = drawPath(select1.selectedIndex);	
                const svg = d3.select("svg")
                let pict = drawSmile(svg);
                pict.transition()
                    .ease(d3.easeElastic) // установить в зависимости от настроек формы
                    .duration(6000)
                    .attrTween('transform', translateAlong(path.node()));
            }
            else {
                let path = drawPath(select1.selectedIndex);	
                const svg = d3.select("svg")
                let pict = drawSmile(svg);
                pict.transition()
                    .ease(d3.easeBounce) // установить в зависимости от настроек формы
                    .duration(6000)
                    .attrTween('transform', translateAlong(path.node()));
            }
        }
        
    });

    buttonCheck1.addEventListener("click", function(){
        if (!buttonCheck2.checked){
            if (buttonCheck1.checked){
                buttonDraw.hidden = true;
                select.hidden = false;
                divLast.hidden = false;
                span1.hidden = false;
                span2.hidden = false;
                span3.hidden = false;
            }
            else {
                buttonDraw.hidden = false;
                select.hidden = true;
                divLast.hidden = true;
                span1.hidden = true;
                span2.hidden = true;
                span3.hidden = true;
            }
        }
        else {
            if (buttonCheck1.checked){
                buttonDraw.hidden = true;
                select.hidden = false;
                divLast.hidden = false;
                span1.hidden = true;
                span2.hidden = false;
                span3.hidden = false;
                span5.hidden = false;
                span4.hidden = true;
                span6.innerHTML = "Пути перемещения";
            }
            else {
                buttonDraw.hidden = false;
                select.hidden = true;
                divLast.hidden = true;
                span1.hidden = true;
                span2.hidden = true;
                span3.hidden = true;
                span5.hidden = true;
                span4.hidden = false;
                span6.innerHTML = "Координаты рисунка";
            }
        }
        
    });

    buttonCheck2.addEventListener("click", function(){

        if (buttonCheck2.checked){
            span4.hidden = true;
            span1.hidden = true;
            span5.hidden = false;
            span6.innerHTML = "Пути перемещения";
        }
        else {
            span4.hidden = false;
            span1.hidden = false;
            span5.hidden = true;
            span6.innerHTML = "Координаты рисунка";
        }
    });
})

let draw = (dataForm) => {
	const svg = d3.select("svg");
    let pict = drawSmile(svg);
    pict.attr("transform", `translate(${dataForm.cx.value},${dataForm.cy.value}) scale(${dataForm.mx.value}, ${dataForm.my.value}) rotate(${dataForm.ang.value})`);
    
}

let runAnimation = (dataForm) => {
    const select = document.getElementsByTagName("select")[1];
    if (select.selectedIndex === 0){
        const svg = d3.select("svg")
        let pict = drawSmile(svg);
        pict.attr("transform", `translate(${dataForm.cx.value},${dataForm.cy.value}) scale(${dataForm.mx.value}, ${dataForm.my.value}) rotate(${dataForm.ang.value})`)
        .transition()
        .duration(6000)
        .ease(d3.easeLinear)
        .attr("transform", `translate(${dataForm.cx1.value},${dataForm.cy1.value}) scale(${dataForm.mx1.value}, ${dataForm.my1.value}) rotate(${dataForm.ang1.value})`);
    }
    else if (select.selectedIndex === 1) {
        const svg = d3.select("svg")
        let pict = drawSmile(svg);
        pict.attr("transform", `translate(${dataForm.cx.value},${dataForm.cy.value}) scale(${dataForm.mx.value}, ${dataForm.my.value}) rotate(${dataForm.ang.value})`)
        .transition()
        .duration(6000)
        .ease(d3.easeElastic)
        .attr("transform", `translate(${dataForm.cx1.value},${dataForm.cy1.value}) scale(${dataForm.mx1.value}, ${dataForm.my1.value}) rotate(${dataForm.ang1.value})`);
    }
    else {
        const svg = d3.select("svg")
        let pict = drawSmile(svg);
        pict.attr("transform", `translate(${dataForm.cx.value},${dataForm.cy.value}) scale(${dataForm.mx.value}, ${dataForm.my.value}) rotate(${dataForm.ang.value})`)
        .transition()
        .duration(6000)
        .ease(d3.easeBounce)
        .attr("transform", `translate(${dataForm.cx1.value},${dataForm.cy1.value}) scale(${dataForm.mx1.value}, ${dataForm.my1.value}) rotate(${dataForm.ang1.value})`);
    }
	
}

