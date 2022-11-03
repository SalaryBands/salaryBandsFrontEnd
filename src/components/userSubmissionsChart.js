import SalaryData from '../components/SalaryData';

function UserSubmissionChart () {

    return (
        <section className='userSubmissionChartContainer'>
            <div className="wrapper">
                <div className="userSubmissionTextContainer">
                    <h4>Explore all data</h4>
                    <h2>Explore all data below</h2>
                    <p>SalaryBands is here to help you figure out how to get paid what you're worth.</p>
                </div>  
            </div>

            <SalaryData />
        </section>
    )
}

export default UserSubmissionChart;