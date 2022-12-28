import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchHistoryData, setPageIndex } from "../../rdx/actions/history";
import { FormInput, Pagination, Table } from "../../components";
import { tableSchema } from "./schema";
import './history.css';

export default function HistoryPage(){
    const [searchText, setSearch] = useState('');
    const dispatch = useDispatch();
    const historyState = useSelector(state => state.historyState);
    const {historyData, pageIndex, pageLimit, pageRecords} = historyState;
    useEffect(() => {
        dispatch(fetchHistoryData());
    },[])

    const onChangeHandler = (event) => setSearch(event.target.value);
    const onPageChanged = (index) => dispatch(setPageIndex(index));

    const filterBySearch = (data, key) => data.filter(val => val[key].includes(searchText)); 

    return <>
        <section className="history">
            <FormInput size="sm" placeholder="Search Text" name="searchText" value={searchText} onChange={onChangeHandler}/>
            <Table
             cols={tableSchema} 
             data={filterBySearch(historyData, 'title').slice((pageIndex - 1)*pageLimit, pageIndex*pageLimit)}
             preloading={historyData?.length == 0}/>
            <Pagination 
                onPageChanged={onPageChanged}
                currentPage={pageIndex}
                pageSize={pageLimit}
                totalCount={pageRecords}/> 
        </section>
    </>
}