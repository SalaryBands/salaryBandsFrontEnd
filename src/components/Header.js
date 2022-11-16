import {useState} from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../assets/salaryBandsLogo.png';
import { GiHamburgerMenu } from 'react-icons/gi'


function Header() {

    const [open, setOpen] = useState(false)

    const handleClick = function () {
        setOpen(!open)
    }

    let activeStyle = {
        textDecortation: 'none',
        color: '#0E7090'
    }
    return (
        <nav>
            <ul className='desktopNav'>
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

            <ul className='mobileNav'>
                <li className='logo'>
                    <NavLink to={'/'} className='logoText'>salarybands</NavLink>
                    <div className='logoImageContainer'>
                        <img src={Logo} alt="" />
                    </div>
                </li>
                
                <li className='hamburgerContainer'>
                    <button className='hamburgerMenu' onClick={handleClick}><GiHamburgerMenu /></button>
                </li>

                {
                    open ? 
                    <div className="slideOutNav">
                        <ul>
                                <li className='headerLinks'>
                                    <NavLink to={'/AllData'}
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }
                                        onClick={handleClick}
                                    >Salaries</NavLink>
                                </li>
                                <li className='headerLinks'>
                                    <NavLink to={'/TipsAndAdvice'}
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }
                                        onClick={handleClick}
                                    >Tips & Advice</NavLink>
                                </li>
                                <li className='headerLinks'>
                                    <NavLink
                                        to={'/Resources'}
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }
                                        onClick={handleClick}
                                    >Resources</NavLink>
                                </li>
                                <li className='headerLinks'>
                                    <NavLink
                                        to={'AboutUs'}
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }
                                        onClick={handleClick}
                                    >About Us</NavLink>
                                </li>
                                <li className='salarySubmit'>
                                    <NavLink to={'/EmailVerification'} onClick={handleClick}>
                                        <button type="button" className='salaryButton'>Submit Your Salary</button>
                                    </NavLink>
                                </li>
                        </ul>
                    </div> 

                    : null
                }
            </ul>
        </nav>
    )

}

export default Header; 