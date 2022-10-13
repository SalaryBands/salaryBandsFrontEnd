import {useState, useEffect} from 'react';

function PayItForward () {
    const [adviceBreak, setAdviceBreak] = useState([]);
    const [adviceNegotiate, setAdviceNegotiate] = useState([]);

    const [payItForward, setPayItForward] = useState({
        adviceBreak: '',
        adviceNegotiate: ''
    })

    function preventDefault (e) {
        e.preventDefault()
    }

    function handleInput(e) {
        const value = e.target.value;
        setPayItForward({
            ...payItForward, 
            [e.target.name]: value
        })
    }

    return (
        <div className="payItForwardContainer">
            <div className="payItForwardTextContainer">
                <h2>Pay it foward</h2>
                <p>You can provide as much information as you feel comfortable sharing.</p>
            </div>

            <div className="payItForwardFormContainer">
                <form onSubmit ={ preventDefault }action="#">


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
        </div>
    )
}

export default PayItForward;