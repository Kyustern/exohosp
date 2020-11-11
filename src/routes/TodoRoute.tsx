import React from 'react'
import styled from 'styled-components'
import { Redirect, useParams } from 'react-router'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
import { useHistory } from 'react-router-dom'

import { RootState } from '../store/store'

interface ParamTypes {
    id: string
}

const getDateString = (unixTimeStamp: number): string => dayjs(unixTimeStamp).format('DD/MM/YY HH:mm')


export const TodoRoute: React.FC = () => {

    const history = useHistory()

    const { id } = useParams<ParamTypes>()
    console.log("id", id)
    
    const getTodo = (state: RootState) => state.todos.todoArray[parseInt(id)]
    const {
        title, 
        body, 
        creationTimeStamp, 
        doneTimeStamp,
        modificationTimeStamp
    } = useSelector(getTodo)

    //ici, une url complétement fausse ne déclenchera pas la route 404
    //il est donc préférable de rediriger vers / 
    if (typeof parseInt(id) !== "number") return <Redirect to="/" />

    return (
        <Wrapper>
            <InnerWrapper>
                <SmollText>
                    Titre :
                </SmollText>
                <TextContainer>
                    {title}
                </TextContainer>
                <SmollText>
                    Body :
                </SmollText>
                <TextContainer>
                    {body}
                </TextContainer>
                <SmollText>
                    Date de création :
                </SmollText>
                <TextContainer>
                    {getDateString(creationTimeStamp)}
                </TextContainer>

                {
                modificationTimeStamp &&
                <>
                    <SmollText>
                        Modifié la dernière fois le :
                    </SmollText>
                    <TextContainer>
                        {getDateString(modificationTimeStamp)}
                    </TextContainer>
                </>
                }

                {
                doneTimeStamp &&
                <>
                    <SmollText>
                        Terminé le :
                    </SmollText>
                    <TextContainer>
                        {getDateString(doneTimeStamp )}
                    </TextContainer>
                </>
                }

                <Button onClick={() => history.goBack()}>
                ⬅️ Retour
                </Button>
            </InnerWrapper>
        </Wrapper>
    )
}

const SmollText = styled.div`
    color: var(--secondary);
    width: 100%;
`;

const TextContainer = styled.p`
    margin-top: 10px;
    /* margin-bottom: ; */
    width: 100%;
    color: #bbbbbb;

`;

const InnerWrapper = styled.div`
    background-color: var(--primary-dark);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    height: auto;
    width: 70%;
    padding: 0.5em;
`;

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: calc(15px + 2vmin);

    height: 2em;
    width: fit-content;
    
    margin-right: 0;
    padding-left: 1em;
    padding-right: 1em;
    cursor: pointer;
    background-color: transparent;
    border: solid 3px var(--secondary);
    border-radius: 10px;

    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(.26,.54,.38,1);

    :hover {
        background-color: var(--secondary);
    }
`;