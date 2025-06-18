import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import GroupGrid from './components/GroupGrid';
import GroupChart from './components/GroupChart';
import SettingChart from './components/SettingChart';
import * as React from 'react';

import Select, { SelectChangeEvent } from '@mui/material/Select'; 
import Box from '@mui/material/Box'; 
import InputLabel from '@mui/material/InputLabel'; 
import MenuItem from '@mui/material/MenuItem'; 
import FormControl from '@mui/material/FormControl';

import { types, orders, families } from "./groupdata";

type tSelect = "Тип" | "Отряд" | "Семейство";

function Chart() {
    const [group, setGroup] = React.useState<tSelect>("Тип");
    const [groupData, setGroupData] = React.useState(types);
    const [series, setSeries] = React.useState({
      'Максимальная длина тела': true,
      'Средняя длина тела': false,
      'Минимальная длина тела': false,
    });
    const [isBar, setIsBar] = React.useState(true);

    const handleChange = (event: SelectChangeEvent) => { 
        const value = event.target.value as tSelect;
        setGroup(value);
        
        if (value == "Тип")    { setGroupData(types); }
        if (value == "Отряд")    { setGroupData(orders); }
        if (value == "Семейство") { setGroupData(families); }
    } 
    
    return ( 
      <div> 
        <Navbar active="3"/>
        <Box sx={{ width:"200px", mt: "20px", ml: "700px"}}> 
          <FormControl fullWidth> 
            <InputLabel> Группировать по </InputLabel> 
            <Select 
              id="select-group" 
              value={ group } 
              label="Группировать по"
              onChange={ handleChange } 
            > 
              <MenuItem value="Тип"> Типу </MenuItem> 
              <MenuItem value="Отряд"> Отряду </MenuItem> 
              <MenuItem value="Семейство"> Семейству </MenuItem> 
            </Select> 
         </FormControl> 
        </Box>
        <GroupChart 
          data={groupData} 
          series={series} 
          isBar={isBar} 
        />
        <SettingChart 
          series={series} 
          setSeries={setSeries} 
          isBar={isBar} 
          setIsBar={setIsBar} 
        />
        <GroupGrid data={groupData} /> 
        <Footer/>
      </div> 
    ); 
} 
   
export default Chart; 