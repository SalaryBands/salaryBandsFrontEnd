import {useState} from 'react';

function ProfessionalDetails() {

    return (
        <section className="userFlowContainer">
            <div className='tellUsCard'>
                <div className="detailsCard">
                    <div className="detailsTextContainer">
                        <h2>Tell us about your role</h2>
                        <p>Share your professional details.</p>
                    </div>
                    <div className="professionalDetails">
                        <form action="#">
                            <label htmlFor="company">What company do you work at?</label>
                            <input type="text" name='company' placeholder='Company Name'/>

                            <label htmlFor="location">Where do you work?</label>
                            <input type="text" name='location' placeholder='City, State, Country'/>

                            <label htmlFor="title">What is your job title?*</label>
                            <input type="text" name='title' placeholder='Job Title (i.e. Designer)' />


                            <label htmlFor="years">Years of Professional Experience?</label>
                            <input type="text" name='years' placeholder='YoE Total or at Company'/>

                            <div className="salaryQuestion">
                                <label htmlFor="">How much do you make?</label>
                                <input type="text" name='company' placeholder='$00.00' />

                                <label htmlFor="">Type</label>
                                <input type="" />
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

                            <button type="submit" className='verifyButton'>Enter Manually</button>
                        </form>
                    </div>
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

export default ProfessionalDetails; 