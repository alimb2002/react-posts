import React, { useContext } from 'react'
import {BlogsContext} from './Blogs';

const Blog = () => {
    const countContext = useContext(BlogsContext);
    return (
        <div>
           {countContext.count.firstCounter}
            <button onClick={ () => countContext.dispatch({ type: 'increment'}) }>Increment</button>
            <button onClick={ () => countContext.dispatch({type : 'decrement'}) }>Decrement</button>
            <button onClick={ () => countContext.dispatch({type :'reset'}) }>Reset</button>
        </div>
    )
}

export default Blog