import styled from 'styled-components';

export const Container = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #F5F5F7;
    border-radius: 14px;
    padding-right: 24px;
    padding-left: 5px;

    & .progress {
        width: 40px;
        height: 40px;
    }
`;

export const CourseLogo = styled.div`
    width: 64px;
    height: 64px;
    background: #FFFFFF;
    border-radius: 12px;
`; 

export const Title = styled.h3`
    font-size: 16px;
    line-height: 26px;
    color: #0C0B0B;
`;

export const Author = styled.span`
    font-size: 13px;
    line-height: 15px;
    color: #0C0B0B;
`;

export const Button = styled.button`
    width: 120px;
    height: 40px;
    background: #0C0B0B;
    color: #fff;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    font-weight: bold;
    font-size: 13px;
    line-height: 15px;
`; 
