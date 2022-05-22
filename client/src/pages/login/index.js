import React, {useState} from 'react'
import './login.css'

const Login = () => {

    const [loginDetails, setLoginDetails] = useState({
        username: '',
        password: ''
    })

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

        <button>Please Login</button>
        </div>
    </div>
  )
}

export default Login