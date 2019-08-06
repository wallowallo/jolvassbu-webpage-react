import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const InfoContainer = styled.div `
    position: absolute;
    top: 60%;
    width: 100%;
    background-color: white;
    border-top: 2px solid lightblue;
    background-image: linear-gradient(lightblue 0%, white 5%);

    @media only screen and (max-width: 1000px) {
        top: 45%;
    }

    @media only screen and (max-width: 800px) {
        top: 35%;
    }

    @media only screen and (max-width: 600px) {
        top: 25%;
    }
`;

export const CardContentH2 = styled.h2 `
    text-align: center;
    margin-bottom: 0.5rem;
    margin-top: 0;
`;

export const SliderContainer = styled.div `
    width: 100%;
`;

export const CardContainer = styled.div `
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-evenly;
    width: 80%;
    margin: 5rem 10%;
    height: 90%;

    @media only screen and (max-width: 600px) {
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
    }
`;

export const NavMenuContainer = css`
    display: inline-block;
    text-align: center;
    height: 2.1rem;
    margin-top: 1rem;
    border-right: 2px solid grey;
`;

export const ListItemSpan = styled.span `
    margin-left: 0.5rem;
`;

export const Image = styled.img `
    width: 100%;
`;

export const commonCardStyling = css`
    width: 30%;
    margin-left: 3rem;
    margin-bottom: 3rem;
    min-width: 25rem;
    box-shadow: 0 2px 2px 0 lightblue, 0 3px 5px 0 lightblue !important;

    @media only screen and (min-width: 1620px) {
        :nth-child(3n+1) {
            margin-left: 0;
        }
    }

    @media only screen and (max-width: 600px) {
        margin-left: 0;
    }
`;

export const commonLargeCardStyling = css`
    width: 50%;
    margin: 5rem 25%;
    min-width: 27rem;
    box-shadow: 0 2px 2px 0 lightblue, 0 3px 5px 0 lightblue !important;

    @media only screen and (max-width: 1000px) {
        margin: 5rem auto;
    }
`;

