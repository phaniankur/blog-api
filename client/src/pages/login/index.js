import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useHistory } from "react-router-dom";

import { userLoginAction } from '../../Redux/actions/userActions';
import './login.css'

const Login = () => {
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const history = useHistory();

    const [loginDetails, setLoginDetails] = useState({
        username: '',
        password: ''
    })
    useEffect(() => {
      if(userLogin && userLogin.userInfo && userLogin.userInfo.token){
          history.push('/')
      }
    }, [userLogin])


    const handleLogin = (e)=>{
        e.preventDefault();

        const loginData = {
            username: loginDetails.username,
            password: loginDetails.password
        }
        dispatch(userLoginAction(loginData))
    }

  return (
    <div className='login--container'>
        <div className='username'>
            <label>username</label>
            <input
            value={loginDetails.username}
            onChange={(e)=> setLoginDetails({...loginDetails, username: e.target.value})}
            placeholder='username'
            />
        </div>
        <div className='password'>
            <label>password</label>
            <input
            value={loginDetails.password}
            onChange={(e)=> setLoginDetails({...loginDetails, password: e.target.value})}
            placeholder='password'
            />
        </div>
        <div>

        <button onClick={handleLogin}>Please Login</button>
        </div>
    </div>
  )
}

export default Login