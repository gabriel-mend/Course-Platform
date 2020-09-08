import styled from 'styled-components';

export const Container = styled.div`
    padding: 24px 32px;
    height: 100%;
    width: 100%;
`;

export const Bar = styled.div`
    width: 132px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #0C0B0B;
    border-radius: 24px;
`; 

export const Logo = styled.h1`
    font-family: "Baloo Bhai 2", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 102px;
    color: #fff;
`;

export const ButtonsContainer = styled.a`
    display: flex;
    flex-direction: column;
`;

export const ButtonLink = styled.a`
    width: 30px;
    height: 30px;
    margin-top: 60px;
    cursor: pointer;
    &:first-child {
        margin-top: 0px;  
    }
    & img {
        transition: all .2s;
    }
    & img:hover {
        transform: scale(1.1);
    }
`;

export const ExitButton = styled.a`
    border: 0px;
    background: transparent;
    margin-bottom: 40px;
    cursor: pointer;
`