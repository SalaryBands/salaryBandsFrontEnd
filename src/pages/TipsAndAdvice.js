import axios from "axios";
import Select from 'react-select';
import { FiSearch } from 'react-icons/fi';  
import {useState, useEffect} from 'react';
import Pin from '../assets/pin.png'

function TipsAndAdvice() {
    

    const [userData, setUserData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [advancedFilter, setAdvancedFilter] = useState(false);
    const [userGender, setUserGender] = useState("");
    const [userRace, setUserRace] = useState("");

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://salarybandsapi.fly.dev/contributions'
        }).then((apiData) => {
            setUserData(apiData.data)
        })
    }, [])

    const filteredData = userData.filter(data => {
        return data.advice_break || data.advice_negotiate
    })

    const handleChange = function (e) {
        setSearchTerm(e.target.value)
    }

    const handleClick = function () {
        setAdvancedFilter(!advancedFilter);
    };

    const races = [
        { value: "all", label: "All" },
        { value: "caucasian", label: "Caucasian" },
        { value: "native", label: "Native American or Alaska Native" },
        { value: "black", label: "Black or African American" },
        { value: "asian", label: "Asian" },
        { value: "latino", label: "Hispanic or Latino" },
        { value: "two", label: "Two or more races" },
        { value: "other", label: "Other" },
    ];

    const genders = [
        { value: "all", label: "All" },
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "transgender", label: "Transgender" },
        { value: "nonBinary", label: "Non Binary" },
        { value: "prefer", label: "Prefer not to say" },
    ];
    
    return (
        <div className="wrapper">
            <div className="tipsAndAdviceContainer">
                <div className="tipsTitleContainer">
                    <h2>Learn from others who have successfully negotiated their salary and made it in tech.</h2>
                </div>
                <div className="sRContainer">
                    <div className="searchContainer">
                        <div className="iconContainer">
                            <FiSearch />
                        </div>
                        <label htmlFor="search"></label>
                        <input
                            className="searchFilter"
                            type="text"
                            name="search"
                            placeholder="Search title, city, ect"
                            value={searchTerm}
                            onChange={handleChange}
                        />
                        <div className="advancedFilterContainer">
                            <button onClick={handleClick} className="advancedFilter">
                                Filter
                            </button>
                            {advancedFilter ? (
                                <div className="filterOptionsContainer">
                                    <div className="genderContainer">
                                        <label htmlFor="">Gender</label>
                                        <Select
                                            options={genders}
                                            onChange={(e) => setUserGender(e.label)}
                                        />
                                    </div>
                                    <div className="raceContainer">
                                        <label htmlFor="">Race/Ethnicity</label>
                                        <Select
                                            options={races}
                                            onChange={(raceType) => setUserRace(raceType.label)}
                                        />
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div className="recentData">
                        <div className="recentDataTextContainer">
                            <h3 className="recentDataText">Recent Data</h3>
                            <p>
                                <span className="totalSubmissions">
                                    {filteredData.length} total submissions
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="adviceCardContainer">
                    {
                        filteredData
                        .filter((userData) => 
                            userData.job_title.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                            userData.city.toString().toLowerCase().includes(searchTerm.toLowerCase())
                        ) 
                            .filter((userData) => {
                                if (userGender === "" || userGender === "All") {
                                    return true;
                                } else {
                                    console.log(userGender);
                                    return (
                                        userData.gender
                                            .toString()
                                            .toLowerCase()
                                            .includes(userGender.toLowerCase()) &&
                                        userData.gender.length === userGender.length
                                    );
                                }
                            })
                            .filter((userData) => {
                                console.log(userData);
                                if (userRace === "" || userRace === "All") {
                                    return true;
                                } else {
                                    return (
                                        userData.race
                                            .toString()
                                            .toLowerCase()
                                            .includes(userRace.toLowerCase()) &&
                                        userData.race.length === userRace.length
                                    );
                                }
                            })
                        .reverse().map( (val) => {
                            return(
                                <div key={val.id}className="adviceCard">
                                    <div className="professionalDetailContainer">
                                        <div className="titleAndLocationContainer">
                                            <div className="titleContainer">
                                                <h3>{val.job_title}</h3>
                                            </div>
                                            <div className="locationContainer">
                                                <div className="iconContainer"><img src={Pin} alt="" /></div>
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
                                        {
                                            val.advice_break ?

                                            <div className="breakRoleContainer">
                                                <p className="questionText">What advice can you share with others looking to break into your field or role?</p>
                                                <p className='answerText'>{val.advice_break}</p>
                                            </div>

                                            : null
                                        }

                                        {
                                            val.advice_negotiate ?
                                            <div className="negotiateSalaryContainer">
                                                <p className="questionText">What is an important tip people need to know when negotiating their salary?</p>
                                                <p className='answerText'>{val.advice_negotiate}</p>
                                            </div>

                                            : null
                                        }
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