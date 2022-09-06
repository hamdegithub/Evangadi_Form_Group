import React from 'react'
import './Signin.css'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Signin () {
  return (
    <div className='container clcl  py-5 px-4'>
      <h5>Login to your account</h5>
      <p>Don't have an account?<a href='#'>Create a new account</a></p>
      <form>
        <input type="text" placeholder="Email address"></input><br /><br />
        <input type="text" placeholder="Password"></input><br /><br />
        {/* <p className='forget'>Forgot password?</p> */}
        <button className='signbtn'>Sign In</button><br />
        <p><a href='#'>Create a new account</a></p>

      </form>

    </div>
  )
}

export default Signin