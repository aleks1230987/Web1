import { useState } from "react";
import ChartDraw from './ChartDraw.js';
import * as d3 from "d3";

const Chart = (props) => {
    const [ox, setOx] = useState("Тип");
    const [oy, setOy] = useState([true, false]);
    const [error, setError] = useState(null);
    const [typeGysto, settypeGysto] = useState("Точечная диаграмма");

    const handleCheckboxChange = (index) => (e) => {
        const newOy = [...oy];
        newOy[index] = e.target.checked;
        setOy(newOy);
        
        const hasSelected = newOy.some(item => item);
        setError(hasSelected ? "" : "Выберите хотя бы одно значение для оси OY");
    };
    

    const handleSubmit = (event) => {        
        event.preventDefault();

        const oyValues = Array.from(event.target.oy).map(c => c.checked);

        
        setError(null);
        setOx(event.target["ox"].value);
        setOy(oyValues);
        settypeGysto(event.target["diagrams"].value);
    }

    const createArrGraph = (data, key) => {   
        const groupObj = d3.group(data, d => d[key]);
        let entries = Array.from(groupObj.entries()); 
        entries.sort((a, b) => {
            return a[0].localeCompare(b[0]);
        });
        return entries.map(entry => {
            let minMax = d3.extent(entry[1].map(d => d['Средняя длина тела (см)']));
            return { labelX: entry[0], values: minMax };
        });
    }

    return (
        <>
            <h4>Визуализация</h4>
            <form onSubmit={handleSubmit}>
                <p> Значение по оси OX: </p>
                <div>
                    <input 
                        type="radio" 
                        name="ox" 
                        value="Тип" 
                        defaultChecked={ox === "Тип"}
                    />
                    Тип
                    <br/>		
                    <input 
                        type="radio" 
                        name="ox" 
                        value="Отряд"
                    />
                    Отряд
                    <br/>	
                    <input 
                        type="radio" 
                        name="ox" 
                        value="Семейство" 
                    />
                    Семейство
                </div>

                <p> Значение по оси OY </p>
                <div>
                    <input 
                        type="checkbox" 
                        name="oy" 
                        defaultChecked={oy[0]} 
                        onChange={handleCheckboxChange(0)}
                    />
                    Минимальная длина тела <br/>
                    <input 
                        type="checkbox" 
                        name="oy" 
                        defaultChecked={oy[1]} 
                        onChange={handleCheckboxChange(1)}
                    />
                    Максимальная длина тела
                    
                </div>

                <p> 
                    Тип диаграммы <select name="diagrams" id="diagrams-select">
                        <option value="Точечная диаграмма" name="pointgram" defaultChecked={typeGysto === "Точечная"}>Точечная диаграмма</option>
                        <option value="Гистограмма" name="gystogram">Гистограмма</option>
                    </select>
                </p>

                <p><button type="submit">Построить</button></p>
            </form>  

            {error && <div style={{color: "red"}}>{error}</div>}
            
            {!error && (oy[0] || oy[1]) && (
                <ChartDraw 
                    data={createArrGraph(props.data, ox)} 
                    oy={oy}
                    type={typeGysto}
                />
            )}  
        </>
    )
}

export default Chart;