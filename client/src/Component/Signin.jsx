import React from 'react'
import './Signin.css'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Signin() {
  return (
    <div className='container clcl  py-5 px-4'>
        <h4>Login to your account</h4>
        <p>Don't have an account?<a href='#'>Create a new account</a></p>
        <form>
            <input type="text" placeholder="Email address"></input><br/><br/>
            <input type="text" placeholder="Password"></input><br/><br/>
            <p className='forget'>Forgot password?</p>
            <button className='signbtn'>Log In</button><br/>
            
        </form>

    </div>
  )
}

export default Signin