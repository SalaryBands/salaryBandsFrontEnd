import {useState} from 'react';
import ProfessionalDetails from '../../src/components/ProfessionalDetails';
import UploadDetails from '../components/UploadDetails';

function UserPathway () {

    const [upload, setUpload] = useState(false)
    const [manual, setManual] = useState(false)

    const handlePDF = function (e) {
        e.preventDefault()
        setUpload(true)
    }

    const handleManual = function (e) {
        e.preventDefault()
        setManual(true)
    }

    return (
        <section className="userFlowContainer">
            <div className='userCard'>
                <div className="detailsCard">

                    {
                    !upload && !manual ?

                        <div>
                            <div className="detailsTextContainer">
                                <h2>Help build an accurate database</h2>
                                <p>Upload a PDF of your OFFER LETTER to get <span>verified</span>.</p>
                            </div>
                            <div className="professionalDetails">
                                <form action="#">

                                    <div className="uploadContainer"></div>

                                    <button onClick={handlePDF} className='verifyButton'>Upload a PDF</button>

                                    <div className='orContainer'>
                                        <p>or</p>
                                    </div>

                                    <button onClick={handleManual} className='verifyButton'>Enter Manually</button>
                                </form>
                            </div> 
                        </div>

                        : upload ?
                        <UploadDetails />
                        
                        : manual ?
                        <ProfessionalDetails />

                        : null
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

export default UserPathway;