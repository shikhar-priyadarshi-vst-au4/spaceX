import { SET_PAYLOAD_DATA, 
    SET_PAGE_INDEX, 
    SET_PAGE_RECORDS, 
    SET_PAGE_LIMIT } from "../types";

const initPayloadState = {
payloadData: [],
pageIndex: 1,
pageLimit: 10,
pageRecords: 0
}

const payloadReducer = (state = initPayloadState, action) => {
const copyState = {...state};
switch(action.type){
   case SET_PAYLOAD_DATA: return {...copyState, payloadData: action.payload, pageRecords: action.payload.length};
   case SET_PAGE_INDEX: return {...copyState, pageIndex: action.payload};
   case SET_PAGE_LIMIT: return {...copyState, pageLimit: action.payload};
   case SET_PAGE_RECORDS: return {...copyState, pageRecords: action.payload};
   default:
       return copyState;
}
}

export default payloadReducer;