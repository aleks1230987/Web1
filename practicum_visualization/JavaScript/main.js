document.addEventListener("DOMContentLoaded", function() {
    showTable('build', buildings);
    drawGraph(buildings, 'Страна', 1, false, 'point');

    document.getElementById('TableOn').addEventListener('click', function() {
        TableOn('build', this);
    });

    document.getElementById('draw').addEventListener('click', function() {
        checkOfDrawing();
    });

    d3.select("#maxHeight")
        .on("click", function(){
            ClearError();
        });

    d3.select("#minHeight")
        .on("click", function(){
            ClearError();
        });
    
});

function checkOfDrawing() {
    let radioValue = document.querySelector('input[name="ox"]:checked').value;
    let checkboxValues = Array.from(document.querySelectorAll('input[name="Height"]:checked')).map(checkbox => checkbox.value);
    let itemTypeGraph = document.getElementById('graph-select').value;
    const maxHeightCheckbox = d3.select("#maxHeight");
    const minHeightCheckbox = d3.select("#minHeight");
    if (checkboxValues.length == 0) {
        maxHeightCheckbox.style("outline", "2px solid red");
        minHeightCheckbox.style("outline", "2px solid red");
    }
    else {
        if (checkboxValues.length == 2) drawGraph(buildings, radioValue, 1, true, itemTypeGraph);
        if (checkboxValues.length == 1 && checkboxValues[0] == 'minHeight') drawGraph(buildings, radioValue, 0, false, itemTypeGraph);
        if (checkboxValues.length == 1 && checkboxValues[0] == 'maxHeight') drawGraph(buildings, radioValue, 1, false, itemTypeGraph);
    }
    
};

function ClearError() {
    d3.select("#maxHeight").style("outline", "none");
    d3.select("#minHeight").style("outline", "none");
    
};
