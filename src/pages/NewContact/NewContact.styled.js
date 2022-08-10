import styled from "styled-components";

export const Button = styled.button`
    display: inline-block;
    box-sizing: border-box;
    height: 36px;
    width: 121px;
    padding: 0 24px;
    margin-left: calc(100% - 200px);
    outline: none;
    border: none;
    border-radius: 4px;
    line-height: 16px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    background-color: rgba(26,115,232);
    color: #ffffff;
    cursor: pointer;
    user-select: none;
    appearance: none;
    touch-action: manipulation;
    vertical-align: top;
    transition: box-shadow 0.2s;

    :focus-visible {
        border: 1px solid #4c51f9;
        outline: none;
    }
    
    :hover {
        transition: all 0.2s;
        box-shadow: 0 7px 14px rgb(65 132 144 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
    }
    
    :active {
        background-color: #808080;
    }

    :disabled {
        background-color: #eee;
        border-color: #eee;
        color: #444;
        cursor: not-allowed;
    }
`

