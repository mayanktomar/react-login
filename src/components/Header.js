import React, { useContext } from 'react';
import { Navbar,NavbarBrand, Button } from 'reactstrap';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from "react-router-dom";

export default function Header() {
  let authContext = useContext(AuthContext);
  let logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userDetails');

    authContext.setAccessToken('');
    authContext.setRefreshToken('');
    authContext.setUserDetails({});

    <Navigate to="/" />
  }
  return (
    <>
      <Navbar
        className="my-0"
        dark
      >
        <NavbarBrand href="/">
          Test website
        </NavbarBrand>
        {authContext.accessToken ? <Button onClick={()=>{logout()}}>Logout</Button> : <></>}
        
      </Navbar>
    </>
  )
}
