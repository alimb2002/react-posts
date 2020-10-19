import React, { useReducer,useEffect } from 'react';
import axios from 'axios';

const initialState = {
    loader : true,
    user : {},
    error : ''
}
const reducer = (state,action) => {
    switch(action.type){
        case 'FETCH_SUCCESS' :
            return {
                loader : false,
                user : action.payload,
                error : ''
            }
        case 'FETCH_ERROR':
            return {
                loader :false,
                user : {},
                error : 'something went wrong '
            }  
        default :
        return state;      
    }
}

function User() {
const [state,dispatch] = useReducer(reducer,initialState);
    useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/posts/1')
       .then(res => {
           dispatch({type : 'FETCH_SUCCESS' , payload : res.data })
       })
       .catch(error=>{
           dispatch({type:'FETCH_ERROR'})
       })
    }, [])

    return (
        <div>
            {state.loader ? 'loading' : state.user.title}
            {state.error ? 'error' : null}
        </div>
    )
}

export default User
