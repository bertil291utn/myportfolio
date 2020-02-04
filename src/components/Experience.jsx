import React from 'react';
import H2Styled from '../styles/H2Styled';
import H3Styled from '../styles/H3Styled';
import PStyled from '../styles/PStyled';


const Experience = props => {
    return (
        <div className="Experience">
            <div className="Experience-container">
            <H2Styled name="Experience" />
                {
                    props.data.map((resp, i) => (
                        <div className="Experience-item" key={`Exp-${i}`}>
                            <H3Styled>{resp.jobTitle}, {resp.company}, {resp.startDate} - {resp.endDate}</H3Styled>
                            {/* <h4>{resp.startDate} - {resp.endDate}</h4> */}
                            <PStyled name={resp.jobDescription}/>
                        </div>
                    ))
                }


            </div>
        </div>
    );
}

export default Experience;