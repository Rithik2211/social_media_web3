import React from 'react';
import "./component.css";
import { Nav, NavContainer, NavBody, NavText } from './styled-components';
import { search, notify, profile, green } from '../assests/index';

function NavBar(){
    return(
        <Nav>
            <NavContainer>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <img src={green} style={{height: "50px", width: "50px"}} alt='search'/>
                    <div style={{marginTop: "16px", fontWeight: "600", fontFamily: "sans-serif"}}>Green Web</div>
                </div>
                <NavBody>
                    <NavText>Home</NavText>
                    <NavText>Explore</NavText>
                    <NavText>Notifications</NavText>
                    <NavText>Messages</NavText>
                    <div style={{borderRadius: "8px", backgroundColor: "#1AE570", padding: "6px 20px", color: "#0D1C12", fontFamily: "sans-serif"}}>New Post</div>
                    <button  className='w-[40px] h-[40px] bg-[#E5E8EB]' style={{ borderRadius: "8px", borderColor: "transparent"}}><img src={search} style={{height: "20px", width: "20px"}} alt='search'/></button>
                    <button className='w-[40px] h-[40px] bg-[#E5E8EB]' style={{borderRadius: "8px", borderColor: "transparent"}}><img src={notify} style={{height: "20px", width: "20px"}} alt='search'/></button>
                    <button className='w-[40px] h-[40px] bg-[#E5E8EB]' style={{borderRadius: "8px", borderColor: "transparent"}}><img src={profile} style={{height: "20px", width: "20px"}} alt='search'/></button>
                </NavBody>
            </NavContainer>
        </Nav>
    )
}  
export default NavBar;