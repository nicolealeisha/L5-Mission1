import './HeaderNav.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function HeaderNav () {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
      setHamburgerOpen(!hamburgerOpen)
    }  

    return ( 
        <>
        <header>
          <img className='header-img' src='https://content.tgstatic.co.nz/webassets/contentassets/3e15c8546917474ca0a150b18e9fd64e/turnerscars_logo_1line_horz_true-rgb-desktop.png' alt='logo' />
          
          <nav>
            <div className={hamburgerOpen ? 'hamburger-open' : 'hamburger'} onClick={toggleHamburger}>
                <nav className="hamburger">
                    <div className="burger"></div>
                    <div className="burger"></div>
                    <div className="burger"></div>
                </nav>
            </div>
          
            <ul className='pri-menu'>
              <li className='menu-btn'><FontAwesomeIcon icon={faUser} /><p className='menu-btn-txt'>Login or Register</p></li>
              <li className='menu-btn'><FontAwesomeIcon icon={faPhone} /><p className='menu-btn-txt'>0800 887 637</p></li>
              <li className='menu-btn'><FontAwesomeIcon icon={faLocationDot} /><p className='menu-btn-txt'>Find Us</p></li>
            </ul>
            <div className={hamburgerOpen ? 'nav-btns-open' : 'nav-btns'}>
            <ul className='extended-nav-list'>
                <li className='extended-nav-list-items'>Find a Car</li>
                <li className='extended-nav-list-items'>How to Buy</li>
                <li className='extended-nav-list-items'>Sell your Car</li>
                <li className='extended-nav-list-items'>Finance & Insurance</li>
                <li className='extended-nav-list-items'>Auctions</li>
                <li className='extended-nav-list-items'>Services & Info</li>
            </ul>
            </div> 
          </nav>
      </header>

        <div className='secondary-header'>
            <ul className='nav-left-list'>
                <li>Find a Car</li>
                <li>How to Buy</li>
                <li>Sell your Car</li>
                <li>Finance & Insurance</li>
            </ul>
            <ul className='nav-right-list'>
                <li>Auctions</li>
                <li>Services & Info</li>
            </ul>
        </div>
      </>
     );
}

export default HeaderNav ;