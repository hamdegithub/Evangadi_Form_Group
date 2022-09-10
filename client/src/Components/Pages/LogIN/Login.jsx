import React, { useContext, useEffect, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { UserContext } from '../../Contexts/UserContext';
import axios from 'axios';

const Login = () => {
    const [icon, setIcon] = React.useState(true);
    const [onShow, setOnShow] = React.useState('password');
    const [userData, setUserData] = useContext(UserContext);
    const [form, setForm] = useState({});
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    const navigate = useNavigate();


    const show = () => {
        if (onShow === 'password') {
            setOnShow('text');
            setIcon(false);
        } else {
            setIcon(true);
            setOnShow('password');
        }

    }


    const handleChange = (e) => {
        setForm({ ...form, email: email, password: pass });
    }
    // console.log(form);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            //sending user data to database to be logged in
            const loginRes = await axios.post('http://localhost:5000/api/users/login',
                {
                    email: email,
                    password: pass
                });
            // console.log(loginRes);
            //update global state with response from backend(user-info)
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user
            });
            // console.log(userData);

            //set localStorage with the token
            localStorage.setItem('x-auth-token', loginRes.data.token);

            //navigate user to homepage
            navigate('/');
        } catch (err) {
            // console.log('problem', err.response.data.msg);
            alert(err.response.data.msg);
        }
    }

    useEffect(() => {
        if (userData.user) navigate('/');
    }, [userData.user, navigate]);


    return (
        <body className='login d-flex'>

            <div className="left">
                <nav className='sup pt-5'>
                    <h5 className='aa text-center'>Login to your account</h5>
                    <form className='form'>
                        <p className='text-start'>Don't have an account? <Link to='/signup' className='text-warning stt'>Create a new Account</Link></p>
                        <input type="email" placeholder="Email address" className='overflow-visible form-control mb-2' value={email} onChange={e => { setemail(e.target.value); handleChange() }}></input>
                        <div className='d-flex mt-4'>
                            <input type={onShow} placeholder="Password" className='overflow-visible form-control pass' value={pass} onChange={e => { setpass(e.target.value); handleChange() }}></input>{icon ? <VisibilityIcon onClick={show} /> : <VisibilityOffIcon onClick={show} />}<br />
                        </div>
                        {/* <Link to='/signup' className='text-warning st'>Forgot password?</Link><br /><br /> */}
                        <button className='btn btn-primary hbtn mt-5' type='submit' onClick={handleSubmit}>LOGIN</button><br />

                    </form>
                </nav>
            </div>
            <div className="right mx-5">
                <div className='py-5 px-4 about'>
                    <h5>About</h5>
                    <h1>Evangadi Networks</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur corporis quod dolorum ratione officia rem quae velit commodi. Impedit fugit nobis temporibus eos libero sed tempora ipsum, beatae hic veritatis!</p><br />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur corporis quod dolorum ratione officia rem quae velit commodi. Impedit fugit nobis temporibus eos libero sed tempora ipsum, beatae hic veritatis!</p><br />
                    <button className='hbtn py-2 px-2 btn'>HOW IT WORKS</button>
                </div>
            </div>
        </body>
    )
}

export default Login;