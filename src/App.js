import React from 'react';
import Header from './components/Header';
import Posts from './components/Posts';
import Post from './components/Post';
import Blogs from './components/Blogs';
import Counter from './components/Counter';
import User from './components/User'
import {BrowserRouter,Route} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
       <div>
        <Header />  
        <Route exact path="/" component= {Posts} />
        <Route  path="/Posts" component= {Posts} />
        <Route path="/Post" component= {Post} />
        <Route path="/Blogs" component= {Blogs} />
        <Route path="/Counter" component={Counter} /> 
        <Route path="/User" component = {User} />
      </div>
    </BrowserRouter>
   
  )
}

export default App
