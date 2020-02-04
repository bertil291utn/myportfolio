import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';

const MainStyled = styled.div`
    display:grid;
    grid-template-columns:minmax(auto, 1024px);
    justify-content:center;
    padding:1em;
`;

const MainContainer = styled.div`
    display:grid;
    grid-template-columns:1fr 3fr;
    //consultar fr para columnas 
    grid-gap:2rem;
    grid-row-gap:0.5em;

    @media only screen and (max-width:767px)  {
        grid-template-columns:1fr;
    }
`;


const Main = ({ children }) => (//sfc   cuando es un return implicito no necesita escribir el return 
    <MainStyled>
        <MainContainer>
            {children}
        </MainContainer>
        <Footer />
    </MainStyled>
);




export default Main;