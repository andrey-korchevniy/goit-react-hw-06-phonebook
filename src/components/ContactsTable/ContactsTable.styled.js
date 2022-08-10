import styled from "styled-components";

export const Table = styled.table`
    width: calc(100% / 4 * 3);
    overflow: hidden;
    border: none;
    border-spacing: 1px;

    text-align: left;
`
export const HeadRow = styled.thead`
    height: 49px;
    padding: 4px 4px 4px 10px;
    color: #5f6368;
    font-size: 14px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
`
export const HeadCell = styled.th`
    width: calc(100% / 6);
    font-weight: 400;
`