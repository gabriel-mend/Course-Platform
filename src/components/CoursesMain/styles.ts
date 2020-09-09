import styled from 'styled-components';

export const Container = styled.main`
    
`;

export const Title = styled.h2`
    font-size: 24px;
    line-height: 38px;
    color: #0C0B0B;
`;

export const TabsContainer = styled.main`
    .react-tabs__tab--selected {
        opacity: 1 !important;
    }
    .react-tabs__tab:first-child {
        padding-left: 0px;
    }
    .react-tabs__tab {
        font-family:"Baloo Bhai 2";
        font-size: 16px;
        line-height: 26px;
        color: #0C0B0B;
        opacity: 0.3;
        
    }

    .react-tabs__tab-list,
    .react-tabs__tab--selected {
        border: 0 !important;
        transition: .2s all; 
        
    }
`;

export const TabContainer = styled.div`
    height: 100%;
    max-height: 400px;
    padding-right: 6px;
    overflow-y: scroll;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
        width: 2px;
        
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: #0C0B0B;
    }
`;