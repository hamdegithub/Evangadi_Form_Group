import React, { useContext, useEffect } from 'react';
import './Home.css';
import { UserContext } from '../../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [userData, setUserData] = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!userData.user) navigate("/login");
    }, [userData.user, navigate]);

  return (
    <div className='container d-flex sup'>
      <button className='btn btn-primary beh py-0 px-3'>Ask a Question</button>
        <p className='fs-3'>Welcome: <strong>{ userData.user?.display_name }</strong></p><br /><br /><br />
  <hr></hr>
        
    </div>
  )
}

export default Home;