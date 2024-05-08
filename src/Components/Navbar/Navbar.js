// import React, { useState } from 'react'
// import { Button } from './Button'
// import { Link } from 'react-router-dom'
// import './Navbar.css'
// import Dropdown from './Dropdown'

// const Navbar = () => {

//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);  
//   return (
//     <div>
//         <nav className='navbar'>
//             <div className='navbar logo'>
//                 {/* <a href='/' className='nav-logo'>
//                     Casinoble
//                 </a> */}
//                 <a className='navbar-logo' href='/'>Casinoble</a>
//             </div>
//             <div className='menu-icon' onClick={handleClick}>
//                 <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//             </div>
//         </nav>
//     </div>
//   )
// }

// export default Navbar

import React from 'react';
import './Navbar.css';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const { title, items } = this.props;
    return (
      <li className="nav-item dropdown" onClick={this.toggleDropdown}>
        <span className="dropdown-toggle"><a href="#">{title}</a></span>
        {this.state.isOpen && (
          <ul className="dropdown-menu">
            {items.map((item, index) => (
              <li key={index} className="dropdown-item">
                <a href={item.url}>{item.label}</a>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }
}

class Navbar extends React.Component {
  render() {
    const dropdownMenus = [
      { title: 'Casino', items: [
        { label: 'Best Online Casinos', url: '/bestonlinecasino' },
        { label: 'Best Payout Casinos', url: '/bestpayoutcasino' },
        { label: 'Mobile Casinos', url: '/mobilecasino' },
        { label: 'New Casinos', url: '/newcasino' }
      ]},
      { title: 'Betting', items: [
        { label: 'Best e-Sports Betting Sites', url: '/esport' },
        { label: 'Best Sport Betting Sites', url: '/sportsbetting' },
        { label: 'Free Betting Sites', url: '/freebetting' }
      ]},
      { title: 'Games', items: [
        { label: 'Baccarat', url: '/baccarat' },
        { label: 'Blackjack', url: '/blackjack' },
        { label: 'Slots', url: '/slots' }
      ]},
      { title: 'Banking', items: [
        { label: 'Interac', url: '/interac' },
        { label: 'Apple Pay', url: '/applepay' },
        { label: 'Google Pay', url: '/googlepay' },
        { label: 'Mastercard', url: '/mastercard' }
      ]},
      { title: 'Bonuses', items: [
        { label: 'Free Spin', url: '/freespin' },
        { label: 'No Deposit Bonuses', url: '/nodeposit' },
        { label: 'Cashbacks', url: '/cashback' }
      ]}
    ];

    return (
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="logo-link">
            <img src="your-logo-url" alt="logo" className="logo" />
          </a>
        </div>
        <div className="navbar-center">
          <ul className="nav-list">
            {dropdownMenus.map((menu, index) => (
              <Dropdown key={index} title={menu.title} items={menu.items} />
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

