import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin: 25px 0 40px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
`;

export const StatsBox = styled.div`
    height: 100px;
    width: 100%;
    background: #F5F5F7;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;

    & p {
        font-size: 14px;
        line-height: 24px;
    }
`;

export const StatsNumber = styled.div`
    font-family: "Baloo Bhai 2";
    font-size: 64px;
    margin-right: 10px;
    color: #0C0B0B;
`;

