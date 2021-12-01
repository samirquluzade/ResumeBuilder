import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return(
      <Footers>
        <FooterTitle>ResumeXT</FooterTitle>
          <FooterSocial>
              <FooterIcon href="https://www.facebook.com/samirquluzadeh2001"><i className="bx bxl-facebook-circle"></i></FooterIcon>
              <FooterIcon href="https://www.instagram.com/samirguluzadeh/"><i className="bx bxl-instagram"></i></FooterIcon>
              <FooterIcon href="https://api.whatsapp.com/send?phone=0558735810&amp;text=Salam"><i className="bx bxl-whatsapp"></i></FooterIcon>
              <FooterIcon href="https://t.me/samirquluzadeh"><i className="bx bxl-telegram"></i></FooterIcon>
          </FooterSocial>
          <SiteOwner>Site by Samir Guluzadeh</SiteOwner>
      </Footers>
    );
};

const Footers = styled.div`
  background-color: #0e2431;  
  color:#fff;
  text-align: center;
  font-weight: 600;
  padding: 2rem 0;
`;

const FooterTitle = styled.p`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const FooterSocial = styled.div`
  margin-bottom: 2rem;
`;

const FooterIcon = styled.a`
  font-size: 2.5rem;
  color:#fff;
  margin:0 2rem;
`;

const SiteOwner = styled.p`

`;

export default Footer;