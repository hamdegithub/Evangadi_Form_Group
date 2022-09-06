import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='Header container-fluid pt-2'>
        <div className='Header-container  my-2 container'>
            <div className='Header_logo'>
                <img src='https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png'/>
            </div>
            <div className='Header_text'>
                <span className='spann'>Home</span>
                <span className='spann'>How it works</span>
                
                <button className='btn'>SIGN IN</button>
            </div>
       </div>
    </div>
  
  )
}

export default Header