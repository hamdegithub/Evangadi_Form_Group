import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
    return (
        <div className='container-fluid ftr'>
            <footer className='container ftr_div py-5'>
                <div>
                    <div>
                        <img src='https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-footer.png' />
                    </div>
                    <FacebookIcon /><span className='px-3'> <InstagramIcon  /></span> <YouTubeIcon />


                </div>
                <div>
                    <h3 className='pb-4'>Useful Link</h3>
                    <div className='ftr_lnk'>
                        <p><a>How it works</a></p>
                        <p><a>Terms of Service</a></p>
                        <p><a>Privacy policy</a></p>
                    </div>
                </div>
                <div>
                    <h3>Contact Info</h3>
                    <div className='ftr_lnk'>
                        <p><a>Evangadi Networks</a></p>
                        <p><a>support@gmail.com</a></p>
                        <p><a>+1-202-386-2702</a></p>
                    </div>
                    
                </div>

            </footer>
        </div>
    )
}

export default Footer