import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const NetflixRegister = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const navigate = useNavigate();


    // Function to validate email address on input text change and enable the submit button if it's true
    const validateEmail = () => {
        const re = /\S+@\S+\.\S+/;
        const result = re.test(email);
        setIsEmailValid(result);
    };
    const validatePassword = () => {
        // Password must have at least one uppercase letter, one lowercase letter, and be at least four characters long
        const re = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        const result = re.test(password);
        setIsPasswordValid(result);
    };



    const raw = JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email, // Assuming 'email' is the value from the state
        password: password, // Assuming 'password' is the value from the state
    });
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Cookie", "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzIzZmFiZTI1NmJkNzU3ZGI2NmQ0MSIsImZpcnN0TmFtZSI6IkFtaXIiLCJsYXN0TmFtZSI6ImtoYW4iLCJyb2xlIjoidXNlciIsInByb2ZpbGVQaWN0dXJlIjoiaGVsbG8iLCJpYXQiOjE2OTA4MDQyNzEsImV4cCI6MTY5MDgwNTE3MX0.JfugBOR4Hb1nNxsAWDweqhdhoNPR5odWoQy9ylmW618");


    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        // redirect: 'follow',
    };

    const handleSignUp = () => {
        fetch('http://localhost:5000/api/auth/signup', requestOptions)
            .then((response) => {
                console.log(response.status === 200);
                if (response.status === 200){
                    let responseObj = response.json();
                    localStorage.setItem('token', responseObj.token);
                    // Login successful, show success message
                    toast.success('Register successful', {
                        onClose: () => {
                            // Navigate to another component (e.g., MainComponent) using navigate function
                            navigate('/');
                        },
                    });
                }else {
  
                    toast.error('Error occurred during Register');
                }
            })
            .catch((error) => {
                console.log('error', error);
                // Show an error message
                toast.error('Error occurred during Register');
            });
    };

    return (
        <main id={"register"} style={{ padding: '0px 10px' }}>
            <header className="d-flex space-between middle-align">
                <a href="/">
                    <img src="./images/logo.PNG" height="50px" width="170px" alt="site logo main" />
                </a>
                <button className="button">
                    <NavLink to="/login">Sign In</NavLink>
                </button>
            </header>
            <section id="register-form-section">
                <div className="registerContainer d-flex direction-column">
                    <h2 className="formtitle">Register Account</h2>
                    <div
                        id="registerForm"
                        className="d-flex direction-column"
                        method="post"
                        name="loginForm"
                    >
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            className="name"
                            placeholder="first name"
                            value={firstName}
                            onChange={(e)=> setFirstName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            className="name"
                            placeholder="last name"
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                            required
                        />
                        <input
                            type="text"
                            name="email"
                            id="email"
                            className="name"
                            placeholder="Email or phone number"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                validateEmail();
                            }}
                            required
                        />
                        <p
                            id="errorEmail"
                            style={{ display: isEmailValid ? 'none' : 'block' }}
                        >
                            Please enter a valid email address or phone number.
                        </p>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={
                                (e) => {
                                    setPassword(e.target.value);
                                    validatePassword();
                                }}
                            required
                        />
                        <p id="errorPassword"
                           style={{ display: isPasswordValid ? 'none' : 'block' }}>
                            Your password must contain between 8 and 60 characters and should have at least one capital and one small char.
                        </p>


                        <button
                            type="submit"
                            className="button submitButton"
                            disabled={!isEmailValid || !isPasswordValid}
                            onClick={handleSignUp}
                        >
                            Register
                        </button>

                        <p className="signUpText para">
                            Have an account? <span className="signIn"><NavLink to="/login">Sign In</NavLink></span>
                        </p>
                        <p className="bottomMessage para">
                            This page is protected by Google reCAPTCHA to ensure you're not a bot
                        </p>
                    </div>
                    <ToastContainer />
                </div>
            </section>
        </main>
    );
};

export default NetflixRegister;
