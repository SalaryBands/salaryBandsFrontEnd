import {useState} from 'react';
import PromoteTransparency from './PromoteTransparency';

function ProfessionalDetails() {

    const [verifyDetails, setVerifyDetails] = useState(false)

    const [companyName, setCompanyName] = useState([])
    const [location, setLocation] = useState([])

    const handleVerifyDetails = function (e) {
        e.preventDefault()
        setVerifyDetails(true)
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
                                    <input type="text" name='company' placeholder='Company Name'/>
                                </div>

                                <div className="locationContainer">
                                    <label htmlFor="location">Where do you work?</label>
                                    <input type="text" name='location' placeholder='City, State, Country'/>
                                </div>

                            </div>
                            <div className="jobTitleContainer">
                                <label htmlFor="title">What is your job title?</label>
                                <input type="text" name='title' placeholder='Job Title (i.e. Designer)' />
                            </div>

                            <div className="salaryQuestionContainer">
                                <div className="salaryContainer">
                                    <label htmlFor="">How much do you make?</label>
                                    <input type="text" name='company' placeholder='$00.00' />
                                </div>
                                <div className="typeContainer">
                                    <label htmlFor="">Type</label>
                                    <input type="" />
                                </div>
                            </div>

                            <div className="yearsAndWorkContainer">
                                <label htmlFor="years">Years of Professional Experience?</label>
                                <input type="text" name='years' placeholder='YoE Total or at Company' />

                                <label htmlFor="arrangement">Work Arrangement</label>
                                <input type="text" />
                            </div>

                            <div className="negotiateContainer">
                                <label htmlFor="negotiate">Did you negotiate for this salary?</label>
                                <input type="radio" name="negotiate" id="" />
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