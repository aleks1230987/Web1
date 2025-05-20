/*
   компонент, для фильтрации таблицы
   пропсы:
      fullData - полные данные, по которым формировалась таблица при загрузке страницы
      data - данные для фильтрации
	  filtering - функция обновления данных для фильтрации
*/

const Filter = (props) => {

    const handleSubmit= (event) => {        
        event.preventDefault();		

		// создаем словарь со значениями полей формы
		const filterField = {
			"Наименование": event.target["structure"].value.toLowerCase(),
		    "Тип": event.target["type"].value.toLowerCase(),
        "Отряд": event.target["country"].value.toLowerCase(),
		    "Семейство": event.target["city"].value.toLowerCase(),
        "Популяция (тыс)": [event.target["yearMin"].value ? Number(event.target["yearMin"].value) : -Infinity,
                event.target["yearMax"].value ? Number(event.target["yearMax"].value) : Infinity],
		    "Средняя длина тела (см)": [event.target["heightMin"].value ? Number(event.target["heightMin"].value) : -Infinity,
                   event.target["heightMax"].value ? Number(event.target["heightMax"].value) : Infinity],
        "Ареал обитания": event.target["area"].value.toLowerCase()
	    };
			
        //фильтруем данные по значениям всех полей формы
        let arr = props.fullData;
        for(const key in  filterField) {
			arr = arr.filter(item => {
        if (key === "Популяция (тыс)" || key === "Средняя длина тела (см)") {
          return item[key] >= filterField[key][0] && item[key] <= filterField[key][1];
        }
        else {
          return item[key].toLowerCase().includes(filterField[key]);
        }
          
        } 
			    );  
        }  
                
        //передаем родительскому компоненту новое состояние - отфильтрованный массив
        props.filtering(arr);
	  }

    const handleReset = () => {
        props.filtering(props.fullData);
    };

    return (
      <form onSubmit={ handleSubmit } onReset={ handleReset }> 
        <p>
          <label>Наименование:</label>
          <input name="structure" type="text" />
        </p>  
        <p>
          <label>Тип:</label>		
          <input name="type" type="text" />
        </p>
        <p>
          <label>Отряд:</label>		
          <input name="country" type="text" />
        </p>
        <p>
          <label>Семейство:</label>		
          <input name="city" type="text" />
        </p>
        <p>
          <label>Популяция (тыс) от:</label>		
          <input name="yearMin" type="number" />
        </p>
        <p>
          <label>Популяция (тыс) до:</label>		
          <input name="yearMax" type="number" />
        </p>
        <p>
          <label>Средняя длина тела (см) от:</label>		
          <input name="heightMin" type="number" />
        </p>
        <p>
          <label>Средняя длина тела (см) до:</label>		
          <input name="heightMax" type="number" />
        </p>
        <p>
          <label>Ареал обитания:</label>
          <input name="area" type="text" />
        </p>  
        <p>         
          <button type="submit">Фильтровать</button>   
		  <button type="reset">Очистить фильтр</button>
		</p>  
      </form> 
    )
}

export default Filter;