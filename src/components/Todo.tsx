import React from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux'

import { updateTodo } from '../store/features/todoSlice'
import { Todo } from '../types'
import { Link } from 'react-router-dom'

interface Props {
    todo: Todo,
    id: number
}

export const TodoComponent: React.FC<Props> = ({ todo, id }) => {

    const { title, body, modificationTimeStamp, creationTimeStamp } = todo

    const dispatch = useDispatch()
    
    const doneHandler = () => {
        console.log("called");
        
        if (!todo.doneTimeStamp) {
            const currentTS = Date.now()
            const newTodo = {
                title,
                body,
                creationTimeStamp,
                doneTimeStamp: currentTS,
                modificationTimeStamp
            } as Todo
            dispatch(
                updateTodo({todo: newTodo, id})
            )
        }
    }

    return (
        <Wrapper>
            <Icon onClick={doneHandler}>
                {todo.doneTimeStamp ? "✅" : "❌"}
            </Icon>
            <Title>
                {todo.title}
            </Title>
            <CustomLink to={`/${id}`}>
                👁
            </CustomLink>
            <CustomLink to={`/editor/${id}`}>
                ✏️
            </CustomLink>
        </Wrapper>
    )
}

const CustomLink = styled(Link)`
        text-decoration: none;
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 1.5em;
        width: 1.5em;
        margin: auto;
        border-radius: 100px;
        background-color: var(--secondary-light);
`;

const Title = styled.div`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

const Icon = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px;
    color: white;
    background-color: var(--primary-light);
    font-size: calc(15px + 2vmin);
    margin-right: 0.5em;
    margin-left: 0.5em;
    border: none;
    height: 2em;
    width: fit-content;

    cursor: pointer;
`;

const Wrapper = styled.div`
    color: white;
    margin-bottom: 1em;
    display: grid;
    grid-template-columns: 0.2fr 1fr 0.2fr 0.2fr;

    height: fit-content;
    width: 100%;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    border-radius: 10px;
    background-color: var(--primary);
    cursor: pointer;
`;