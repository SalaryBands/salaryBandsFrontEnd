import {useState, useEffect} from 'react';

function PayItForward () {
    const [adviceBreak, setAdviceBreak] = useState([]);
    const [adviceNegotiate, setAdviceNegotiate] = useState([]);

    return (
        <div className="payItForwardContainer">
            <div className="payItForwardTextContainer">
                <h2>Pay it foward</h2>
                <p>You can provide as much information as you feel comfortable sharing.</p>
            </div>

            <div className="payItForawardFormContainer">
                <form action="">
                    <label htmlFor="">What advice can you share with others looking to break into your field or role?</label>
                    <input type="text" />

                    <label htmlFor="">What advice can you share about negotiating compensation in tech?</label>
                    <input type="text" />

                    <label htmlFor="">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</label>
                    <input type="text" />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default PayItForward