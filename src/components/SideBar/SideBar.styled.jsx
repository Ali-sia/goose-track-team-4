import styled from "styled-components";

import { greaterThan } from "helpers/breakpoints.styled";

import goose from './goose.png';
import goose2x from './goose@2x.png';
import gooseTablet from './gooseTablet.png';
import gooseTablet2x from './gooseTablet@2x.png';
import gooseLaptop from './gooseLaptop.png';
import gooseLaptop2x from './gooseLaptop@2x.png';
import {ReactComponent as CloseSVG} from './close.svg';

export const SideBarStyled = styled.aside`
    display: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;

    padding-top: 24px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;

    width: 225px;
    height: 100vh;

    background: ${({theme}) => theme.colors.bgcSideBarTheme};

    ${() => greaterThan("tablet", `
        width: 289px;

        padding-left: 32px;
        padding-right: 32px;
    `)};

    ${() => greaterThan("laptop", `
        display: flex;

        position: static;

        padding-top: 32px;    
        padding-left: 24px;
        padding-right: 24px;

        min-heigth: 100%;
    `)};
`;

export const WrapperStyled = styled.div`
    width: 100%;
`;

export const LogoBarStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    padding-bottom: 64px;

    ${() => greaterThan("tablet", `
        padding-bottom: 50px;
    `)};

    ${() => greaterThan("laptop", `
        padding-bottom: 32px;
        display: block;
    `)};
`;

export const LogoStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const GooseLogoStyled = styled.div`
    width: 36px;
    height: 35px;
    background-image: url(${goose});
    background-size: 36px 35px;

    @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
        background-image: url(${goose2x});
    };

    ${() => greaterThan("tablet", `
        width: 36px;
        height: 35px;
        background-image: url(${gooseTablet});
        background-size: 36px 35px;

        @media screen and (min-device-pixel-ratio: 2),
        screen and (min-resolution: 192dpi),
        screen and (min-resolution: 2dppx) {
            background-image: url(${gooseTablet2x});
        };
    `)};

    ${() => greaterThan("laptop", `
        width: 71px;
        height: 68px;
        background-image: url(${gooseLaptop});
        background-size: 71px 68px;

        @media screen and (min-device-pixel-ratio: 2),
        screen and (min-resolution: 192dpi),
        screen and (min-resolution: 2dppx) {
            background-image: url(${gooseLaptop2x});
        };
    `)};
`;

export const AppNameStyled = styled.p`
    padding-left: 6px;

    font-family: 'Coolvetica';
    font-weight: ${props => props.theme.fontWeights.normal};
    line-height: 1.38;
    color: ${props => props.theme.colors.textLogoTheme};
    text-shadow: ${props => props.theme.shadows.headerText};

    ${props => greaterThan("tablet", `
        font-size: ${props.theme.fontSizes.l};
        line-height: 1.33;
    `)};
    
    ${props => greaterThan("laptop", `
        padding-left: 10px;
        font-size: ${props.theme.fontSizes.logo};
    `)};
`;

export const ButtonStyled = styled.button`
    background-color: transparent;
    border: 0;
    padding: 0px;

    cursor: pointer;

    &:hover,
    &:focus {
        box-shadow: ${props => props.theme.shadows.loginBtn};
        border-radius: 50%;
    };

    ${props => greaterThan("laptop", `
        display: none;
    `)};
`

export const CloseSVGStyled = styled(CloseSVG)`
    display: block;
    width: 24px;
    height: 24px;
    color: ${props => props.theme.colors.textHeaderTheme};

    ${() => greaterThan("tablet", `
        width: 33px;
        height: 33px;
    `)};
`