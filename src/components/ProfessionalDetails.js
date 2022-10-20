import {useState} from 'react';
import Select from 'react-select';
import PromoteTransparency from './PromoteTransparency';
import House from '../assets/house.png';


function ProfessionalDetails() {

    const [verifyDetails, setVerifyDetails] = useState(false)
    const [type, setType] = useState({})
    const [workArrangement, setWorkArrangement] = useState({})
    const [percentNumber, setPercentNumber] = useState(0)
    const [professionalDetails, setProfessionalDetails] = useState({
        company: '',
        location: '',
        title: '',
        salary: 0,
        years: 0,
        negotiate: '',
        negotiatePercent: 0
    })

    const types = [
        { value: 'annual', label: 'Annual' },
        { value: 'monthly', label: 'Monthly' },
        { value: 'biweek', label: 'Bi-weekly' },
    ]
    
    const workArr = [
        { value: 'office', label: 'In office' },
        { value: 'hybrid', label: 'Hybrid' },
        { value: 'remote', label: 'Remote' },
    ]

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
    <div className='professionalDetailsCardandImageContainer'>

        {
            !verifyDetails ?
                
            <>
            
        <div className='professionalDetailsContainer'>


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
                                    <input onInput={handleInput} type="number" name='salary' placeholder='$00.00' />
                                </div>
                                <div className="typeContainer">
                                    <label htmlFor="">Type</label>
                                    <Select options={types} onChange={(salaryType) => setType(salaryType.value)}/>
                                </div>
                            </div>

                            <div className="yearsAndWorkContainer">
                                <div className="yearsContainer">
                                    <label htmlFor="years">Years of Experience?</label>
                                    <input onInput={handleInput} type="text" name='years' placeholder='YoE Total or at Company' />
                                </div>
                                <div className="workContainer">
                                    <label htmlFor="arrangement">Work Arrangement</label>
                                    <Select options={workArr} onChange={(arrangement) => setWorkArrangement(arrangement.value)} />
                                </div>
                            </div>

                            <div className="negotiateContainer">
                                <div className="negotiateQuestionContainer">
                                    <label htmlFor="negotiate">Did you negotiate for this salary?</label>
                                    <div className="yesOrNoContainer">
                                        <div className="yesContainer">
                                            <input onInput={handleInput} type="radio" name="negotiate" id="true" value='true' />
                                            <label htmlFor="true">Yes</label>
                                        </div>
                                        <div className="noContainer">
                                            <input onInput={handleInput} type="radio" name="negotiate" id="false" value='false' />
                                            <label htmlFor="false">No</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="negotiatePercentContainer">
                                    <label htmlFor="negotiatePercent">If yes, how much more?</label>
                                    <input onInput={handleInput} type="text" name='negotiatePercent' placeholder='2%' />
                                </div>
                            </div>

                            <button type="submit" className='verifyButton'>Next Step</button>
                        </form>
                    </div>
                    <div className="contactContainer">
                        <div className="salaryBandTrademark"><p>&copy; SalaryBands 2022</p></div>
                        <div className="contactEmail"><p>help@salarybands.com</p></div>
                    </div>
                </div>
            </div>
            

            
            </div>
            <div className="infoCard">
                    <div className="infoImgContainer">
                        <img src={House}  alt="" />
                    </div>
                    <div className="infoCardTextContainer">
                        <h3>Figure out what you're worth and how to get paid what you're worth</h3>
                        <p> We want to help people gain clarity on what they should expect to be paid at their job title and location, thereby creating a better market for both employees and employers.</p>
                    </div>
                </div>
            </>
    
                : <PromoteTransparency 
                userProfessionalDetails={professionalDetails}
                userWorkType={type}
                userWorkArrangement={workArrangement}
                userPercentNumber={percentNumber}/>
            }
            </div>
    )
}

export default ProfessionalDetails 