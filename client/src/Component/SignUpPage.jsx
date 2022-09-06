import React from 'react'

import About from './About'
import Signin from './Signin'
import './Landingpage.css'
import SignUp from './SignUp'

function SignUpPage () {
  return (
    <div className='container-fluid bg'>
      <div className='container dfj '>
        <SignUp />
        <About />
      </div>
    </div>
  )
}

export default SignUpPage;
