import { useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import './table.css';

const getTableHeaders = (headers, isExpandable) => {
    return <tr>
        {isExpandable && <th/>}
        {headers?.map((header, index) => <th key={`th-${index}`}>
            <span>{header?.columnLabel}</span>
        </th>)}
    </tr>
}

const TableBodyRow = ({row, cols, isExpandable, expandCols}) => {
    const [isExpand, setIsExpand] = useState(false);
    return <>
    <tr>
        {isExpandable && <td>
            <a onClick={() => setIsExpand(!isExpand)}>
                <FontAwesomeIcon icon={faChevronDown}/>
            </a>
        </td>}
        {cols?.map((col, key) => (
            <>
                <td key={key}>{col.render(row)}</td>
            </>))}
    </tr>
    {isExpandable && isExpand &&  
        <tr data-action="expandable-row">
            <td colSpan={cols?.length+1}>
                <div className="card table-responsive">
                    <Table {...{
                        cols : expandCols,
                        data : [row],
                        isExpandable : false
                    }}/>    
                </div>    
            </td>
        </tr>}
    </>
}

export default function Table(tableProps){

    const {
        cols, 
        data, 
        isExpandable = false, 
        expandCols, 
        preloading, 
        ...props} = tableProps;

    return <div className={`data-table scroll`}>
    <table {...props}>
        <thead>
            {getTableHeaders(cols, isExpandable)}
        </thead>
        <tbody>
            {preloading ?
             <tr>
                <td colSpan={cols?.length}>
                    <div style={{height : "80px", display : "flex", justifyContent : "center",alignItems : "center"}}>
                        {/* <div className="progress" style={{height : "6px", flexGrow : 1}}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: `${preloading?.width}%`}}></div>
                        </div> */}
                        <div className="text-center my-4">
                            <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    </div>
                </td>
             </tr> : 
             data?.length > 0 ? data?.map((row, index) =>
                <TableBodyRow key={index} {...{row, cols, isExpandable, expandCols}}/>) :
                <tr>
                <td colSpan={cols?.length}>
                    <div style={{height : "80px", display : "flex", justifyContent : "center",alignItems : "center"}}>
                        <div className="text-center my-4">
                            No Records Found
                        </div>
                    </div>
                </td>
             </tr>} 
        </tbody>
    </table>
</div>
}