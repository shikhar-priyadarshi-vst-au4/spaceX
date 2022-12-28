import {axiosGet} from "../../lib";
import { SET_PAYLOAD_DATA, SET_PAGE_INDEX, SET_PAGE_LIMIT } from "../types";

export const fetchPayloadsData = () => {
    return async dispatch => {
        try{
            const data = await axiosGet('/payloads');
            dispatch({
                type: SET_PAYLOAD_DATA,
                payload: data
            })
        }
        catch(error){
            dispatch({
                type: SET_PAYLOAD_DATA,
                payload: []
            })
        }
    }
}

export const setPageIndex = (index) => {
    return dispatch => {
        dispatch({
            type: SET_PAGE_INDEX,
            payload: index
        })
    }
}

export const setPageLimit = (pageSize) => {
    return dispatch => {
        dispatch({
            type: SET_PAGE_LIMIT,
            payload: pageSize
        })
    }
}