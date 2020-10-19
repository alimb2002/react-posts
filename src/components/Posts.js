import React,{useEffect, useState} from 'react';
import axios from 'axios';
import PostsList from './PostsList';
import {Container} from 'react-bootstrap';
import ListPagination from './ListPagination';

export const postContext = React.createContext()

const Posts = () => {
    const [posts,setPosts] = useState([]);
    // Pagination
    const perPage = 5;
    const [currentPage,setCurrentPage] = useState(1);
    const [firstOnPage,setFirstOnPage] = useState(0);
    const [lastOnPage,setLastOnPage] = useState(perPage);
    const totalPosts = posts.length;
    const allPages = Math.ceil(totalPosts/perPage);
    useEffect( ()=>{
        setFirstOnPage((currentPage*perPage)-perPage);
        setLastOnPage(firstOnPage+perPage);
    },[currentPage, firstOnPage])

    const backForwardHandle = (e)=>{
        e.preventDefault();
        setCurrentPage(currentPage + Number(e.target.getAttribute('data-value')));
    }
    const changePage = (e) =>{
        e.preventDefault();
         setCurrentPage(Number(e.target.innerText));
    }
    ////

    useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then( res => {
           setPosts(res.data);
       })
       .catch(err=>console.log(err));
    }, []);
  

    return (
        posts.length ? 
        <Container>
            {posts.slice(firstOnPage,lastOnPage).map((post,index)=> {
                return(
                <PostsList key={index} title={post.title} body={post.body} id={post.id} />
                )
            })}
            <ListPagination currentPage={currentPage} 
            backForwardHandle={backForwardHandle} changePage={changePage} allPages={allPages} />
        </Container>
        :
        <Container className="loader"></Container>
    )
}
export default Posts
