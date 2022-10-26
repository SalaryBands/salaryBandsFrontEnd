import {Link} from 'react-router-dom';
import ImgOne from '../assets/topLeft.png';
import ImgTwo from '../assets/topRight.png';
import ImgThree from '../assets/bottomLeft.png';
import ImgFour from '../assets/bottomMiddle.png';
import ImgFive from '../assets/bottomRight.png';

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
                    <div className="heroImageContainer">
                        <div className="firstLineImages">
                            <div className="imgOne"><img src={ImgOne} alt=""/></div>
                            <div className="imgTwo"><img src={ImgTwo} alt="" /></div>
                        </div>
                        <div className="secondLineImages">
                            <div className="imgThree"><img src={ImgThree} alt="" /></div>
                            <div className="imgFour"><img src={ImgFour} alt="" /></div>
                            <div className="imgFive"><img src={ImgFive} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero;