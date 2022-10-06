import { Component } from 'react';
import { MenuItems } from '../menu/MenuItems';
import './NavbarStyles.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                {/* logo */}
                <h1 className="navbar-logo">Trippy</h1>

                {/* menu */}
                <ul className="nav-menu">
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </a>
                            </li>
                        );
                    })}
                    <button>Sign Up</button>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
