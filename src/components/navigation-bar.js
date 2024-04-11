import React from 'react';
import "./component.css";
import { Nav, NavContainer, NavBody, NavText, NavButton, NavImg } from './styled-components';
import { search, notify, profile, green, hamburger } from '../assests/index';

function NavBar(){
    return(
        <Nav>
            <NavContainer>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <img src={green} style={{height: "50px", width: "50px"}} alt='search'/>
                    <div style={{marginTop: "14px", fontWeight: "600", fontFamily: "sans-serif", fontSize: "20px"}}>Green Web</div>
                </div>
                <NavBody>
                    <NavText>Home</NavText>
                    <NavText>Explore</NavText>
                    <NavText>Notifications</NavText>
                    <NavText>Messages</NavText>
                    <div style={{borderRadius: "8px", backgroundColor: "#1AE570", padding: "6px 20px", color: "#0D1C12", fontFamily: "sans-serif"}}>New Post</div>
                    <NavButton ><NavImg src={search} alt='search'/></NavButton>
                    <NavButton ><NavImg src={notify} alt='search'/></NavButton>
                    <NavButton ><NavImg src={profile} alt='search'/></NavButton>
                </NavBody>
            </NavContainer>
        </Nav>
    )
}  
export default NavBar;