import animals from "../table"; 
import { DataGrid, GridRowsProp, GridColDef  } from "@mui/x-data-grid";
import { ruRU } from '@mui/x-data-grid/locales';

import Container from '@mui/material/Container';
 
function AnimalsGrid() { 
 
    const rows: GridRowsProp = animals; 
 
    const columns: GridColDef[] = [ 
        { field: 'Наименование', headerName: 'Наименование', flex: 1}, 
        { field: 'Тип', flex: 0.5}, 
        { field: 'Отряд', flex: 0.5}, 
        { field: 'Семейство', flex: 0.5}, 
        { field: 'Популяция (тыс)' }, 
        { field: 'Средняя длина тела (см)'}, 
        { field: 'Ареал обитания'},
    ];  
       
    return ( 
 
    <Container maxWidth="lg" sx={{height: '850px', mt: '40px'}}> 
        <DataGrid  
          localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
          showToolbar={true} 
          rows={rows}  
          columns={columns}  
        /> 
    </Container>  
 
  ); 
} 
 
export default AnimalsGrid;