import axios from 'axios';
import {useState, useEffect} from 'react';




function UserSubmissionChart () {

    const [userSubmissionData, setUserSubmissionData] = useState([])

    const [searchTerm, setSearchTerm] = useState("")

    useEffect( () => {
        axios({
            method: 'get',
            url: 'https://salarybandsapi.onrender.com/contributions'
        }).then( (apiData) => {
            setUserSubmissionData(apiData.data)
        })
    }, [])

    const handleChange = function (e) {
        setSearchTerm(e.target.value)
    }

    const tokenAccess = localStorage.getItem('token')

    const headers = {
        'Authorization': tokenAccess
    };

    axios.delete('https://salarybandsapi.onrender.com/contributions/:1', { headers })

    
    console.log(userSubmissionData);
    return (
        <section className='userSubmissionChartContainer'>
            <div className="wrapper">
                <div className="userSubmissionTextContainer">
                    <h4>Explore all data</h4>
                    <h2>Explore all data below</h2>
                    <p>SalaryBands is here to help you figure out how to get paid what you're worth.</p>
                </div>  

                <div className="userSubmissionTable" id="userSubmissionTable">
                    <div className="searchAndRecentDataContainer">
                        <div className="searchContainer">
                            <label htmlFor="search"></label>
                            <input className='searchFilter' type="text" name='search' placeholder='Search title, company, city, ect' value={searchTerm} onChange={handleChange}/>
                        </div>
                        <div className="recentData">
                            <div className="recentDataTextContainer">
                                <h3 className='recentDataText'>Recent Data</h3>
                                <p><span className='totalSubmissions'>{userSubmissionData.length} total submissions</span></p>
                            </div>
                            <div className="paidWorthContainer">
                                <p className='paidWorth'>SalaryBands is here to help you figure out how to get paid what you're worth.</p>
                            </div>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th className='tableHeadContainer title'>
                                    <div>
                                        <div><p className='tableHeadText'>Title/Position</p></div>
                                        <div><p className='tableHeadText'>Location</p></div>
                                    </div>
                                </th>
                                <th className='company'>
                                    <div className='tableHeadContainer'>
                                        <div><p className='tableHeadText'>Company</p></div>
                                        <div><p className='tableHeadText'>Industry</p></div>
                                    </div>
                                </th>
                                <th className='tableHeadContainer years'><p className='tableHeadText'>YoE</p></th>
                                <th className='tableHeadContainer gender'><p className='tableHeadText'>Gender</p></th>
                                <th className='compensation'>
                                    <div className='tableHeadContainer'>
                                        <div><p className='tableHeadText'>Compensation</p></div>
                                        <div><p className='tableHeadText'>Base, % Negotiated</p></div>
                                    </div>
                                </th>
                                <th className='tableHeadContainer tags'><p className='tableHeadText'>Tags</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            {userSubmissionData
                            // .filter((userData) => 
                            //     userData.job_title.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                            //     userData.company.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                            //     userData.country.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                            //     userData.work_arrangement.toString().toLowerCase().includes(searchTerm.toLowerCase())
                            //     )
                            .reverse().map( (val, key) => {
                                return (
                                    <tr  className='tableRow'key={key}>
                                        <td>
                                            <div className="">
                                                <div className='topText'>{val.job_title}</div>
                                                <div className='bottomText'>{val.country}</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="">
                                                <div className='topText'>{val.company}</div>
                                                <div className='bottomText'>{val.industry}</div>
                                            </div>
                                        </td>
                                        <td>{val.years_of_experience}</td>
                                        <td><span className='genderText'>{val.gender}</span></td>
                                        <td>
                                            <div className="salaryNegotiationContainer">
                                                <div className="salaryNumber">${val.salary}</div>
                                                {
                                                    val.negotiation_percentage ?

                                                    <div className="percentIncrease"><span className='increasedPercentage'>&#8593; {val.negotiation_percentage}%</span></div>

                                                    : null
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <div className="tagsContainer">
                                                {
                                                    !val.negotiate_check ?
                                                    <div className="negotiateContainer"><span className="negotiateText">Negotiated Salary</span></div>
                                                    : null
                                                }
                                                <div className="workArrangementContainer"><span className='workArr'>{val.work_arrangement}</span></div>
                                                {
                                                    val.disability.map( (userDisability) => {
                                                        console.log(userDisability);
                                                        return (
                                                            <div className="disabilityContainer"><span className="disabilityText">{userDisability}</span></div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default UserSubmissionChart;