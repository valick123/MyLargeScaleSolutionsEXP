const initialState = {
    data:[],
    currentData:[]
}

export const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_DATA":{
            return{
                ...state,
                data:[...state.data, ...action.payload.data],
                currentData:[...state.currentData, ...action.payload.data]
            }
        }
        case "SEARCH_WITH_DATA":{
            return{
                ...state,
                currentData:[...action.payload]
            }
        }
        case "RESET":{
            return{
                ...state,
                currentData:state.data
            }
        }
        default:{
            return state
        }
    }
}