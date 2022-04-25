import styled from 'styled-components';

export const Container = styled.section<{selected: boolean}>`
    display: flex;
    border: 2px solid ${props => props.selected ? '#25cd89' :'#16195c'};
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 15px;
    align-items: center;
    cursor: pointer;

    &:hover{
        border: 2px solid ${props => props.selected ? '#25cd89' : '#496459' };
    }
`;

export const Icon = styled.span`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #191a59;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
`;

export const Info = styled.div`
    flex: 1;
    margin-left: 20px;
`;

export const Title = styled.h1`
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 10px; 
`;

export const Description = styled.p`
    font-size: 14px;
    color: #88b8d4;
`;
