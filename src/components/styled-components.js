import styled from 'styled-components';

export const Nav = styled.div`
    display: flex;
    top: 0px;
    z-index: 10;
    position : sticky;
    justify-content : center;
    align-items : center;
    -webkit-box-align : center;
    -webkit-box-pack : center;
    font-size : 1rem;
    height : 65px;
    margin-top : -7px;
    background-color : white;
`;

export const NavContainer = styled.div`
    display : flex;
    width : 100%;
    height : 40px;
    justify-content : space-between;
    align-items : center;
    padding : 0 24px;
    z-index: 1;
    position : sticky;
    top : 0;
    margin-top : -9px;
`;

export const NavHam = styled.img`
    display : none;
    height : 50px;
    width : 50px;

    @media screen and (max-width: 960px) {
        display: flex;
    }
`;


export const NavButton = styled.div`
    width : 40px;
    height : 40px;
    background-color : #E5E8EB;
    border-radius : 8px;
    border-color : transparent;
`;

export const NavBody = styled.div`
    display : flex;
    width : 660px;
    justify-content : space-between;
    align-items : center;
    flex-wrap : wrap;
    padding : 0 24px;

    @media screen and (max-width: 960px) {
        display: none;
    }
`;

export const NavText = styled.div`
    font-family: sans-serif;
`;

export const NavImg = styled.img`
    height : 20px;
    width : 20px;
    margin : 10px;
`;