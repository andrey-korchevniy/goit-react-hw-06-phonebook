import styled from "styled-components";
import { Field, ErrorMessage } from 'formik';

export const Label = styled.label`
    display: flex;
    position: relative;
    align-items: center;
    height: 40px;
    width: 550px;
    padding-bottom: 10px;
    margin: 0 40px;
    color: #5f6368;
    fill: #5f6368;

    :focus, :active. :hover {
        fill: blue;
    }
`
export const InputField = styled(Field)`
    display: block;
    height: 24px;
    width: 100%;
    margin: 0 30px;
    font-size: 14px;
    font-weight: 400;
    border: none;
    border-bottom: 1px solid lightgrey;
    outline:none;

    :active, :focus {
        border-bottom: 2px solid blue;
        fill: blue;
        color: blue;
    }
`
export const ErrorInput = styled(ErrorMessage)`
    position: absolute;
    bottom: 10px;
    right: -300px;
    width: 300px;
    font-size: 14px;
    font-weight: 400;
`
