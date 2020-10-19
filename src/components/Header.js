import React from 'react';

const Header = () => {
  
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/#">Navbar</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/Posts">posts<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Post">Post</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Blogs">Blogs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Counter">Counter</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/User">User</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Header;