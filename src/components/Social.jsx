import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const SocialStyle = styled.div`
    margin:0 auto;
    display:block;
`;

const SocialUl = styled.ul`
    list-style-type:none;
    margin: 0;
    padding:0;
`;

const SocialLi = styled.li`
    display:inline;
    margin:0 1em 0 0;
`;

const SocialAnchor = styled.a`
    color:#212121;
    text-decoration:none;
    font-size:1.2em;
`;

// create social icon
const SocialIcon = styled.i`
    color:${props => props.theme.color};
    //pasando propeidades dentro de color
`;


const getColor = (name) => {
    switch (name) {
        case 'facebook':
            return { color: '#3b5998' };
        case 'twitter':
            return { color: '#3ba1f3' };
        case 'linkedin':
            return { color: '#0e76a8' };
        case 'github':
            return { color: '#333' };
        default:
            return { color: '#000000' };
    }
}

const Social = props => {
    return (
        <SocialStyle>
            <div className="Social-container">
                {
                    props.social && //si es true pase 
                    //theme provider pinta el icono del color que se ha establecido
                    //dentro se tiene el icono 
                    <SocialUl>
                        {
                            props.social.map((resp, i) => (
                                <SocialLi key={`social-${i}`} >
                                    <SocialAnchor href={resp.url} target="_blank">
                                        <ThemeProvider theme={getColor(resp.name)}>
                                            <SocialIcon className={`fab fa-${resp.name}`} />
                                        </ThemeProvider>
                                    </SocialAnchor>
                                </SocialLi>
                            ))
                        }
                    </SocialUl>
                }

            </div>
        </SocialStyle>
    );
}

export default Social;