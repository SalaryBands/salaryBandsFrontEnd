import { useCallback, useState } from 'react';
import { Header } from '../components/Header';

function EmailVerification() {

    const [userEmail, setUserEmail] = useState([]);
    const [errors, setErrors] = useState({email: ''}); 
    const [userVerify, setUserVerify] = useState(false)


    
    
    const handleInput = function(e) {
       setUserEmail(e.target.value)
    }

    const setTrue = useCallback( (e) => {
        e.preventDefault();
        setUserVerify(!userVerify); 
        console.log(userEmail);
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
                                <label htmlFor="">Work Email*</label>
                                <input onInput={handleInput}type="email" placeholder='Enter your work email' />
                                <button type="submit" className='verifyButton'>Verify</button>
                            </form>
                        </div>
                        </>
                        :
                        <div className="emailInputTextContainer">
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
                    <div className="infoImgContainer">
                    
                    </div>
                    <div className="infoCardTextContainer">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet modi nulla rem magni explicabo deserunt, et unde in ullam necessitatibus eius ipsa esse autem sunt natus sapiente libero dolorem labore!</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default EmailVerification;