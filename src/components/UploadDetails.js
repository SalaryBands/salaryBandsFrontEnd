import { Link } from 'react-router-dom';


function UploadDetails () {
    return (
        <header class='salaryBandsHero'>
            <div className="heroTextAndImageContainer">
                <div className="heroTextContainer">
                    <h1>Bridge the tech industry pay gap, one data point at a time</h1>
                    <h4>SalaryBands is a free, open-source database of salary data for roles in tech. We make it easy as possible for you to find the market data by demographics.</h4>
                    <div className="heroLinks">
                        <Link>Submit Your Salary</Link>
                        <Link>Explore All Data</Link>
                    </div>
                </div>
                <div className="heroImgContainer">
                    <div className="ImgOne">

                    </div>
                    
                </div>
            </div>

        </header>
    )
}

export default UploadDetails