import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={`/contacts`}>Contacts</Link>
          </li>
          <li>
            <Link to={`/todos`}>Todos</Link>
          </li>
          <li>
            <Link to={`/`}>Main page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
