import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  background: linear-gradient(270deg, #fff5c9 0.14%, #ffc5d2 100%);
  /* background-image: radial-gradient(#d8d8d8 20%, transparent 0),
    radial-gradient(#d8d8d8 20%, transparent 0);
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px; */
`;

const Paragraph = styled.p`
  color: ${(props) => props.color || "var(--c-color8)"};
  font-weight: 300;
  font-size: 14px;
  font-family: "Overpass", sans-serif !important;
`;

const Fheading = styled.h5`
  color: #616161;
  font-size: 16px;
  font-family: "Overpass", sans-serif !important;
  font-weight: 700;
`;

const Flink = styled.a`
  color: #292929;
  text-decoration: none;
  font-weight: 300;
  font-size: 14px;
  padding-top: 1rem;
  font-family: "Overpass", sans-serif !important;
  display: block;
`;

const PaddingSpace = styled.div`
  padding-top: ${(props) => props.top};
  padding-bottom: ${(props) => props.bottom};
  padding-left: ${(props) => props.left};
  padding-right: ${(props) => props.right};
  max-width: 1240px;
  margin: 0 auto;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 1%;
  > div {
    margin: 0 3%;
  }
  > div:first-child {
    width: 40%;
  }
`;

const FooterLogo = styled.div`
  align-self: flex-end;
  p {
    margin: 2rem 0;
  }
`;
export const Footer = () => {
  return (
    <Foot>
      <PaddingSpace left='3rem' right='3rem' top='10rem' bottom='5rem'>
        <FlexWrapper>
          <FooterLogo>
            <img src='./tiidelab-logo.svg' alt='tiidelab logo' />
            <Paragraph color='#680D14'>Copyright © 2020, TIIDELab.</Paragraph>
          </FooterLogo>
          <div className=''>
            <Fheading>Learn More</Fheading>
            <Flink className='pt-4'>Apply</Flink>
            <Flink>FAQs</Flink>
            <Flink>Terms & Conditions</Flink>
            <Flink>Help Center</Flink>
          </div>
          <div className=''>
            <Fheading>Company</Fheading>
            <Flink className='pt-4'>About Us</Flink>
            <Flink>Gallery</Flink>
            <Flink>Contact Us</Flink>
            <Flink>Hire a Developer</Flink>
          </div>
          <div className=''>
            <Fheading>Connect</Fheading>
            <Flink className='pt-4'>Twitter</Flink>
            <Flink>Instagram</Flink>
            <Flink>Facebook</Flink>
            <Paragraph color='#680D14'>hi@tiidelab.com</Paragraph>
          </div>
          {/* <div className="col-md-2"></div> */}
        </FlexWrapper>
      </PaddingSpace>
    </Foot>
  );
};
