import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory, useParams } from "react-router-dom";

import { createTodo, updateTodo, deleteTodo } from '../store/features/todoSlice'
import { Todo } from '../types'
import { RootState } from '../store/store';

interface ParamTypes {
    id: string
}

export const Editor: React.FC = () => {

    const history = useHistory()
    const { id } = useParams<ParamTypes>()
    const getTodo = (state: RootState) => state.todos.todoArray[parseInt(id)]
    console.log("id", id)
    const todo = useSelector(getTodo)

    const dispatch = useDispatch()

    const [title, setTitle] = useState(todo ? todo.title : "")
    const [body, setBody] = useState(todo ? todo.body : "")

    const validationHandler = () => {
        if (title && body) {
            if (todo) {
                //Mode édition
                const updatedTodo = {
                    title,
                    body,
                    creationTimeStamp: todo.creationTimeStamp,
                    doneTimeStamp: todo.doneTimeStamp,
                    modificationTimeStamp: Date.now()
                } as Todo
                dispatch(updateTodo({ todo: updatedTodo, id: parseInt(id) }))
                history.goBack()
            } else {
                //Mode création
                const newTodo = {
                    title,
                    body,
                    creationTimeStamp: Date.now()
                } as Todo
                dispatch(createTodo(newTodo))
                history.goBack()
            }
        }
    }

    const removeTodo = () => {
        dispatch(deleteTodo(parseInt(id)))
        history.goBack()
    }
    //ici, une url complétement fausse ne déclenchera pas la route 404
    //il est donc préférable de rediriger vers /

    if (typeof parseInt(id) !== "number") return <Redirect to="/" />

    return (
        <Wrapper>
            <InnerWrapper>
                <SmollText>
                    Titre
                </SmollText>
                <TextInput
                    value={title} onChange={e => setTitle(e.target.value)}
                />
                <SmollText>
                    Contenu
                </SmollText>
                <TextArea
                    value={body} onChange={e => setBody(e.target.value)}
                />

                <ButtonRack>

                    <Button onClick={() => history.goBack()}>
                        ⬅️
                    </Button>

                    {
                        todo ?
                            <Button onClick={removeTodo}>
                                🗑️
                        </Button>
                            :
                            null
                    }

                    <Button onClick={validationHandler}>
                        ✅
                    </Button>
                </ButtonRack>
                {/* <SmollText>
                Statut : 
                </SmollText>
                <SwitchWrapper>
                <Switch done={isDone} setDone={setIsDone} />
                </SwitchWrapper> */}
            </InnerWrapper>
        </Wrapper>
    )
}

const SmollText = styled.div`
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    color: var(--secondary);
    width: 100%;
`;

const InnerWrapper = styled.div`
    max-width: 70%;
    background-color: var(--primary-dark);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    padding: 0.5em;
`;

const Wrapper = styled.div`
    background-color: var(--primary-light);
    grid-area: appbody;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const inputStyles = css`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5em;
    color: white;

    outline: none;
    width: 100%;
    height: 1.7em;
    border: solid white 0px;
    border-bottom: solid white 3px;
    background-color: var(--primary);

    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(.26,.54,.38,1);

    :focus {
        border-bottom: solid var(--secondary) 3px;
        /* ::placeholder {
            color: transparent;
        } */
    }
`

const TextInput = styled.input`
    ${inputStyles}
`

const TextArea = styled.textarea`
    ${inputStyles}
    font-size: 1em;
    height: 10em;
`

const ButtonRack = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 0.5em;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: calc(15px + 2vmin);

    height: 2em;
    width: 1em;
    margin-right: auto;
    margin-left: auto;
    padding-left: 1em;
    padding-right: 1em;
    cursor: pointer;
    background-color: transparent;
    border: solid 3px var(--secondary);
    border-radius: 100px;

    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(.26,.54,.38,1);

    :hover {
        background-color: var(--secondary);
    }
`;