import React, {Component} from 'react';
import {navItems} from './NavItems'
import './NavBar.css'


class Navbar extends Component{
    state = {clicked: false}

    handleClick = (e) = {
        this:setState({clicked: !this.state.clicked})
    }


    render() {
        return (
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>Clueless<i className='fab fa-react'></i></h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' :'nav-menu'}>
                    {menuItems.map((item,index) => {
                        return(
                            <li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>
                            )
                        })}

                    
                </ul>
            </nav>
        )
    }
}

export default Navbar