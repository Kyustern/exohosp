import React from 'react'
import styled from 'styled-components';

export const FourOFour: React.FC = () => {
    return(
        <Wrapper>
            Cette route n'existe pas :/
        </Wrapper>
    )
}

const Wrapper = styled.div`
    grid-area: appbody;
    height: 100%;
    width: 100%;
    background-color: var(--secondary-dark);
`;