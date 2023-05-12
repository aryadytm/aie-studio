import * as React from 'react';
import {Outlet} from "react-router-dom"; // NOTE: Remember to use Outlet when you create layouts!
import NavBar from './components/NavBar';


const Layout = (props) => {
  const navbarPages = props.navbarPages
  
  return (
    <div>
      <NavBar navbarPages={navbarPages}/>
      <br/>
      <br/>
      <Outlet />
    </div>
  );
};
export default Layout;