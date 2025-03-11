// устанавливаем соответствие между полями формы и столбцами таблицы
let correspond = {
    "Название": "structure",
    "Тип": "category",
    "Страна": "country",
    "Город": "city",
    "Год": ["yearFrom", "yearTo"],
    "Высота": ["heightFrom", "heightTo"]
}

/* Структура ассоциативного массива:
{
    input_id: input_value,
    ...
}
*/
let dataFilter = (dataForm) => {
    
    let dictFilter = {};
    // перебираем все элементы формы с фильтрами
    
    for(let j = 0; j < dataForm.elements.length; j++) {

        let item = dataForm.elements[j];
        let valInput = item.value;

        if (item.type == "text") {
            valInput = valInput.toLowerCase(); 
        } 
        
        if (item.type === "number") {
            if (valInput) {
                valInput = Number(valInput);
            } else {
                if (item.id.includes('From')) {
                    valInput = -Infinity;
                }
                else if (item.id.includes('To')) {
                    valInput = Infinity;
                }
            }
            
        } 
        
         // формируем очередной элемент ассоциативного массива
        dictFilter[item.id] = valInput;
    }       
    return dictFilter;
}

// фильтрация таблицы
let filterTable = (data, idTable, dataForm) =>{
    let item1 = document.getElementById('fieldsFirst');
    item1.value = 0;
    let item2 = document.getElementById('fieldsSecond');
    item2.value = 0;
    item2.disabled = true;
    let item3 = document.getElementById('fieldsFirstDesc');
    let item4 = document.getElementById('fieldsSecondDesc');
    item3.checked = false;
    item4.checked = false;
    let datafilter = dataFilter(dataForm);

    let tableFilter = data.filter(item => {


        let result = true;
        
        for(let key in item) {
            
            let val = item[key];

            if (typeof val == 'string') {
                val = item[key].toLowerCase()
                result &&= val.indexOf(datafilter[correspond[key]]) !== -1
            }
            // САМОСТОЯТЕЛЬНО проверить числовые поля на принадлежность интервалу
            if (typeof val != 'string') {
                let min = datafilter[correspond[key][0]];
                let max = datafilter[correspond[key][1]];

                if (key === "Год" || key === "Высота") {
                    result &&= (val >= min && val <= max);
                }
                 
            }
         }
         return result;
    });     

    // САМОСТОЯТЕЛЬНО вызвать функцию, которая удаляет все строки таблицы с id=idTable
    clearTable(idTable);
    // показать на странице таблицу с отфильтрованными строками
    createTable(tableFilter, idTable);  
}

function clearFilter(data, idTable, dataForm) {
    let item1 = document.getElementById('fieldsFirst');
    item1.value = 0;
    let item2 = document.getElementById('fieldsSecond');
    item2.value = 0;
    item2.disabled = true;
    let item3 = document.getElementById('fieldsFirstDesc');
    let item4 = document.getElementById('fieldsSecondDesc');
    item3.checked = false;
    item4.checked = false;
    let items = dataForm.getElementsByTagName("input");
    for (let i = 0; i <= 7; i++){
        items[i].value = "";
    }

    clearTable(idTable);
    createTable(data, idTable);
}