import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
    return (
        <nav>
            <ul>
                <li className='logo'>
                    <div className='logoImageContainer'>
                        <img src={logo} alt="" />
                    </div>
                    <Link>SalaryBands</Link>
                </li>
                <li className='headerLinks'>
                    <Link>Home</Link>
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