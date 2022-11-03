import axios from "axios";
import {useState, useEffect} from 'react';

function TipsAndAdvice() {
    

    const [userData, setUserData] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://salarybandsapi.onrender.com/contributions'
        }).then((apiData) => {
            setUserData(apiData.data)
        })
    }, [])

    const filteredData = userData.filter(data => {
        return data.advice_break || data.advice_negotiate
    })

    console.log(filteredData);
    
    return (
        <div className="wrapper">
            <div className="tipsAndAdviceContainer">
                <div className="tipsTitleContainer">
                    <h2>Learn from others who have successfully negotiated their salary and made it in tech.</h2>
                </div>
                <div className="tipsSearchFilterResultsContainer">
                    <div className="searchAndFilterContainer">
                        <div className="searchContainer">
                            <label htmlFor="searchAdvice"></label>
                            <input type="text" name="searchAdvice" placeholder="Search title, city, ect."/>
                        </div>
                        <div className="filterContainer">
                            <button className="filterTips">Filters</button>
                        </div>
                    </div>
                    <div className="recentDataContainer">
                        <h4>Recent Data</h4>
                        <p><span className="totalSubmissions">{filteredData.length} total submissions</span></p>
                    </div>
                </div>
                <div className="adviceCardContainer">
                    {
                        filteredData
                        
                        .reverse().map( (val) => {
                            return(
                                <div className="adviceCard">
                                    <div className="professionalDetailsContainer">
                                        <div className="titleAndLocationContainer">
                                            <div className="titleContainer">
                                                <h3>{val.job_title}</h3>
                                            </div>
                                            <div className="locationContainer">
                                                <p>{val.city}, {val.state}, {val.country}</p>
                                            </div>
                                        </div>
                                        <div className="yearsGenderRaceContainer">
                                            <div className="yearsContainer">
                                                <p><span className="boldAdvice">Years of Experience:</span> {val.years_of_experience}</p>
                                            </div>
                                            <div className="genderContainer">
                                                <p><span className="boldAdvice">Gender:</span> {val.gender}</p>
                                            </div>
                                            <div className="raceContainer">
                                                <p><span className="boldAdvice">Race:</span> {val.race}</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="userAdviceContainer">
                                        <div className="breakRoleContainer">
                                            <p className="questionText">What advice can you share with others looking to break into your field or role?</p>
                                            <p className='answerText'>{val.advice_break}</p>
                                        </div>
                                        <div className="negotiateSalaryContainer">
                                            <p className="questionText">What is an important tip people need to know when negotiating their salary?</p>
                                            <p className='answerText'>{val.advice_negotiate}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TipsAndAdvice; 