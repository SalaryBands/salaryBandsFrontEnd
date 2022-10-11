import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav>
            <ul>
                <li className='logo'>
                    <Link>SalaryBands</Link>
                </li>
                <li>
                    <Link>Home</Link>
                </li>
                <li>
                    <Link>Salaries</Link>
                </li>
                <li>
                    <Link>Resources</Link>
                </li>
                <li>
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