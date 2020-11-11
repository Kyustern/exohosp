import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux'
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom'

import { TodoComponent } from '../components/Todo'
import { TodoRoute } from '../routes/TodoRoute'
import { RootState } from '../store/store';

export const List: React.FC = () => {

    const {path} = useRouteMatch()
    console.log("path", path)

    const getTodos = (state: RootState) => state.todos.todoArray
    
    const todos = useSelector(getTodos)

    return (
        <Wrapper>
            <Switch>
                <Route exact path="/">
                    <ListWrapper>
                        {
                            todos.map((todo, index) => <TodoComponent key={index} todo={todo} id={index} />)
                        }
                    </ListWrapper>
                    <Button to="/editor">
                        + Créer une nouvelle tache
                    </Button>
                </Route>

                <Route exact path="/:id">
                    <TodoRoute />
                </Route>
            </Switch>
        </Wrapper>

    )
}

const Button = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    color: white;
    background-color: var(--secondary);
    font-size: calc(15px + 2vmin);
    margin-right: auto;
    margin-left: auto;
    border: none;
    height: 2em;
    width: fit-content;
    padding-left: 1em;
    padding-right: 1em;
    cursor: pointer;
`;

const Wrapper = styled.div`
    grid-area: appbody;
    background-color: var(--primary-light);
    width: 100%;
    height: 100%;
`;

const ListWrapper = styled.div`
    margin-top: 1em;
    padding-right: 0.5em;
    padding-left: 0.5em;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-column-gap: 0.3em;
    /* grid-template-rows: 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */


`;