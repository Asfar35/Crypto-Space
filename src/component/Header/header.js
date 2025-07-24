import './header.css';
import logo from '../../utils/logo.png';
import { Link, NavLink } from 'react-router';

export default function Header(){
    return (
        <>
            <header>
                <img src={logo} id='logo'/>
                <nav className='nav-bar'>
                    {/* <li id='home-li'><Link to="/">Home</Link></li>
                    <li id='features-li'><Link to="/features">Features</Link></li>
                    <li id='pricing-li'><Link to="/pricing">Pricing</Link></li>
                    <li id='blog-li'><Link to="/blog">Blog</Link></li> */}
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/features">Features</NavLink>
                    <NavLink to="/pricing">Pricing</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                </nav>
            </header>
        </>
    )
}