import styled from 'styled-components';

export const Container = styled.section`
    margin: 30px 0;
    cursor: pointer;
    
    a {
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`;

export const Info = styled.div`
    flex: 1;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.span`
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 15px;
    color: #fff;
`;

export const Description = styled.span`
    text-align: right;
    font-size: 13px;
    color: #b8b8d4;
`;

export const InfoArea = styled.div<{active: boolean}>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.active ? '#25cd89' : '#494a7c'};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Point = styled.div<{active: boolean}>`
    width: 6px;
    height: 6px;
    border: 3px solid ${props => props.active ? '#25cd89' : '#494a7c'};
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -3px;
    background-color: #02044a;
`;

export const Image = styled.img`
    width: 24px;
    height: 24px;
`;