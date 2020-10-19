import React,{useState} from 'react';
import {Card, Button} from 'react-bootstrap';
import SinglePost from './SinglePost';

const PostsList =({title,body,id})=> {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Card className="m-2">
            <Card.Header >Id : {id}</Card.Header>
            <Card.Body>
            <Card.Title style={{textTransform:'capitalize',color:'#16a085'}}>{title}</Card.Title>
            <Card.Text style={{textTransform:'capitalize'}}>{body}</Card.Text>
            </Card.Body>
            <Button variant="dark" className="col-3 m-1" onClick={handleShow}>See More</Button>
            <SinglePost show={show} handleClose={handleClose} handleShow={handleShow} title={title} body={body} />
        </Card>
    )
}

export default PostsList;