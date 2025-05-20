import { useState } from 'react';
import TableHead from './TableHead.js';
import TableBody from './TableBody.js';
import Filter from './filter.js';
import Sort from './Sort.js';


const Table = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    
    const [filteredData, setFilteredData] = useState(props.data);
    const [dataTable, setDataTable] = useState(props.data);
    const [sortFields, setSortFields] = useState([
        { key: '', desc: false },
        { key: '', desc: false },
        { key: '', desc: false }
    ]);

    const updateFilteredData = (filtered) => {
      setFilteredData(filtered);
      setDataTable(filtered);
      setCurrentPage(1);
      setSortFields([
            { key: '', desc: false },
            { key: '', desc: false },
            { key: '', desc: false }
        ]);
    }

    const pageCount = props.showPagination 
        ? Math.ceil(dataTable.length / Number(props.amountRows)) 
        : 0;
    
    const pagesArray = props.showPagination
        ? Array.from({ length: pageCount }, (v, i) => i + 1)
        : [];

    const PageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    
    const updateDataTable = (newData) => {
        setDataTable(newData);
        setCurrentPage(1);
    };

    return (
        <>
            <div>
                <h4>Фильтры</h4>
                <Filter filtering={ updateFilteredData } data={ dataTable } fullData={ props.data }/>
            </div>   
            <div>
                <h4>Сортировка</h4>
                <Sort fullData={filteredData} data={ props.data } sorting={updateDataTable} sortFields={sortFields}  setSortFields={ setSortFields }/>
            </div>
            <table>
                <TableHead head={Object.keys(props.data[0])} />
                <TableBody
                    body={dataTable}
                    amountRows={props.showPagination ? props.amountRows : props.data.length}
                    numPage={props.showPagination ? currentPage : 1}
                />
            </table>

            {props.showPagination && pagesArray.length > 1 && (
                <div className="pagination">
                    {pagesArray.map((page) => (
                        <span
                            key={page}
                            onClick={() => PageChange(page)}
                            className={page === currentPage 
                                ? 'current-page' 
                                : 'page-item'
                            }
                        >
                            {page}
                        </span>
                    ))}
                </div>
            )}
        </>
    );
};

export default Table;