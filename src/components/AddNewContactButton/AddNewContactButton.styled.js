import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Title = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: #3c4043;
    margin-left: 15px;
    letter-spacing: 0.25px;
`
export const AddContactBtn = styled(NavLink)`
    display: inline-flex;
    margin: 23px 0;
    border: 0;
    background-color: #fff;
    align-items: center;
    border-radius: 24px;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
    box-sizing: border-box;
    cursor: pointer;
    height: 48px;
    justify-content: center;
    padding: 2px 24px;
    transition: box-shadow 280ms cubic-bezier(0.4,0,0.2,1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0,0,0.2,1);
    transition-property: box-shadow, background-color, transform;
    transition-duration: 24ms, 100ms, 270ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: 0s, 30ms, 0ms;
    
    :hover {
        background-color: #F6FAFE;
    }

    :active {
        border-color: rgb(66, 133, 244);
        border-width: 2px;
        border-style: solid;
    }
`