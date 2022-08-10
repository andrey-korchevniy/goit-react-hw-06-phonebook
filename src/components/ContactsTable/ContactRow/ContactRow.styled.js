import styled from "styled-components";

export const Row = styled.tr`
    height: 56px;

    :hover {
        background-color: #F5F5F5;
    }
`
export const Cell = styled.td`
    color: #202124;
    font-size: 14px;
    padding-top: 4px;
    padding-bottom: 4px;
    text-align: left;
`
export const CellAmount = styled(Cell)`
    text-align: left;
`
export const DeleteBtn = styled.button`
    height: 40px;
    width: 40px;
    margin-top: 7px;
    border: 0;
    background-color: transparent;
    border-radius: 50%;

    :focus, :hover {
        background-color: rgba(60,64,67,.1);
    }
`
export const DeleteForeverBtn = styled.button`
    display: inline-block;
    width: 120px;
    height: 36px;
    border: 0;
    background-color: transparent;
    color: blue;
    font-weight: 600;
    border-radius: 5px;
    outline: none !important;
    margin-top: 7px;

    :hover, :focus, :active {
        background-color: lightgray;
    }
`
export const CellAction = styled(Cell)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
