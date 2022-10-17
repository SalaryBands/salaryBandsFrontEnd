import axios from 'axios';
import {useState, useEffect} from 'react';

function UserSubmissionChart () {

    const [userSubmissionData, setUserSubmissionData] = useState[[]]

    useEffect( () => {
        axios({
            method: 'get',
            url: 'https://salarybandsapi.herokuapp.com/contributions'
        }).then( (apiData) => {
            console.log(apiData)
        })
    })
    return (
        <section className='userSubmissionChartContainer'>
            <div className="wrapper">
                <div className="userSubmissionTextContainer">
                    <h4>Explore all data</h4>
                    <h2>Explore all data below</h2>
                    <p>SalaryBands is here to help you figure out how to get paid what you're worth.</p>
                </div>  

                <div className="userSubmissionTable">
                    
                </div>
            </div>
        </section>
    )
}

export default UserSubmissionChart;