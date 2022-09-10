import React from 'react';
import './UserAsk.css';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { UserContext } from '../../../Contexts/UserContext';

// Import Image
import Avatar from '../../../Resources/Avatar.jpg';

const UserAsk = () => {
    const [userData, setUserData] = React.useContext(UserContext);

    return (
        <Link to="/answer" className='text-black text-decoration-none'>
            <div className='d-flex'>
            <div className="d-flex borde w">
            <img src={Avatar} alt="Question Man" className='suplex' />
            <h2 className='ques text-light-50 fs-5'>Git Gen Menden nw</h2>
            </div>
            <div className='h'>
            <ArrowForwardIosIcon className="ques ss" />
            </div>
            </div>
            <strong className='ms-4 mt-0'>{ userData.user?.display_name }</strong>
        </Link>
  )
}

export default UserAsk;