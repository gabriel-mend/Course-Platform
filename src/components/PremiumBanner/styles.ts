import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F5F5F7;
    border-radius: 14px;
    padding: 23px;

    & div {
        display: flex;
        flex-direction: column;
        color: #0C0B0B;
    }

    & div h2 {
        font-size: 24px;
        line-height: 38px;
    }

    & div span {
        font-size: 14px;
        line-height: 24px;
    }

    & div button {
        width: 120px;
        height: 40px;
        background: #0C0B0B;
        border-radius: 8px;
        margin-top: 24px;
        outline: none;
        border: none;
        color: #fff;
    }
`;
