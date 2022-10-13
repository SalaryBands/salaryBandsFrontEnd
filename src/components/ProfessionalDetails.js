import {useState} from 'react';
import PromoteTransparency from './PromoteTransparency';

function ProfessionalDetails() {

    const [verifyDetails, setVerifyDetails] = useState(false)

    const [professionalDetails, setProfessionalDetails] = useState({
        company: '',
        location: '',
        title: '',
        salary: 0,
        type: '',
        years: 0,
        workArrangement: '',
        negotiate: '',
        negotiatePercent: 0
    })

    const handleVerifyDetails = function (e) {
        e.preventDefault()
        setVerifyDetails(true)
    }

    function handleInput(e) {
        const value = e.target.value;
        setProfessionalDetails({
            ...professionalDetails,
            [e.target.name]: value
        })
    }




    return (
        <div>

            {
                !verifyDetails ?

            <div className='tellUsCard'>
                <div className="detailsCard">
                    <div className="detailsTextContainer">
                        <h2>Tell us about your role</h2>
                        <p>Share your professional details.</p>
                    </div>
                    <div className="professionalDetails">
                        <form onSubmit={handleVerifyDetails} action="#">
                            <div className="companyAndLocationContainer">
                                <div className="companyContainer">
                                    <label htmlFor="company">What company do you work at?</label>
                                    <input onInput={handleInput}type="text" name='company' placeholder='Company Name'/>
                                </div>

                                <div className="locationContainer">
                                    <label htmlFor="location">Where do you work?</label>
                                    <input onInput={handleInput}type="text" name='location' placeholder='City, State, Country'/>
                                </div>

                            </div>
                            <div className="jobTitleContainer">
                                <label htmlFor="title">What is your job title?</label>
                                <input onInput={handleInput} type="text" name='title' placeholder='Job Title (i.e. Designer)' />
                            </div>

                            <div className="salaryQuestionContainer">
                                <div className="salaryContainer">
                                    <label htmlFor="salary">How much do you make?</label>
                                    <input onInput={handleInput} type="text" name='salary' placeholder='$00.00' />
                                </div>
                                <div className="typeContainer">
                                    <label htmlFor="">Type</label>
                                    <input onInput={handleInput} type="text" />
                                </div>
                            </div>

                            <div className="yearsAndWorkContainer">
                                <div className="yearsContainer">
                                    <label htmlFor="years">Years of Experience?</label>
                                    <input onInput={handleInput} type="text" name='years' placeholder='YoE Total or at Company' />
                                </div>
                                <div className="workContainer">
                                    <label htmlFor="arrangement">Work Arrangement</label>
                                    <input onInput={handleInput} type="text" name='workArrangement' />
                                </div>
                            </div>

                            <div className="negotiateContainer">
                                <div className="negotiateContainer">
                                    <label htmlFor="negotiate">Did you negotiate for this salary?</label>
                                    <input onInput={handleInput} type="radio" name="negotiate" id=""  />
                                    <input onInput={handleInput} type="radio" name="negotiate" id="" />
                                </div>
                                <div className="negotiatePercentContainer">
                                    <label htmlFor="negotiatePercent">If yes, how much more?</label>
                                    <input onInput={handleInput} type="text" name='negotiatePercent' />
                                </div>
                            </div>

                            <button type="submit" className='verifyButton'>Next Step</button>
                        </form>
                    </div>
                </div>
            </div>

            : <PromoteTransparency />

            }
        </div>
    )
}

export default ProfessionalDetails 