import React from 'react'
import styled from 'styled-components';

interface Props {
    done: boolean
    setDone: React.Dispatch<React.SetStateAction<boolean>>
}

export const Switch: React.FC<Props> = ({done, setDone}) => {
    return(
        <Wrapper onClick={() => setDone(!done)}>
            { done ? 
            "✅" 
            :
            "🔴"
            }
        </Wrapper>
    )
}

const Wrapper = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    color: white;
    background-color: var(--primary-light);
    font-size: calc(15px + 2vmin);
    margin-right: 0.5em;
    border: none;
    height: 2em;
    width: fit-content;

    cursor: pointer;
`;