import React, { useState } from 'react';
import "./component.css";
import { useNavigate } from 'react-router-dom';
import { Nav, NavContainer, NavBody, NavText, NavButton, NavImg, NavHam, MobileList } from './styled-components';
import { search, notify, profile, green, hamburger } from '../assests/index';

function NavBar(){
    let navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleNavClick = (link) => () => {
        navigate(link);
    }
    const handleHamClick = () => {
        setOpen(!open);
    }

    const handleHamNav = (link) => () => {
        setOpen(!open);
        navigate(link);
    }
    return(
        <Nav>
            <NavContainer>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <img src={green} style={{height: "50px", width: "50px"}} alt='green'/>
                    <div style={{marginTop: "14px", fontWeight: "600", fontFamily: "sans-serif", fontSize: "20px"}}>Green Web</div>
                </div>
                <div>
                    <NavHam src={hamburger} alt='hamburger' onClick={() => handleHamClick()}/>
                </div>
                <NavBody>
                    <NavText onClick={handleNavClick("/")} >Home</NavText>
                    <NavText onClick={handleNavClick("/Explore")}>Explore</NavText>
                    <NavText onClick={handleNavClick("/Notification")}>Notifications</NavText>
                    <NavText onClick={handleNavClick("/Messages")}>Messages</NavText>
                    <div style={{borderRadius: "8px", backgroundColor: "#1AE570", padding: "6px 20px", color: "#0D1C12", fontFamily: "sans-serif"}}>New Post</div>
                    <NavButton ><NavImg src={search} alt='search'/></NavButton>
                    <NavButton ><NavImg src={notify} alt='nofication'/></NavButton>
                    <NavButton ><NavImg src={profile} alt='profile'/></NavButton>
                </NavBody>
                {
                    open && 
                    <MobileList isOpen={open}>
                        <div onClick={handleHamNav("/")} >Home</div>
                        <div onClick={handleHamNav("/Explore")}>Explore</div>
                        <div onClick={handleHamNav("/Notification")}>Notifications</div>
                        <div onClick={handleHamNav("/Messages")}>Messages</div>
                        <div onClick={handleHamNav("/")}>New Post</div>
                        <div onClick={handleHamNav("/")}>Announcements</div>
                        <div onClick={handleHamNav("/")}>Profile</div>
                    </MobileList>
                }
            </NavContainer>
        </Nav>
    )
}  
export default NavBar;