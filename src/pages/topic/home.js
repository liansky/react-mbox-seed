import React from "react";
import { Link, NavLink } from "react-router-dom";
export default () => (
    <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <NavLink to="/about" activeStyle={{
            fontWeight: 'bold',
            color: 'red'
          }} activeClassName="test">About</NavLink>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
    </ul>

)

  