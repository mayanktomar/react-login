import logo from './logo.svg';
import './App.css';
import LoginRegister from './components/LoginRegister';
import { AuthContext } from './context/AuthContext';
import { useState } from 'react';
import { RedirectForLogin } from './components/RedirectForLogin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {HomeComponent} from './components/HomeComponent';
import { PrivateRoute } from './components/PrivateRoute';
import Header from './components/Header';

function App() {

  const [accessToken,setAccessToken] = useState('');
  const [refreshToken,setRefreshToken] = useState('');
  const [userDetails, setUserDetails] = useState({});

  let valueForAuthContext = {
    accessToken, setAccessToken, refreshToken, setRefreshToken, userDetails, setUserDetails
  }
  return (
    <div className="App">
      <AuthContext.Provider value={valueForAuthContext}>
        <Header/>
        <Router>
              <Routes>
                <Route exact path='/' element={
                  <RedirectForLogin>
                    <LoginRegister/>
                  </RedirectForLogin>
                }/>
                <Route exact path='/home' element={
                  <PrivateRoute>
                    <HomeComponent/>
                  </PrivateRoute>
                }/>
              </Routes>
          </Router>
      </AuthContext.Provider>
      
    </div>
  );
}

export default App;
