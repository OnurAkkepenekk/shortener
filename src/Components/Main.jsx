import React from 'react';
import styled from 'styled-components';
import Navbar from './NavigationBar/Navbar';
import Shorter from './Shorter/Shorter';
import { Axios } from '../utilities/Axios/Axios';

const Main = () => {
     const Pages = [
        {
            id: 0,
            path: "/",
            components: [{
                id: 0,
                name: "Navigation Bar",
                component: <Navbar />
            },
            {
                id: 1,
                name: "Shorter",
                component: <Shorter />
            }]
        }

    ]
    return <PageRender>
        {Pages[0].components.map((component) => {
            return component.component
        })}

    </PageRender>
};

const PageRender = styled.div`
    background:linear-gradient(to bottom, #9086f4 , #E185F5);
    max-height:100vw;
    height:100vh;
`


export default Main;
