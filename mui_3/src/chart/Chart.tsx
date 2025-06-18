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

import { years, countries, types } from "./groupdata";

type tSelect = "Страна" | "Год" | "Тип";

function Chart() {
    const [group, setGroup] = React.useState<tSelect>("Страна");
    const [groupData, setGroupData] = React.useState(countries);
    const [series, setSeries] = React.useState({
      'Максимальная высота': true,
      'Средняя высота': false,
      'Минимальная высота': false,
    });
    const [isBar, setIsBar] = React.useState(true);

    const handleChange = (event: SelectChangeEvent) => { 
        const value = event.target.value as tSelect;
        setGroup(value);
        
        if (value == "Год")    { setGroupData(years); }
        if (value == "Тип")    { setGroupData(types); }
        if (value == "Страна") { setGroupData(countries); }
    } 
    
    return ( 
      <div> 
        <Navbar active="3"/>
        <Box sx={{ width:"200px", mt: "120px", ml: "700px"}}> 
          <FormControl fullWidth> 
            <InputLabel> Группировать по </InputLabel> 
            <Select 
              id="select-group" 
              value={ group } 
              label="Группировать по"
              onChange={ handleChange } 
            > 
              <MenuItem value="Страна"> Стране </MenuItem> 
              <MenuItem value="Год"> Году </MenuItem> 
              <MenuItem value="Тип"> Типу </MenuItem> 
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