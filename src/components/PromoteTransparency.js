import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function PromoteTransparency () {


    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

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

        <div className="detailsTextContainer">
            <h2>Promote pay transparency</h2>
            <p>Demographic responses are NOT required. Providing this information helps us identify compensation discrepancies.</p>
        </div>
        <div className="submissionContainer">
            <div className="uploadOfferContainer">
                <form action="">
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
        <div className="professionalDetails">
            <form action="#">
                <label htmlFor="">What is your job title?*</label>
                <input type="text" placeholder='Job Title (i.e. Designer)' />

                <label htmlFor="">What company do you work at?</label>
                <input type="text" placeholder='Company Name'/>

                <label htmlFor="">Years of Professional Experience?</label>
                <input type="text" placeholder='YoE Total or at Company'/>

                <label htmlFor="">How much do you make? Before tax, annual salary/hourly</label>
                <input type="text" placeholder='$00.00' />

                <button type="submit" className='verifyButton'>Enter Manually</button>
            </form>
        </div>
    </div>
    )
}