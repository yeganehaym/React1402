import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css";
import {useEffect, useState} from "react"; // Theme
import  * as orderService from '../../Services/OrderService'


import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';

export  const OrderList=()=>{

    const [rows,setRows]=useState([]);
    const [columns,setColumns]=useState([
        {field:'name'},
        {field:'mobileNo'},
        {field:'address'},
        {field:'quantity'},
        {field:'price'},
    ])
    
    const [datagridCols,setDataGridCols]=useState([
        {key:'name',name:'Full Name'},
        {key:'mobileNo',name:'Mobile No'},
        {key:'address',name:'Address'},
        {key:'quantity',name:'Count'},
        {key:'price',name:'Total Price'}
    ])

    useEffect(()=>{

        const fetch=async()=>{
            try {
                const result=await orderService.getOrders();
                setRows(result)
            }
            catch (e)
            {
                console.log(e)
            }
        }

        fetch()
    },[])
    return(
        <>
            <div className="ag-theme-quartz" style={{ height: 500 }}>
                <AgGridReact rowData={rows} columnDefs={columns} />
            </div>
            <div>
                <DataGrid columns={datagridCols} rows={rows} />
            </div>
        </>
    );
}