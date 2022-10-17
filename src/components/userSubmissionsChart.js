import axios from 'axios';
import {useState, useEffect} from 'react';

function UserSubmissionChart () {

    const [userSubmissionData, setUserSubmissionData] = useState([])

    useEffect( () => {
        axios({
            method: 'get',
            url: 'https://salarybandsapi.herokuapp.com/contributions'
        }).then( (apiData) => {
            setUserSubmissionData(apiData.data)
        })
    }, [])
    
    console.log(userSubmissionData);
    return (
        <section className='userSubmissionChartContainer'>
            <div className="wrapper">
                <div className="userSubmissionTextContainer">
                    <h4>Explore all data</h4>
                    <h2>Explore all data below</h2>
                    <p>SalaryBands is here to help you figure out how to get paid what you're worth.</p>
                </div>  

                <div className="userSubmissionTable">
                    <table>
                        <thead>
                            <tr className='tableHeadings'>
                                <th>Title/Position</th>
                                <th>Company</th>
                                <th>YoE</th>
                                <th>Compensation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userSubmissionData.map( (val, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{val.job_title}</td>
                                        <td>{val.company}</td>
                                        <td>{val.years_of_experience}</td>
                                        <td>{val.salary}</td>
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