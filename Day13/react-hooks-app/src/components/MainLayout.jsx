import React from 'react';
import "./MainLayout.css";
import {Link,Outlet} from 'react-router-dom';
const MainLayout = () => {
  return (
    <div>
      <nav>
        <ul>
            <li>
                <Link to="/counterapp">CounterApp</Link>
            </li>
            <li>
                <Link to="/imageapp">ImageApp</Link>
            </li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  );
};

export default MainLayout;
