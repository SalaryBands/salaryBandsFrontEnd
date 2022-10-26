import { useCallback, useEffect, useState, useRef } from 'react';
import { Header } from '../components/Header';
import {Link} from 'react-router-dom';
import axios from 'axios';
import verifyEmail from '../assets/verifyEmail.png'
import emailSuccess from '../assets/emailSuccess.png'

function EmailVerification() {

    const [errors, setErrors] = useState({email: ''}); 
    const [userVerify, setUserVerify] = useState(false)

    const emailRef = useRef(null)

    
    // const handleInput = function(e) {
    //     setUserEmail(e.target.value)
    //     console.log(userEmail);
    // }

    console.log(emailRef);
    
    const setTrue = useCallback( (e) => {
        e.preventDefault();
        setUserVerify(!userVerify); 
        var formdata = new FormData();
        formdata.append("user[email]", emailRef.current.value);

        console.log(emailRef.current.value);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://salarybandsapi.fly.dev/authentication/create", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }, [userVerify])
    
    return (
        <section className='emailVerification'>
            <div className='userCard'>
                <div className="emailInput">
                        { !userVerify ?
                        <>
                        <div className="emailInputTextContainer">
                            <h2>Verify your work email</h2>
                            <p>Your work email is <span>only</span> used for verification.</p>
                        </div>
                        <div className="formContainer">
                            <form onSubmit={setTrue} action="#">
                                <label htmlFor="workEmail">Work Email*</label>
                                <input ref={emailRef} type="email" placeholder='Enter your work email' name="workEmail"/>
                                <button type="submit" className='verifyButton'>Verify</button>
                            </form>
                        </div>
                        </>
                        :
                        <div className="thankYouEmailInputTextContainer">
                            <h2>Check your email</h2>
                            <p>You will receive a special link to submit your compensation and demographics data anonymously.</p>
                        </div>
                    }
                        <div className="contactContainer">
                            <div className="salaryBandTrademark"><p>&copy; SalaryBands 2022</p></div>
                            <div className="contactEmail"><p>help@salarybands.com</p></div>
                        </div>
                </div>

                <div className="infoCard">
                    { !userVerify ?
                    <>
                        <div className="infoImgContainer">
                            <img src={verifyEmail} alt="" />
                        </div>
                        <div className="infoCardTextContainer">
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <p>By verifying your email, you help ensure that SalaryBands provides an accurate and comprehensive database worth trusting.</p>
                        </div>
                    </>

                        :
                        <>
                            <div className="infoImgContainer">
                                <img src={emailSuccess} alt="" />
                            </div>
                            <div className="infoCardTextContainer">
                                <h3>Lorem ipsum dolor sit amet</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet modi nulla rem magni explicabo deserunt, et unde in ullam necessitatibus eius ipsa esse autem sunt natus sapiente libero dolorem labore!</p>
                            </div>       
                        </>

                    }
                </div>
            </div>
        </section>

    )
}

export default EmailVerification;