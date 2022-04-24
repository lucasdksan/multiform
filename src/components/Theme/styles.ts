import styled from 'styled-components';

export const Container = styled.main`
    background-color: #02044A;
    color: #FFFFFF;
    min-height: 100vh;
`;

export const Area = styled.section`
    margin: auto;
    max-width: 980px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Steps = styled.div`
    flex: 1;
    display: flex;
`;

export const SideBar = styled.aside`
    width: 250px;
    border-right: 1px solid #16195c;
`;

export const Page = styled.div`
    flex: 1;
    padding-left: 40px;
    padding-top: 40px;
`;
