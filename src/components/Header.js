import { NavLink } from 'react-router-dom';
import Logo from '../assets/salaryBandsLogo.png';
import LogoText from '../assets/salarybandstext.png';

function Header() {

    let activeStyle = {
        textDecortation: 'none',
        color: '#0E7090'
    }
    return (
        <nav>
            <ul>
                <li className='logo'>
                    <NavLink to={'/'} className='logoText'>salarybands</NavLink>
                    <div className='logoImageContainer'>
                        <img src={Logo} alt="" />
                    </div>
                </li>
                <li className='headerLinks'>
                    <NavLink to={'/AllData'}
                    style={({isActive}) => 
                    isActive ? activeStyle : undefined
                    }
                    >Salaries</NavLink>
                </li>
                <li className='headerLinks'>
                    <NavLink to={'/TipsAndAdvice'}
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                    >Tips & Advice</NavLink>
                </li>
                <li className='headerLinks'>
                    <NavLink
                    to={'/Resources'}
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                    >Resources</NavLink>
                </li>
                <li className='headerLinks'>
                    <NavLink
                    to={'AboutUs'}
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                    >About Us</NavLink>
                </li>
                <li className='salarySubmit'>
                    <NavLink to={'/EmailVerification'}>
                        <button type="button" className='salaryButton'>Submit Your Salary</button>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )

}

export default Header; 