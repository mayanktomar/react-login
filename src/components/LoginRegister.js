import React, { Component } from 'react';
import login from '../assets/login.svg';
import {Button} from 'reactstrap';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { jwtDecode } from "jwt-decode";

export class LoginRegister extends Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.state = {
            isLoginModalOpen: false,
            isRegisterModalOpen: false,
            emailForLogin: '',
            passwordForLogin: '',
            nameForRegister: '',
            emailForRegister: '',
            passwordForRegister: '',
            genderForRegister: '',
            ageForRegister: 0
        }
    }

    toggleLoginModal = () => {
        this.setState({
            isLoginModalOpen: !this.state.isLoginModalOpen
        })
    }

    toggleRegisterModal = () => {
        this.setState({
            isRegisterModalOpen: !this.state.isRegisterModalOpen
        })
    }

    onValueChange = (event) => {
        const value = event.target.value;
        const name = event.target.name; //emailForLogin / passwordForLogin
        this.setState({
            [name] : value
        })
    }

    onLoginSubmit = async () => {
        console.log(`email: ${this.state.emailForLogin} , password: ${this.state.passwordForLogin}`);
        let bodyForLoginApi = {
            email: this.state.emailForLogin,
            password: this.state.passwordForLogin
        }
        try {
            let apiResponse = await axios.post('http://localhost:5000/loginUser',bodyForLoginApi);
            console.log("api response...",apiResponse);
            let accessToken = apiResponse.data.data.accessToken;
            let refreshToken = apiResponse.data.data.refreshToken;

            let userDetails = jwtDecode(accessToken);
            console.log("user details...",userDetails);

            localStorage.setItem('accessToken',accessToken);
            localStorage.setItem('refreshToken',refreshToken);
            localStorage.setItem('userDetails',JSON.stringify(userDetails));

            this.context.setAccessToken(accessToken);
            this.context.setRefreshToken(refreshToken);
            this.context.setUserDetails(userDetails);
        } catch (err) {
            console.log("Error while calling login api...",err);
            alert(err);
        }
    }

    onRegisterSubmit = () => {
        console.log(JSON.stringify(this.state));
    }

  render() {
    return (
        <div className='container'>
        <div className='row'>
          <div className='col-6' style={{paddingTop:'10%'}}>
            <img src={login} alt="loginImage"/>
          </div>

          <div className='col-6' style={{padding:'10%'}}>
            <h4>A blog website</h4>
            <p>A place to explore through blogs.....</p>

            <Button style={{
              backgroundColor: "#6C63FF",
              width: '75%',
              color: 'white'
            }} onClick={this.toggleLoginModal}>
              Login
            </Button>

            <br/> <br/> <br/>
            <Button style={{
              backgroundColor: "#6C63FF",
              width: '75%',
              color: 'white'
            }} onClick={this.toggleRegisterModal}>
              Register
            </Button>
          </div>
        </div>

        
       <LoginModal isLoginModalOpen={this.state.isLoginModalOpen} toggleLoginModal={this.toggleLoginModal} onValueChange={this.onValueChange} onLoginSubmit={this.onLoginSubmit}/>   
       <RegisterModal isRegisterModalOpen={this.state.isRegisterModalOpen} toggleRegisterModal={this.toggleRegisterModal} onValueChange={this.onValueChange} onRegisterSubmit={this.onRegisterSubmit}/>
      </div>
    )
  }
}

export default LoginRegister