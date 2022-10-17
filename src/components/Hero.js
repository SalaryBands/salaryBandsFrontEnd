import {Link} from 'react-router-dom';

function Hero () {
    return (
        <header>
            <div className="wrapper">
                <div className="heroContainer">
                    <div className="heroTextContainer">
                        <h1>Bridge the tech industry pay gap, one data point at a time</h1>
                        <h4>SalaryBands is a free, open-source database of salary data for roles in tech. We make it easy as possible for you to find the market data by demographics.</h4>
                        <div className="buttonLinksContainer">
                            <Link to={'/EmailVerification'} className='heroSubmitSalary'>Submit Your Salary</Link>
                            <Link className='heroExploreData'>Explore All Data</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero;