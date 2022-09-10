import React from 'react';
import './Home.css';
import { UserContext } from '../../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import UserAsk from './userQue/UserAsk';

const Home = () => {
    const [userData, setUserData] = React.useContext(UserContext);
    const navigate = useNavigate();
    React.useEffect(() => {
        if (!userData.user) navigate("/login");
    }, [userData.user, navigate]);

    const NavigatorPolicy = () => {
      navigate('/question');
    }

  return (
    <div className='container'>
    <div className='d-flex sup'>
    <button className='btn btn-primary px-2 beh' onClick={NavigatorPolicy}>Ask Question</button>
      {/* <button className="py-a"></button> */}
        <p className='fs-3'>Welcome: <strong>{ userData.user?.display_name }</strong></p><br /><br /><br />
   </div>
   <h1 className="fs-2 mt-5">Questions</h1>
  <div className="mt-2">
      <UserAsk />   
      </div>     
   </div>
  )
}

export default Home;