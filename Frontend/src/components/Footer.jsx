import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer () {
    return ( 
    <>
    <div className='top-footer'>
        <ul className='foot-col1'>
            <li className='footer-header'>Cars</li>
            <li className='footer-link'>How to Buy</li>
            <li className='footer-link'>Sell Your Car</li>
            <li className='footer-link'>Finance & Insurance</li>
            <li className='footer-link'>Auctions & Events</li>
            <li className='footer-link'>Buyer & Seller Fees</li>
            <li className='footer-link'>Vehicle Sale Price History Tool</li>
            <li className='footer-link'>Shipping Costs</li>
        </ul>
        <ul className='foot-col2'>
            <li className='footer-header'>Finance & Insurance</li>
            <li className='footer-link'>Finance Homepage</li>
            <li className='footer-link'>Car & Personal Finance</li>
            <li className='footer-link'>Loan Calculator</li>
            <li className='footer-link'>Car Insurance</li>
            <li className='footer-link'>Mechanical Breakdown Insurance</li>
            <li className='footer-link'>General Insurances</li>
            <li className='footer-link'>Trucks Finance</li>
            <li className='footer-link'>Financial Information</li>
        </ul>
        <ul className='foot-col3'>
            <li className='footer-header'>Search For</li>
            <li className='footer-link'>Cars</li>
            <li className='footer-link'>Trucks & Machinery</li>
            <li className='footer-link'>Damaged & End of Life Cars</li>
            <li className='footer-link'>Boats & Marine</li>
            <li className='footer-link'>Motorcycles & Scooters</li>
            <li className='footer-link'>General Goods</li>
            <li className='footer-link'>Buses, Caravans & Motorhomes</li>
            <li className='footer-link'>Turners Auction Schedule</li>
        </ul>
        <ul className='foot-col4'>
            <li className='footer-header'> About Us</li>
            <li className='footer-link'>Overview</li>
            <li className='footer-link'>Careers at Turners</li>
            <li className='footer-link'>Terms and Conditions</li>
            <li className='footer-link'>Privacy Policy</li>
            <li className='footer-link'>Turners Live</li>
            <li className='footer-link'>The Good Oil Blog</li>
            <li className='footer-link'>Email Alerts</li>
            <li className='footer-link'>Contact Us</li>
        </ul>
    </div>

    <div className='bottom-footer'>
        <ul className='btm-foot-list'>
            <li className='btm-foot-item btm-foot-copyright'><p className='btm-foot-txt'>© Turners 2025</p></li> 
        </ul> 
        <ul className='rh-btm-foot-list'>   
            <li className='btm-foot-item'><FontAwesomeIcon icon={faHouse} className='footer-icon'/><p className='btm-foot-txt'>Branch Details</p></li> 
            <li className='btm-foot-item'><FontAwesomeIcon icon={faFacebookF} className='footer-icon' /><p className='btm-foot-txt'>Facebook</p></li> 
            <li className='btm-foot-item'><FontAwesomeIcon icon={faEnvelope} className='footer-icon' /><p className='btm-foot-txt'>Newsletter</p></li> 
            <li className='btm-foot-item'><FontAwesomeIcon icon={faEnvelope} className='footer-icon' /><p className='btm-foot-txt'>Email Alerts</p></li>
            <li className='btm-foot-item btm-final-item'><FontAwesomeIcon icon={faInstagram} className='footer-icon' /><p className='btm-foot-txt'>Instagram</p></li>
        </ul>
    </div>
    </> );
}

export default Footer ;