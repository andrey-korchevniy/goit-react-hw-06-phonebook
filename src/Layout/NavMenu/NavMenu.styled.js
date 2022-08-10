import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Menu = styled.div`
    grid-row-start: 1;
    grid-row-end: 3;
`
export const MenuItems = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`
export const StyledLink = styled(NavLink)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 10px 26px;
    color: #202124;
    width: 200px;

    &.active {
        background-color: #e8f0fe;
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
        color: #1967d2;
        fill: #1967d2;
    }
`
export const P = styled.p`
    margin: 0 0 0 20px;
`
export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    width: 168px;
    font-size: 14px;
`