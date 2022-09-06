import React from 'react'
import About from './About'
import Signin from './Signin'
import './Landingpage.css'

function Landingpage() {
  return (
    <div className='container-fluid'>
        <div className='container dfj '>
            <Signin />
            <About />
        </div>
    </div>
  )
}

export default Landingpage