import { useCallback, useEffect, useState, useRef } from 'react';
import { Header } from '../components/Header';
import {Link} from 'react-router-dom';
import axios from 'axios';
import verifyEmail from '../assets/verifyEmail.png'
import emailSuccess from '../assets/emailSuccess.png'

function EmailVerification() {

    const [errors, setErrors] = useState({email: ''}); 
    const [userVerify, setUserVerify] = useState(false)
    const [userError, setUserError] = useState(false)
    const [userEmail, setUserEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState({})

    const handleEmail = function (e) {
        setUserEmail(e.target.value)
    }


    // const emailRef = useRef(null)

    // console.log(emailRef);

    let errorStyling = {
        border: '1px solid #F04438',
        marginBottom: '5px'
    }
    
    const setTrue = useCallback( (e) => {
        e.preventDefault();
        var formdata = new FormData();
        formdata.append("user[email]", userEmail);

        // console.log(emailRef.current.value);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://salarybandsapi.fly.dev/authentication/create", requestOptions)
            .then(response => response.text())
            .then((result) => {
                if (result) {
                    setErrorMessage(result)
                    setUserError(true)
                    setUserVerify(false)
                } else {
                    setUserVerify(true)
                }
            })
            .catch((error) => { setUserVerify(false); console.log(error)});
            
            
        }, [userVerify, userEmail])
        
        console.log(errorMessage.message);
    
    return (
        <section className='emailVerification'>
            <div className='userCard'>
                <div className="emailInput">
                        { !userVerify ?
                        <>
                        <div className="emailInputTextContainer">
                            <h2>Verify your work email</h2>
                            <p>In order to submit your salary, you need to confirm your work email. Your work email is <span>only</span> used for verification</p>
                        </div>
                        <div className="formContainer">
                            <form onSubmit={setTrue} action="#">
                                <label htmlFor="workEmail">Work Email*</label>
                                <input onInput={handleEmail} type="email" placeholder='Enter your work email' name="workEmail"
                                style={ 
                                userError ? errorStyling : undefined
                                }
                                />
                                {
                                    userError ?
                                        <div>
                                            <p className='errorText'>This domain is not allowed to access submission features.</p>
                                        </div>
                                    

                                    : null
                                }
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
                            <h3>Salaries published are verified for accuracy and correctness</h3>
                            <p>By verifying your email, you help ensure that SalaryBands provides an accurate and comprehensive database worth trusting.</p>
                        </div>
                    </>

                        :
                        <>
                            <div className="infoImgContainer">
                                <img src={emailSuccess} alt="" />
                            </div>
                        </>

                    }
                </div>
            </div>
        </section>

    )
}

export default EmailVerification;