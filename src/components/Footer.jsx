import React from 'react';
import styled from 'styled-components';

const FooterP = styled.p`
    text-align:center;
    margin: 4em 0 0 0%;
`;
const FooterA = styled.a`
    text-decoration:none;
    color:#212121;
`;

const Footer = () => {
    return (
        <div className="Footer">
            <FooterP>Made always with ❤ by<FooterA href="https://garajesoft.com" target="_blank"> GarajeSoft ©</FooterA>
            </FooterP>
        </div>
    );
}

export default Footer;