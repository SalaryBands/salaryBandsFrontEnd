import {useState} from 'react'


import PayItForward from './PayItForward';



function PromoteTransparency () {

    const [nextStep, setNextStep] = useState(false)


    const handleNextStep = function (e) {
        e.preventDefault()
        setNextStep(true)
    }

    const genders = [
        'Male',
        'Female',
        'Transgender',
        'Non binary', 
        'Other'
    ]

    const races = [
        'Caucasian',
        'Native American or Alaska Native',
        'Black or African American',
        'Asian',
        'Hispanic or Latino',
        'Two or more races',
        'Other'
    ]

    const disabilities = [
        'Autism', 
        'ADHD',
        'Aspergers',
        'Dyslexia',
        'Dyspraxia',
        'Dyscalculia',
        'Epilepsy',
        'FASD',
        'Hyperlexia',
        'Obsessive-compulsive disorder (OCD)',
        'Tourettes',
        'Other'
    ]

    return (
        <div className="transparencyContainer">

        {
            !nextStep ?

            <>

            <div className="detailsTextContainer">
                <h2>Promote pay transparency</h2>
                <p>Demographic responses are NOT required. Providing this information helps us identify compensation discrepancies.</p>
            </div>
            <div className="submissionContainer">
                <div className="uploadOfferContainer">
                    <form onSubmit={ handleNextStep } action="#">
                        <label htmlFor="">What is your gender?</label>
                        <input type="text" />

                        <label htmlFor="">What is your race(s)?</label>
                        <input type="text" />

                        <label htmlFor="">Do you have a disability?</label>
                        <input type="radio" name="" id="" />  
                        <label htmlFor="">Yes</label>                  
                        <input type="radio" />
                        <label htmlFor="">No</label>

                        <button type="submit">Next Step</button>
                    </form>
                </div>
            </div>
            </>

            : nextStep ?
            <PayItForward/>

            : null
        }
        </div>
    )
}

export default PromoteTransparency;