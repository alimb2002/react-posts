import React,{createContext,useReducer} from 'react';
import Blog from './Blog';

const initialState = {
  firstCounter : 0
};
const reducer = (state,action) => {
  switch(action.type){
      case 'increment' :
          return {firstCounter : state.firstCounter + 1};
      case 'decrement' :
          return {firstCounter : state.firstCounter - 1};
      case 'reset' :
          return initialState;
      default :
      return state
  }
}

export const BlogsContext = createContext();

const BlogsProvider = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
    return (
      <BlogsContext.Provider value = {{count , dispatch}}>
         
          <Blog />
      </BlogsContext.Provider>
    )
}

export default BlogsProvider;