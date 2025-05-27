import { useState, useEffect } from 'react';
import TableHead from './TableHead.js';
import TableBody from './TableBody.js';
import Filter from './filter.js';
import Chart from './Chart.js';

//{ data, amountRows, showPagination = true }
const Table = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    
    const [dataTable, setDataTable] = useState(props.data);

    useEffect(() => {
        setCurrentPage(1);
    }, [dataTable]);

    const updateDataTable = (value) => setDataTable(value);

    const pageCount = props.showPagination 
        ? Math.ceil(dataTable.length / Number(props.amountRows)) 
        : 0;
    
    const pagesArray = props.showPagination
        ? Array.from({ length: pageCount }, (v, i) => i + 1)
        : [];

    const PageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <>
            <Chart data={ dataTable } />
            <h4>Фильтры</h4>
            <Filter filtering={ updateDataTable } data={ dataTable } fullData={ props.data }/>  
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