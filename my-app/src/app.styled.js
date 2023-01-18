import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    background-color: black;
    box-sizing: border-box;
}
`;

export const Title = styled.h1`
    color: red;
    text-align: center;
`;