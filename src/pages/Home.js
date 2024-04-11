import React from 'react';
import { sample, women } from '../assests/index';

function Home(){
    return(
    <div>
        <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
            <img src={sample} style={{width: "70%", height: "100%", borderRadius: "8px", margin: "20px"}} alt='tree'/>
            <img src={women} style={{width: "70%", height: "100%", borderRadius: "8px", margin: "20px"}} alt='tree'/>
            {/* <div style={{zIndex: 10}}>
                <div style={{width: "70%", zIndex: "10", color: "whitesmoke", fontSize: "48px", fontFamily: "sans-serif"}}>Join the substainable social media platform</div>
            </div> */}
            <div>
                <h2 style={{fontFamily: "sans-serif"}}>Meet Some of the Users</h2>
            </div>
        </div>
    </div>
    ) 
}
export default Home;