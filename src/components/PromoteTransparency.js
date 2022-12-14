import {useState, useCallback} from 'react'
import { Link } from 'react-router-dom';
import Select from 'react-select'
import PayItForward from './PayItForward';
import MagLetter from '../assets/MagLetter.png';
import ProfessionalDetails from './ProfessionalDetails';
import { useEffect } from 'react';




function PromoteTransparency (props) {

    const [nextStep, setNextStep] = useState(false)
    const [userGender, setUserGender] = useState("")
    const [userRace, setUserRace] = useState("")
    const [userDisability, setUserDisability] = useState([])
    const [inputDisabled, setInputDisabled] = useState(true)
    const [verifyData, setVerifyData] = useState(true)
    const [isChecked, setIsChecked] = useState(false)
    
    const genders = [
        { value: 'male', label: 'Male'},
        { value: 'female', label: 'Female' },
        { value: 'transgender', label: 'Transgender' },
        { value: 'nonBinary', label: 'Non Binary' },
        { value: 'prefer', label: 'Prefer not to say' }
    ]
    
    const races = [
        { value: 'caucasian', label: 'Caucasian'},
        { value: 'native', label: 'Native American or Alaska Native' },
        { value: 'black', label: 'Black or African American' },
        { value: 'asian', label: 'Asian' },
        { value: 'latino', label: 'Hispanic or Latino' },
        { value: 'two', label: 'Two or more races' },
        { value: 'other', label: 'Other' }
    ]
    
    const disabilities = [
        { value: 'autism', label: 'Autism' },
        { value: 'adhd', label: 'ADHD' },
        { value: 'aspergers', label: 'Aspergers' },
        { value: 'dyslexia', label: 'Dyslexia' },
        { value: 'dyspraxia', label: 'Dyspraxia' },
        { value: 'dyscalculia', label: 'Dyscalculia' },
        { value: 'fasd', label: 'FASD' },
        { value: 'hyperlexia', label: 'Hyperlexia' },
        { value: 'ocd', label: 'Obsessive-compulsive disorder (OCD)' },
        { value: 'tourettes', label: 'Tourettes' },
        { value: 'other', label: 'Other' },
        { value: 'prefer', label: 'Prefer not to say' },
    ]


    const handleChecked = (e) => {

        if(e.target.checked && e.target.value == "yes") {
            setInputDisabled(false)
            setIsChecked(true)
        } else if (e.target.checked && e.target.value == "no") {
            setInputDisabled(true)
            setIsChecked(true)
        }
    }
    
    const handleMultiDisability = (e) => {
        setUserDisability(Array.isArray(e) ? e.map(x => x.label) : []);
    }
    
    useEffect( () => {
        if (userGender.length >= 1 && userRace.length >= 1 && isChecked && !inputDisabled && userDisability.length >= 1) {
            setVerifyData(false)
        } else if 
            (userGender.length >= 1 && userRace.length >= 1 && isChecked && inputDisabled) {
                setVerifyData(false)
            }
        
    }, [userGender, userRace, isChecked, inputDisabled, userDisability])

    const handleNextStep = (e) => {

        e.preventDefault()
        setNextStep(true)
    }


    return (
        <>

            {
                !nextStep ?
                <>

            <div className="transparencyContainer">
                <div className="detailsTextContainer">
                    <h2>Promote pay transparency</h2>
                    <p>Demographic responses are NOT required. Providing this information helps us identify compensation discrepancies.</p>
                </div>
                <div className="submissionContainer">
                    <div className="personalCharacteristics">
                        <form onSubmit={ handleNextStep } action="#">
                            <div className="genderContainer">
                                <label htmlFor="">What is your gender?</label>
                                <Select options={genders} onChange={(genderType) => setUserGender(genderType.label)} 
                                />
                            </div>
                            <div className="raceContainer">
                                <label htmlFor="">What is your race?</label>
                                <Select options={races} onChange={(raceType) => setUserRace(raceType.label)} required/>
                            </div>

                            <div className="disabilityContainer">
                                <label htmlFor="">Do you have a disability?</label>
                                <div className="yesOrNoContainer">
                                    <div className="yesContainer">
                                        <input type="radio" name="disability" value="yes" onChange={handleChecked}/>  
                                        <label htmlFor="">Yes</label>                  
                                    </div>
                                    <div className="noContainer">
                                        <input type="radio" name='disability' value="no" onChange={handleChecked}/>
                                        <label htmlFor="">No</label>
                                    </div>
                                </div>
                            </div>

                            <div className="yesDisabilityContainer">
                                <label htmlFor="">If yes, what disability do you identify as having?</label>
                                <Select options={disabilities} isMulti onChange={handleMultiDisability} isDisabled={inputDisabled} value={disabilities.filter(obj => userDisability.includes(obj.label))} />
                            </div>

                            <div className="nextAndBackContainer">
                                {/* <div className='backContainer'>
                                    <button type="button" className='backButton' onClick={handleBack}>Back</button>
                                </div> */}
                                <div className="nextContainer">
                                    <button type="submit" className="verifyButton" disabled={verifyData}>
                                        Next Step
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <div className="contactContainer">
                    <div className="salaryBandTrademark"><p>&copy; SalaryBands 2022</p></div>
                    <div className="contactEmail"><p>help@salarybands.com</p></div>
                </div> */}
                </div>

                <div className="infoCard">
                        <div className="infoImgContainer">
                            <img src={MagLetter} alt="" />
                        </div>
                        <div className="infoCardTextContainer">
                            <h3>Bridge the tech industry pay gap, one data point at a time</h3>
                            <p>Public salary data is an important, and often under-utilized, tool in eliminating the gender, race, and disability wage gaps.</p>
                        </div>
                    </div>
                </>

                : nextStep ?
                <PayItForward 
                userWorkT={props.userWorkType}
                userWorkArr={props.userWorkArrangement}
                userWorkPer={props.userPercentNumber}
                userDe={props.userProfessionalDetails}
                userNegoCheck={props.userNegotiated}
                userPosition={props.usersJobTitle}
                userI={props.usersIndustry}
                userG={userGender}
                userD={userDisability}
                userR={userRace}
                userDCheck={inputDisabled}
                />

                : null
                

            }
        </>
    )
}

export default PromoteTransparency;