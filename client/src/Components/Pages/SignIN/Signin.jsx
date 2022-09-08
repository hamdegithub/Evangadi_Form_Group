import React, { useContext, useEffect, useState } from 'react';
import './Signin.css';
import { Link, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { UserContext } from '../../Contexts/UserContext';
import axios from 'axios';

const Signin = () => {
    const [icon, setIcon] = React.useState(true)
    const [onShow, setOnShow] = React.useState('password');
    const [userData, setUserData] = useContext(UserContext);
    const [form, setForm] = useState({});
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    const [fname, setF] = useState('');
    const [lname, setL] = useState('');
    const [Usern, setUN] = useState('');
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


    const handleChange = () => {
        setForm({ ...form, email: email, password: pass, Username: Usern, Firstname: fname, Lastname: lname });
    }
    console.log(form);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            //sending user data to database to be logged in
            const signRes = await axios.post('http://localhost:5000/api/users/',
                {
                    userName: Usern,
                    firstName: fname,
                    lastName: lname,
                    email: email,
                    password: pass
                });
            console.log(signRes);
            //update global state with response from backend(user-info)
            setUserData({
                token: signRes.data.token,
                user: signRes.data.user
            });
            console.log(userData);

            //set localStorage with the token
            localStorage.setItem('auth-token', signRes.data.token);

            //navigate user to homepage
            navigate('/');
        } catch (err) {
            console.log('problem', err.response.data.msg);
            alert(err.response.data.msg);
        }
    }

    useEffect(() => {
        if (userData.user) navigate('/');
    }, [userData.user, navigate]);


    return (
        <body className='login d-flex'>

            <div className="left">
                <nav className='sup'>
                    <h5 className='aa text-center'>Join the Network</h5>
                    <form className='form'>
                        <p className='text-center'>Already have an account? <Link to='/signup' className='text-warning stt'>Sign IN</Link></p>
                        <input type="email" placeholder="Email address" className='overflow-visible form-control mb-2' value={email} onChange={e => { setemail(e.target.value); handleChange() }}></input>
                        <div className="d-flex">
                            <input type="text" placeholder="First Name" className='overflow-visible form-control mb-2 me-2' value={fname} onChange={e => { setF(e.target.value); handleChange() }} /><input type="text" placeholder="Last Name" className='overflow-visible form-control mb-2' value={lname} onChange={e => { setL(e.target.value); handleChange() }} />
                        </div>
                        <input type="text" placeholder="Username" className='overflow-visible form-control mb-2 me-2' value={Usern} onChange={e => { setUN(e.target.value); handleChange() }} />
                        <div className='d-flex mt-4'>
                            <input type={onShow} placeholder="Password" className='overflow-visible form-control pass' value={pass} onChange={e => { setpass(e.target.value); handleChange() }}></input>{icon ? <VisibilityIcon onClick={show} /> : <VisibilityOffIcon onClick={show} />}<br />
                        </div>
                        <button className='btn btn-primary mt-4 lecy' type='submit' onClick={handleSubmit}>SignIN</button><br />
                        <p className='text-center'>I agree to the <Link to='/signup' className='text-warning stt'>Privacy Policy</Link> and <Link to='/signup' className='text-warning stt'>terms of service</Link></p> 
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

export default Signin;