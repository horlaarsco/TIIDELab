import styled, { createGlobalStyle, css } from "styled-components";

const TiideTheme = css`
    :root{
        --c-color1: #C13147;
        --c-color2: #F4F2F2;
        --c-color3" #CBCBCB;
        --c-color4: #1D1D1D;
        --c-color5: #E7C941;
        --c-color6: #FF95A5;
        --c-color7: #434343;
        --c-color8: #000000;
    }
`;
export const BodyStyling = createGlobalStyle`
    ${TiideTheme}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }

    a{
        cursor: pointer;
    }

    html{
        scroll-behavior: smooth;
        -ms-text-size-adjust:100%;
        -webkit-text-size-adjust:100%
    }
`;
