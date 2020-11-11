import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
    return(
        <Wrapper>
            <Title>Header</Title>
            <ButtonRack>
                {/* <CustomLink to="/">Home</CustomLink> */}
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/editor">New</CustomLink>
            </ButtonRack>
        </Wrapper>
    )
}

const ButtonRack = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

const Title = styled.div`
    display: flex;
    align-items: center;    
    justify-content: center;    
`;

const CustomLink = styled(Link)`
    margin-left: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    color: white;
    text-decoration: none;
    :hover {
        background-color: var(--primary-light)
    }
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 0.2fr 0.4fr 1fr;
    color: #fff;
    grid-area: header;
    background-color: var(--primary);
    height: 100%;
    width: 100%;
`;