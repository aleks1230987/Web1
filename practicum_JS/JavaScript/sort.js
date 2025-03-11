/*формируем массив для сортировки по уровням вида 
  (в нашем случае в форме два уровня сортировки):
   [
    {column: номер столбца, по которому осуществляется сортировка, 
     order: порядок сортировки (true по убыванию, false по возрастанию)
    },
    {column: номер столбца, 
     order: порядок сортировки
    }
   ]
*/
let createSortArr = (data) => {
    let sortArr = [];
    
    let sortSelects = data.getElementsByTagName('select');
    
    for (let i = 0; i < sortSelects.length; i++) {   
       // получаем номер выбранной опции
        let keySort = sortSelects[i].value;
        // в случае, если выбрана опция Нет, заканчиваем формировать массив
        if (keySort == 0) {
            break;
        }
        // получаем номер значение флажка для порядка сортировки
        // имя флажка сформировано как имя поля SELECT и слова Desc
        let desc = document.getElementById(sortSelects[i].id + 'Desc').checked;
        sortArr.push(
          {column: keySort - 1, 
           order: desc}
        ); 
    }
    return sortArr; 
};

let sortTable = (idTable, data) => {
    
    // формируем управляющий массив для сортировки
    let sortArr = createSortArr(data);
    
    // сортировать таблицу не нужно, во всех полях выбрана опция Нет
    if (sortArr.length === 0) {
        return false;
    }
    //находим нужную таблицу
    let table = document.getElementById(idTable);

    // преобразуем строки таблицы в массив 
    let rowData = Array.from(table.rows);
    
    // удаляем элемент с заголовками таблицы
    rowData.shift();

    let check1 = document.getElementById("fieldsFirstDesc").checked;
    let check2 = document.getElementById("fieldsSecondDesc").checked;
    
    //сортируем данные по возрастанию по всем уровням сортировки
    // используется массив sortArr
    rowData.sort((first, second) => {
        for(let i in sortArr) {
            let key = sortArr[i].column;
            let isDescending = (i == 0) ? check1 : check2;
            if (key === 4 || key === 5) {
                let num1 = Number(first.cells[key].innerHTML);
                let num2 = Number(second.cells[key].innerHTML);
                
                if (num1 > num2) {
                    return isDescending ? -1 : 1;
                } else if (num1 < num2){
                    return isDescending ? 1 : -1;
                }
            }
            else {
                if (first.cells[key].innerHTML > second.cells[key].innerHTML) {
                    return isDescending ? -1 : 1;
                } else if (first.cells[key].innerHTML < second.cells[key].innerHTML){
                    return isDescending ? 1 : -1;
                }
            }
            
        }
        return 0;
    });

    
    
    //выводим отсортированную таблицу на страницу
    // сначала строку заголовка
    table.innerHTML = table.rows[0].innerHTML;
    // затем строки из отсортированного массива
    rowData.forEach(item => {
        table.append(item);
    });
}

function SortReset(idTable, data) {
    let item1 = document.getElementById('fieldsFirst');
    item1.value = 0;
    let item2 = document.getElementById('fieldsSecond');
    item2.value = 0;
    item2.disabled = true;
    let item3 = document.getElementById('fieldsFirstDesc');
    let item4 = document.getElementById('fieldsSecondDesc');
    item3.checked = false;
    item4.checked = false;
    clearTable(idTable);
    createTable(buildings, 'list');
    filterTable(buildings, 'list', document.getElementById('filter'));
}