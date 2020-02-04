import React from 'react';
import H2Styled from '../styles/H2Styled';
import H3Styled from '../styles/H3Styled';
import PStyled from '../styles/PStyled';

const Education = props => {
    return (
        <div className="Education">
            {/* titlulo de education  */}
            <H2Styled name="Education" />
            <div className="Education-container">
                {
                    props.data.map((edu, i) => (
                        <div className="Education-item" key={`Edu-${i}`}>
                            <H3Styled>{edu.degree}, {edu.institution}, {edu.startDate} - {edu.endDate}</H3Styled>
                            {/* <h4>{edu.startDate} - {edu.endDate}</h4> */}
                            <PStyled name={edu.description} />
                        </div>
                    ))
                }

            </div>
        </div>

    );
}

export default Education;