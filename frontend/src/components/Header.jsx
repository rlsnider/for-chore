import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className="header">
        <div className="logo">
           <Link to='/'>FOR-CHORE</Link>
        </div>
        <ul>
            <li>
                <Link to='/login'>
                    <faSignInAlt /> Login
                </Link>
            </li>
            <li>
                <Link to='/register'>
                    <faUser /> Register
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Header