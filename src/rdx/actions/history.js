import {axiosGet} from "../../lib";
import { SET_HISTORY_DATA, SET_PAGE_INDEX, SET_PAGE_LIMIT } from "../types";
export const fetchHistoryData = () => {
    return async dispatch => {
        try{
            const data = await axiosGet('/history');
            dispatch({
                type: SET_HISTORY_DATA,
                payload: data
            })
        }
        catch(error){
            dispatch({
                type: SET_HISTORY_DATA,
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