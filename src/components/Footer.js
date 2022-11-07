import { Link } from 'react-router-dom';
import Logo from '../assets/salaryBandsLogo.png';

function Footer() {
    return (
        <footer>
            <div className="wrapper">
                <div className="footerNavNewsletterContainer">
                    <div className="logoAndNavContainer">
                        <div className="logoContainer">
                            <img src={Logo} alt="" />
                            <a className='footerSalary' href="">salarybands</a>
                        </div>
                        <div className="footerNavContainer">
                            <nav className='footerNav'>
                                <ul>
                                    <li>
                                        <Link to={'/'} className='footerNavLinks'>Home</Link>
                                    </li>
                                    <li>
                                        <Link to={'/AllData'} className='footerNavLinks'>Salaries</Link>
                                    </li>
                                    <li>
                                        <Link to={'TipsAndAdvice'} className='footerNavLinks'>Tips & Advice</Link>
                                    </li>
                                    <li>
                                        <Link className='footerNavLinks'>Resources</Link>
                                    </li>
                                    <li>
                                        <Link className='footerNavLinks'>About Us</Link>
                                    </li>
                                    <li>
                                        <Link className='footerNavLinks'>Privacy</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="newsletterContainer">
                        <div className="signUp">
                            <label htmlFor="newsletter">Stay up to date</label>
                            <input type="email" name="newsletter" id="newsletter" placeholder='Enter your email' />
                            <button type="submit">Subscribe</button>
                        </div>
                    </div>
                </div>
                <hr className='footerBreak'/>
                <div className="copyrightContainer">
                    <div className="copyright">
                        2022 SalaryBands. All rights reserved.
                    </div>
                    <div className="privacyTerms">
                        <ul>
                            <li>
                                <Link className='footerPrivacyLinks'>Terms</Link>
                            </li>
                            <li>
                                <Link className='footerPrivacyLinks'>Privacy</Link>
                            </li>
                            <li>
                                <Link className='footerPrivacyLinks'>Cookies</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;