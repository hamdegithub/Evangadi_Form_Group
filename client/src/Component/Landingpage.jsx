import React from 'react'

import About from './About'
import Signin from './Signin'
import './Landingpage.css'
import SignUp from './SignUp'

function Landingpage() {
  return (
    <div className='container-fluid bg'>
        <div className='container dfj '>
            <Signin />
            <About />
        </div>
    </div>
  )
}

export default Landingpage