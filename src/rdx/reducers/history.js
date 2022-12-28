import { SET_HISTORY_DATA, 
         SET_PAGE_INDEX, 
         SET_PAGE_RECORDS, 
         SET_PAGE_LIMIT } from "../types";

const initHistoryState = {
    historyData: [],
    pageIndex: 1,
    pageLimit: 5,
    pageRecords: 0
}

const historyReducer = (state = initHistoryState, action) => {
    const copyState = {...state};
    switch(action.type){
        case SET_HISTORY_DATA: return {...copyState, historyData: action.payload, pageRecords: action.payload.length};
        case SET_PAGE_INDEX: return {...copyState, pageIndex: action.payload};
        case SET_PAGE_LIMIT: return {...copyState, pageLimit: action.payload};
        case SET_PAGE_RECORDS: return {...copyState, pageRecords: action.payload};
        default:
            return copyState;
    }
}

export default historyReducer;