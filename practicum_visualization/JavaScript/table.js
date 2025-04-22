let showTable = (idTable, data) => {
    let table = d3.select("#" + idTable);
		
	let rows = table
        .selectAll("tr")
		.data(data)
		.enter()
		.append('tr')	
		.style("display", "");

	let cells = rows
        .selectAll("td")
	    .data(d => Object.values(d))
		.enter()
		.append("td")
		.text(d => d);
	  
	let head = table
        .insert("tr", "tr")
		.selectAll("th")
		.data(d => Object.keys(data[0]))
		.enter()
		.append("th")
		.text(d => d);
}

let TableOn = (idTable, toggleButton) => {
    const dataTable = document.getElementById(idTable);

	if (toggleButton.value === 'Скрыть таблицу') {
		dataTable.hidden = true;
		toggleButton.value = 'Показать таблицу';
	}
	else {
		dataTable.hidden = false;
		toggleButton.value = 'Скрыть таблицу';
	}
}