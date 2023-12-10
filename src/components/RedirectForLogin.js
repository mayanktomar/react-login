import { AuthContext } from '../context/AuthContext';
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export {RedirectForLogin};
function RedirectForLogin({children}) {
    console.log(children);
  const authContext = useContext(AuthContext);

  const authToken = localStorage.getItem('accessToken');

  let isTokenActive = false;

  let decoded;

  if (authToken) {
    decoded = jwtDecode(authToken);
    console.log("Decoded jwt token....",decoded);
    let expiryTime = decoded.exp * 1000;
    let currentTime = Date.now();
    
    if (currentTime < expiryTime) {
      isTokenActive = true;
    }
  }

  console.log("Auth token inside privateRoute from local storage: ",authToken);

  // if (!userInfo.authToken) {
  //   return <Navigate to="/" />
  // } 
  if (authToken && isTokenActive) {
    authContext.setAccessToken(localStorage.getItem('accessToken'));
    authContext.setRefreshToken(localStorage.getItem('refreshToken'));
    authContext.setUserDetails(JSON.parse(localStorage.getItem('userDetails')));
    return <Navigate to="/home" />
  }

  return children;

}