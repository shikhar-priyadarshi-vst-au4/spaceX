import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPayloadsData, setPageIndex } from "../../rdx/actions/payload";
import { FormInput, Pagination, Table } from "../../components";
import { tableSchema } from './schema';

import './payload.css'

export default function PayloadPage(){
    const [searchText, setSearch] = useState('');
    const dispatch = useDispatch();
    const payloadState = useSelector(state => state.payloadState);
    const {payloadData, pageIndex, pageLimit, pageRecords} = payloadState;
    useEffect(() => {
        dispatch(fetchPayloadsData());
    },[])
    const onChangeHandler = (event) => setSearch(event.target.value);
    const onPageChanged = (index) => dispatch(setPageIndex(index));

    const filterBySearch = (data, key) => data.filter(val => val[key]?.includes(searchText)); 

    console.log('payloadData:', payloadData)
    return <>
        <section className="payload">
            <FormInput size="sm" placeholder="Search Text" name="searchText" value={searchText} onChange={onChangeHandler}/>
            <Table
             cols={tableSchema} 
             data={filterBySearch(payloadData, 'payload_id').slice((pageIndex - 1)*pageLimit, pageIndex*pageLimit)}
             preloading={payloadData?.length == 0}/>
            <Pagination 
                onPageChanged={onPageChanged}
                currentPage={pageIndex}
                pageSize={pageLimit}
                totalCount={pageRecords}/> 
        </section>
    </>
}