import { Link } from 'react-router-dom';
import Logo from '../assets/salaryBandsLogo.png';
import LogoText from '../assets/salarybandstext.png';

function Header() {
    return (
        <nav>
            <ul>
                <li className='logo'>
                    <div className='logoImageContainer'>
                        <img src={Logo} alt="" />
                    </div>
                    <Link to={'/'}><img src={LogoText} alt=""/></Link>
                </li>
                <li className='headerLinks'>
                    <Link to={'/'}>Home</Link>
                </li>
                <li className='headerLinks'>
                    <Link>Salaries</Link>
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