import {useState, useEffect} from 'react';


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
            <div className='tellUsCard'>
                <div className="detailsCard">

                    {
                    upload && manual === false ?

                        <div>
                            <div className="detailsTextContainer">
                                <h2>Tell us about your role</h2>
                                <p>Share your professional details.</p>
                            </div>
                            <div className="professionalDetails">
                                <form action="#">

                                    <button onClick={handlePDF} className="userFlowButton">Upload a PDF</button>

                                    <button onClick={handleManual} className='userFlowButton'>Enter Manually</button>
                                </form>
                            </div> 
                        </div>

                        : upload ?
                        <div>
                            <h1>upload</h1>
                        </div>
                        
                        : manual ?
                        <div className="">
                            <h1>manual</h1>
                        </div>

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