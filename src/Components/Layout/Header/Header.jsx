import React from 'react';
import { Button, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Header.css'
const Header = () => {
    return (
        <>
            <div className="hero">
                <div className="hero-child" />
                <div className="hero-item" />
                <div className="hero-inner" />
                <b className="discover-a-place-container">
                    <p className="discover-a-place">Discover a place</p>
                    <p className="discover-a-place">you will love to live</p>
                </b>
                <div className="connect-with-more">
                    Connect with more than 75K renters looking for new homes using our
                    comprehensive marketing platform.
                </div>
                <div className="simone-hutsch-l8fyk9rs-ou-unsp-parent">
                    <img
                        className="simone-hutsch-l8fyk9rs-ou-unsp-icon"
                        alt=""
                        src="/building.png"
                    />
                    <img
                        className="simone-hutsch-l8fyk9rs-ou-unsp-icon1"
                        alt=""
                        src="/building2.png"
                    />
                </div>
                <div className="parent">
                    <b className="b">1500+</b>
                    <div className="property-ready">
                        <p className="discover-a-place">Property</p>
                        <p className="discover-a-place">Ready</p>
                    </div>
                </div>
                <div className="group">
                    <b className="b">500+</b>
                    <div className="happy-customers">
                        <p className="discover-a-place">Happy</p>
                        <p className="discover-a-place">Customers</p>
                    </div>
                </div>
                <div className="nav">
                    <div className="lefDiv">
                        <SearchIcon className='vector-icon'  />
                        <div className="im-an-owner-parent">
                            <div className="im-an-owner">I’m an owner</div>
                        
                             <KeyboardArrowDownIcon className="eparrow-down-icon" />
                        </div>
                        <div className="nav-child" />
                        <div className="register">Register</div>
                        

                    </div>

                    <MenuIcon className='pajamashamburger-icon' fontSize='large' />
                    


                    <div className="brand-parent">
                        <img className="brand-icon" alt="" src="/icons/brand.svg" />
                        <div className="bachelorscave">
                            <span>Bachelors</span>
                            <span className="cave">Cave</span>
                        </div>
                    </div>
                </div>
                <div className="rectangle-parent">
                    <div className="frame-child" />
                    <div className="search">Search</div>
                    <img
                        className="icsharp-search-icon"
                        alt=""
                        src="./public/icsharpsearch.svg"
                    />
                </div>
                {/* <div className="searchbar-pg">
                    <div className="city">City</div>
                    <div className="enter-collegestreet-name">Enter college/Street name...</div>
                    <div className="full-house">Full house</div>
                    <div className="pghostel">Pg/Hostel</div>
                    <div className="rooms">Rooms</div>
                    <div className="tenant-type">Tenant type</div>
                    <div className="searchbar-pg-child" />
                    <div className="searchbar-pg-item" />
                    <img className="searchbar-pg-inner" alt="" src="./public/line-9.svg" />
                    <img
                        className="icon-park-outlinedown"
                        alt=""
                        src="./public/iconparkoutlinedown.svg"
                    />
                    <img
                        className="icon-park-outlinedown1"
                        alt=""
                        src="./public/iconparkoutlinedown1.svg"
                    />
                    <img
                        className="icon-park-outlinedown2"
                        alt=""
                        src="./public/iconparkoutlinedown2.svg"
                    />
                    <img className="line-icon" alt="" src="./public/line-29.svg" />
                    <img className="vector-icon1" alt="" src="./public/vector1.svg" />
                    <img className="vector-icon2" alt="" src="./public/vector2.svg" />
                    <img className="vector-icon3" alt="" src="./public/vector3.svg" />
                    <img className="vector-icon4" alt="" src="./public/vector4.svg" />
                </div> */}
            </div>


        </>
    )
}

const styles = {
    paddLeft: {
        paddingLeft: "50px",
    },
}
export default Header