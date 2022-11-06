import { Link } from 'react-router-dom';
import Logo from '../assets/salaryBandsLogo.png';
import LogoText from '../assets/salarybandstext.png';

function Header() {
    return (
        <nav>
            <ul>
                <li className='logo'>
                    <Link to={'/'} className='logoText'>salarybands</Link>
                    <div className='logoImageContainer'>
                        <img src={Logo} alt="" />
                    </div>
                </li>
                <li className='headerLinks'>
                    <Link to={'/SalaryData'}>Salaries</Link>
                </li>
                <li className='headerLinks'>
                    <Link to={'/TipsAndAdvice'}>Tips & Advice</Link>
                </li>
                <li className='headerLinks'>
                    <Link>Resources</Link>
                </li>
                <li className='headerLinks'>
                    <Link>About Us</Link>
                </li>
                <li className='salarySubmit'>
                    <Link to={'/EmailVerification'}>
                        <button type="button" className='salaryButton'>Submit Your Salary</button>
                    </Link>
                </li>
            </ul>
        </nav>
    )

}

export default Header; 