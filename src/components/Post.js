import React,{useEffect,useState,useContext} from 'react'
import axios from 'axios'
import {Card,Container} from 'react-bootstrap';
import {postContext} from './Posts';

const Post = () => {
    const context = useContext(postContext);
    console.log(context);
    const [id , setId] = useState(1);
    const [post,setPost] = useState([]);
    const [submitId,setSubmitId] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitId(id);
    }

    const handleChange =(e) => {
        setId( e.target.value );
    }

    useEffect( () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${submitId}`)
        .then( res => {
            setPost(res.data);
        })
        .catch(err => {
            console.log(err);
        })
        
     }, [submitId]);
     
     const Post = post  ? <Card className="mt-2">
                        <Card.Header >Id : {post.id}</Card.Header>
                        <Card.Body>
                        <Card.Title style={{textTransform:'capitalize',color:'#16a085'}}>{post.title}</Card.Title>
                        <Card.Text style={{textTransform:'capitalize'}}>{post.lengthbody}</Card.Text>
                        </Card.Body>
                    </Card> : <Container className="loader"></Container>
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label >Post ID</label>
                    <input onChange={handleChange} type="text" className="form-control" placeholder="Input and ID"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {Post}
        </Container>
        
    )
}

export default Post
