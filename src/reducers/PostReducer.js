import { actions } from '../actions'
const initialState = {
    posts: [],
    loading: false,
    error: null
}
const postReducer = (state, action) =>{
    switch(action.type){
        case actions.post.DATA_FETCHING: {
            return {
                ...state,
                loading: true
            }
        }
        case actions.post.DATA_FETCHED: {
            return {
                ...state,
                loading: false,
                posts: action.payload
            }
        }
        case actions.post.DATA_FETCH_ERROR: {
            return{
                ...state,
                loading: false,
                posts: [],
                error: action.payload
            }
        }
        default:
            return state;
    }
}

export { initialState, postReducer }


