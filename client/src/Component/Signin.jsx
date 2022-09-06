import React from 'react'
import {Link} from 'react-router-dom'
import './Signin.css'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Signin () {
  return (
    <div className='container clcl  py-5 px-4'>
      <h5>Login to your account</h5>
      <p>Don't have an account?<Link to='/signup'>Create a new account</Link></p>
      <form>
        <input type="text" placeholder="Email address"></input><br /><br />
        <input type="text" placeholder="Password"></input><br /><br />
        {/* <p className='forget'>Forgot password?</p> */}
        <button className='signbtn'>Sign In</button><br />
        <p><Link to='/signup'>Create a new account</Link></p>

      </form>

    </div>
  )
}

export default Signin