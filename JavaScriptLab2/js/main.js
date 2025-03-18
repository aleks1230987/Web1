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

