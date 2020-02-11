import React from 'react';
import styled from 'styled-components';

const StyledH3 = styled.h3`
    font-weight:400;
    margin:.5em 0;
    color:#212121;
`;

const H3Styled = ({ children }) => <StyledH3>{children}</StyledH3>

 
export default H3Styled;