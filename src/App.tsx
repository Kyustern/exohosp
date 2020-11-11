import React from 'react'
import styled from 'styled-components';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'

import { Header } from "./routes/Header";
import { Editor } from './routes/Editor'
import { List } from './routes/List'
import { FourOFour } from './routes/FourOFour'

export const App: React.FC = () => {
    return (
        <RootWrapper>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/editor/:id"><Editor /></Route>
                    <Route path="/editor/"><Editor /></Route>
                    <Route path="/"><List /></Route>
                    <Route path="*"><FourOFour /></Route>
                </Switch>

            </BrowserRouter>
        </RootWrapper>
    )
}

const RootWrapper = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: calc(10px + 2vmin);

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.1fr 1fr;
    /* gap: 0px 0px; */
    grid-template-areas:
    "header header"
    "appbody appbody";
    height: 100vh;
    width: 100vw;

`;