document.addEventListener("DOMContentLoaded", function() {
    createTable(animals, 'list');
    setSortSelects(correspond, document.getElementById('sort'));

    document.getElementById('searhFilter').onclick = function() {
        filterTable(animals, 'list', document.getElementById('filter'));
    }
    document.getElementById('clearFilter').onclick = function() {
        clearFilter(animals, 'list', document.getElementById('filter'))
    }
    document.getElementById('fieldsFirst').onchange = function() {
        changeNextSelect('fieldsSecond', document.getElementById('fieldsFirst'))
    }
    document.getElementById('fieldsSecond').onchange = function() {
        changeNextSelect1('fieldsThird', document.getElementById('fieldsSecond'))
    }
    document.getElementById('sortOn').onclick = function() {
        sortTable('list', document.getElementById('sort'))
    }
    document.getElementById('sortOff').onclick = function() {
        SortReset('list', document.getElementById('sort'))
    }
    document.getElementById('draw').addEventListener('click', function() {
        checkOfDrawing();
    });

    d3.select("#maxLength")
        .on("click", function(){
            ClearError();
        });

    d3.select("#minLength")
        .on("click", function(){
            ClearError();
        });
})

let createOption = (str, val) => {
    let item = document.createElement('option');
    item.text = str;
    item.value = val;
    return item;
}

// формирование поля со списком 
// параметры – массив со значениями элементов списка и элемент select

let setSortSelect = (arr, sortSelect) => {
    
    // создаем OPTION Нет и добавляем ее в SELECT
    sortSelect.append(createOption('Нет', 0));
    
    // перебираем все ключи переданного элемента массива данных
    for (let i in arr) {
       // создаем OPTION из очередного ключа и добавляем в SELECT
       // значение атрибута VAL увеличиваем на 1, так как значение 0 имеет опция Нет
        sortSelect.append(createOption(arr[i], Number(i) + 1));
    }
}

let setSortSelects = (data, dataForm) => { 

    // выделяем ключи словаря в массив
    let head = Object.keys(data);

    // находим все SELECT в форме
    let allSelect = dataForm.getElementsByTagName('select');
    
    for(let j = 0; j < allSelect.length; j++) {
        //формируем очередной SELECT
        setSortSelect(head, allSelect[j]);
        //САМОСТОЯТЕЛЬНО все SELECT, кроме первого, сделать неизменяемым
        if (j > 0){
            allSelect[j].disabled = true;
        }
    }
}

// настраиваем поле для следующего уровня сортировки
let changeNextSelect = (nextSelectId, curSelect) => {
    
    let nextSelect = document.getElementById(nextSelectId);
    let lastSelect = document.getElementById("fieldsThird");
    
    
    nextSelect.disabled = false;
    
    // в следующем SELECT выводим те же option, что и в текущем
    nextSelect.innerHTML = curSelect.innerHTML;
    
    if (curSelect.value != 0) {
       nextSelect.remove(curSelect.value);
       lastSelect.disabled = true;
    } else {    // удаляем в следующем SELECT уже выбранную в текущем опцию
    // если это не первая опция - отсутствие сортировки

        nextSelect.disabled = true;
        lastSelect.disabled = true;
    }
}

let changeNextSelect1 = (nextSelectId, curSelect) => {
    
    let nextSelect = document.getElementById(nextSelectId);
    
    nextSelect.disabled = false;
    
    // в следующем SELECT выводим те же option, что и в текущем
    nextSelect.innerHTML = curSelect.innerHTML;
    
    if (curSelect.value != 0) {
        if (curSelect.value === '7') {
            nextSelect.remove(curSelect.value - 1);
        } else {
            if (nextSelect[curSelect.value].value === curSelect.value) {
                nextSelect.remove(curSelect.value);
            } else {
                nextSelect.remove(curSelect.value - 1); 
            }
        }
        //alert(nextSelect[curSelect.value].value);
        
        
            
       
       
    } else {    // удаляем в следующем SELECT уже выбранную в текущем опцию
    // если это не первая опция - отсутствие сортировки

        nextSelect.disabled = true;
    }
}

function checkOfDrawing() {
    let radioValue = document.querySelector('input[name="ox"]:checked').value;
    let checkboxValues = Array.from(document.querySelectorAll('input[name="Length"]:checked')).map(checkbox => checkbox.value);
    let itemTypeGraph = document.getElementById('graph-select').value;
    let CheckboxFirst = document.getElementById("maxLength");
    let CheckboxSecond = document.getElementById("minLength");
    if (checkboxValues.length == 0) {
        
        CheckboxFirst.style = "outline: 1px solid red;";
        CheckboxSecond.style = "outline: 1px solid red;";
    }
    else {
        if (checkboxValues.length == 2) drawGraph(createAnimalsArrayFromTable("list"), radioValue, 1, true, itemTypeGraph);
        if (checkboxValues.length == 1 && checkboxValues[0] == 'minLength') drawGraph(createAnimalsArrayFromTable("list"), radioValue, 0, false, itemTypeGraph);
        if (checkboxValues.length == 1 && checkboxValues[0] == 'maxLength') drawGraph(createAnimalsArrayFromTable("list"), radioValue, 1, false, itemTypeGraph);
    }
    
};


function ClearError() {
    d3.select("#maxLength").style("outline", "none");
    d3.select("#minLength").style("outline", "none");
    
};

function createAnimalsArrayFromTable(tableId) {
    const table = document.getElementById(tableId);
  
    const rows = Array.from(table.rows);
    
    const headers = Array.from(rows[0].cells).map(th => th.textContent.trim());
    
    const dataRows = rows.slice(1).map(row => 
      Array.from(row.cells).map(cell => cell.textContent.trim())
    );
  
    return dataRows.map(row => {
      const animal = {};
      
      headers.forEach((header, index) => {
        let value = row[index] || '';
        
        if (header.includes('Популяция') || header.includes('длина тела')) {
          value = parseInt(value.replace(/\D+/g, '')) || 0;
        }
        
        animal[header] = value;
      });
      
      return animal;
    });
  }