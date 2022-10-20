import {useState} from 'react';
import ProfessionalDetails from '../../src/components/ProfessionalDetails';
import UploadDetails from '../components/UploadDetails';
import magnifyingglass from '../assets/magnifyingglass.png'

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
                    {
                    !upload && !manual ?
                <>
                
                <div className="detailsCard">
                        <div className='userPathwayComponentContainer'>
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

                            <div className="contactContainer">
                                <div className="salaryBandTrademark"><p>&copy; SalaryBands 2022</p></div>
                                <div className="contactEmail"><p>help@salarybands.com</p></div>
                            </div>

                        </div>
                </div>

                <div className="infoCard">
                    <div className="infoImgContainer">
                        <img src={magnifyingglass} alt="" />
                    </div>
                    <div className="infoCardTextContainer">
                        <h3>Providing transparency and equity for tech</h3>
                        <p>We provide insights for better decision-making by using accurate and comprehensive compensation information.</p>
                    </div>
                </div>
                </>
                    : upload ?
                    <UploadDetails />
                    
                    : manual ?
                    <ProfessionalDetails />

                    : null
                }
            </div>
        </section>
    )
}

export default UserPathway;