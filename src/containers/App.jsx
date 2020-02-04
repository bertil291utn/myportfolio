import React from 'react';
import Main from '../components/Main';
import Slidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Certificates from '../components/Certificates';

import useGetData from '../hooks/useGetData';
import { createGlobalStyle } from 'styled-components';
import H2Styled from '../styles/H2Styled';

const GlobalStyle = createGlobalStyle`
    body{
        font-family:'Lato',sans-serif;
        margin:0;
        padding:0;
        background: #f5f5f5;
    }
`;

const App = () => {
    const data = useGetData();
    //console.log(data);
    //pasar mediante nombres a cada tag los valores que trae data desde la api rest 
    return data.length == 0 ? <H2Styled name="Loading ..." /> : (
        <Main>
            <GlobalStyle />
            <Slidebar>
                <About
                    avatar={data.avatar}
                    name={data.name}
                    profession={data.profession}
                    bio={data.bio}
                    address={data.address}
                    social={data.social} />
            </Slidebar>
            <Info>
                <Education
                    data={data.education}
                />
                <Experience
                    data={data.experience} />
                <Certificates
                    data={data.certificate} />
                <Skills
                    data={data.skills} />
            </Info>
        </Main>
        
    );
}

export default App;