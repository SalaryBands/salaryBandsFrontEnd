import {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import Finish from './Finish';

function PayItForward (props) {

    const baseURL = 'https://salarybandsapi.herokuapp.com/contributions'

    const [submitInfo, setSubmitInfo] = useState(false)

    const [payItForward, setPayItForward] = useState({
        adviceBreak: '',
        adviceNegotiate: ''
    })

    function handleInput(e) {
        const value = e.target.value;
        setPayItForward({
            ...payItForward, 
            [e.target.name]: value
        })
    }

    const setTrue = useCallback((e) => {
        e.preventDefault();
        setSubmitInfo(true);
        axios.post(baseURL, {
            company: props.userDe.company,
            country: props.userDe.location,
            job_title: props.userDe.title,
            salary: props.userDe.salary,
            period: props.userWorkPer,
            years_of_experience: props.userDe.years,
            work_arrangement: props.userWorkArr,
            negotiate_check: '',
            negotiation_percentage: '',
            gender: '',
            race: '',
            disability_check: '',
            advice_break: payItForward.adviceBreak,
            advice_negotiate: payItForward.adviceNegotiate
        })

    }, [submitInfo])

    return (

        <div className="payItForwardContainer">
        {
            !submitInfo ?
                <>
                
                <div className="payItForwardTextContainer">
                    <h2>Pay it foward</h2>
                    <p>You can provide as much information as you feel comfortable sharing.</p>
                </div>
    
                <div className="payItForwardFormContainer">
                    <form onSubmit ={ setTrue }action="#">
    
    
                        <div className="adviceContainer">
                            <label htmlFor="adviceBreak">What advice can you share with others looking to break into your field or role?</label>
                            <textarea onInput={handleInput} name='adviceBreak' value={payItForward.adviceBreak} />
                        </div>
    
                        <div className="negotiateContainer">
                            <label htmlFor="adviceNegotiate">What advice can you share about negotiating compensation in tech?</label>
                            <textarea onInput={handleInput} name='adviceNegotiate' value={payItForward.adviceNegotiate}/>
                        </div>
    
                        <button type="submit">Submit</button>
                    </form>
                </div>
                </>
            : 
            <Finish />
        }
        </div>
    )
}

export default PayItForward;