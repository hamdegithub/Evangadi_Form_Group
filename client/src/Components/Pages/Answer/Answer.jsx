import React from 'react';
import './Answer.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import UserAsk from '../Home/userQue/UserAsk';

const Answer = () => {
    const [userData, setUserData] = React.useContext(UserContext);
    const navigate = useNavigate();
    React.useEffect(() => {
        if (!userData.user) navigate("/login");
    }, [userData.user, navigate]);

    return (
        <div className='container s '>
            <div className="upper_q border-bottom mb-3">
                <h1 className="fs-2 mt-5">Questions</h1>
                <c className="fs-5 fw-bold">What is git?</c><br />
                <c className="fs-6 mb-5">How does it work</c>
            </div>
            <div className="Middle_q">
                <h1 className="fs-3 mb-3">Answer From The Community</h1>
                <div>
                    <UserAsk />
                </div>
            </div>

            <div className='ssup'>
                <form className="shadow rounded-4 ps-5 bosbaby">
                    <h4 className="text-center fw-bold pt-5">Answer The Top Question</h4>
                    <Link to="/question" className="text-decoration-none text-black fs-6"><p className='pt-4 pb-3 text-center'>Go to Question page</p></Link>
                    <textarea name="Inset" cols="132" rows="7" className='rounded-3 sest pt-2' placeholder='Your Answer...' />
                    <button className='btn btn-primary mt-3 mb-5'>Post Your Answer</button>
                </form>
            </div>
        </div>
    )
}

export default Answer