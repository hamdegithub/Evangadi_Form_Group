import React from 'react';
import {Link} from 'react-router-dom'
import './SignUp.css';


function SignUp () {
  return (
    <div className='container sign  py-5 px-4'>
      <h5>Join the network</h5>
      <p>Already have an account?<Link to="/">Sign in</Link></p>
      <form>
        <input type="text" placeholder="Email address"></input><br />

        <div className='inpflx'>
          <input type="text" placeholder="Firts Name"></input>
          <input className='in2' type="text" placeholder="Last Name"></input><br />
        </div>

        <input className='inpu' type="text" placeholder="User Name"></input><br />
        <input type="text" placeholder="Password"></input><br />
       
        <button className=' mrgn'>Agree and join</button><br />
        <p className='pt-5'>I agree to the <a href='#'>privacy.policy</a> and  <a href='#'>terms of service</a> </p>
        <p><Link to='/'>Already have an account?</Link></p>

      </form>

    </div>


  )
}

export default SignUp;