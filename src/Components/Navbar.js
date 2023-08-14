import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = ({children}) => {
    const location = useLocation();
    const [showNavbar, setShowNavbar] = useState();
    useEffect(() =>  {
        console.log("this is location : ", location);
        if(location.pathname === '/login'){
            setShowNavbar(false)
        }else{
            setShowNavbar(true)
        }
    }, [location])
  return (
    <div>{ showNavbar && children}</div>
  )
}

export default Navbar