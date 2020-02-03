import React from 'react';
import H2Styled from '../styles/H2Styled';
import H3Styled from '../styles/H3Styled';
import PStyled from '../styles/PStyled';


const Certificates = props => {
    return (
        <div className="Certificates">
            <div className="Certificates-container">
                <H2Styled name="Certificates" />
                {
                    props.data.map((resp, i) => (
                        <div className="Certificates-item" key={`Cert-${i}`}>
                            <H3Styled>{resp.name}, {resp.institution}</H3Styled>
                            <h4>{resp.date}</h4>
                            <PStyled name={resp.description}/>
                        </div>
                    ))
                }


            </div>
        </div>
    );
}

export default Certificates;