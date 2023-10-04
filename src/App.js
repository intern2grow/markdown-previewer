import './App.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom';
const App = () => {

  const [compiled, setCompiled] = useState('<h2 id="hello">Hello</h2>');

  return (
    <>
      <h1 className="main-heading">MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <NavLink to="/" className={`btn ${({ isActive }) => 'active'}`}>
            MarkDown
          </NavLink>
          <NavLink
            to="/preview"
            className={`btn ${({ isActive }) => 'active'}`}
          >
            Preview
          </NavLink>
          <NavLink
            to="/document"
            className={`btn ${({ isActive }) => 'active'}`}
          >
            Docs
          </NavLink>
        </div>
        <Outlet context={[compiled, setCompiled]} />
      </div>
    </>
  );
};

export default App;
