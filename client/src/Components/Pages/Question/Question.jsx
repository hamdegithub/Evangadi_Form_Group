import React from 'react';
import { UserContext } from '../../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import './Question.css';

const Question = () => {
  const [userData, setUserData] = React.useContext(UserContext);
  const navigate = useNavigate();
  React.useEffect(() => {
      if (!userData.user) navigate("/login");
  }, [userData.user, navigate]);

  return (
    <div className='mt-g'>
      <h3 className="fs-2 text-center">Steps to ask a good Question</h3>
      <ul className='middle'>
        <li>Summerize your Question in one-line Title.</li>
        <li>Describe your problem in more-detail.</li>
        <li>Describe what you tried and what you expected to happen.</li>
        <li>Review your question and post it to the site</li>
      </ul>
     
      <form className='container shadow py-5 px-5 rounded-4 abeb'>
        <h3 className='text-center fw-bold'>Ask a public question</h3>
      <p className='text-center fs-5'>Go to Question Page</p>
      <input type="text" className='rounded-3 sesi' placeholder='Title' /><br /><br />
      <textarea name="Inset" cols="140" rows="7" className='rounded-3 sest pt-2' placeholder='Question Description..' />
      <button className="btn btn-primary mt-3">Post your Question</button>
      </form>
    </div>
  )
}

export default Question;