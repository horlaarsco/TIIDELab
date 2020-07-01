import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Flink = styled(Link)`
  color: #292929;
  text-decoration: none;
  font-weight: 300;
  font-size: 14px;
  padding-top: 1rem;
  font-family: "Overpass", sans-serif !important;
  display: block;

  img {
    width: 25px;
    margin-right: 1rem;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1300px;
  margin: 0 auto;
  justify-content: space-between;

  padding: 10rem 15rem;
  @media (max-width: 1200px) {
    padding: 10rem 10rem;
  }

  @media (max-width: 1000px) {
    padding: 10rem 5rem;
  }

  @media (max-width: 768px) {
    padding: 10rem 3rem;
  }
`;

const FooterLogo = styled.div`
  align-self: flex-end;
  p {
    margin: 2rem 0 1rem;
  }
`;

const Bottom = styled.div`
  background-image: url("/above.png");
  height: 20px;
  width: 100%;
`;
export const Footer = () => {
  return (
    <>
      <Bottom></Bottom>
      <Foot>
        <FlexWrapper>
          <FooterLogo>
            <img src='./tiidelab-logo.svg' alt='tiidelab logo' />
            <Paragraph color='#680D14'>Copyright © 2020, TIIDELab.</Paragraph>
            <Row>
              <Flink
                as='a'
                href='https://web.twitter.com/TIIDELab/'
                className='mr-2'
              >
                <img src='/twitter.svg' alt='' />
              </Flink>
              <Flink
                as='a'
                href=' https://www.instagram.com/tiidelab'
                className='mr-2'
              >
                <img src='/instagram.svg' alt='' />
              </Flink>
              <Flink
                as='a'
                href='https://web.facebook.com/TIIDELab/'
                className='mr-2'
              >
                <img
                  src='https://res.cloudinary.com/ddxgfwoao/image/upload/v1593620897/Path_hu8qby.svg'
                  alt=''
                />
              </Flink>
              <Flink
                as='a'
                href='https://www.linkedin.com/company/64564200/admin/'
                className='mr-2'
              >
                <img src='/linkedin.svg' alt='' />
              </Flink>
              <Flink
                as='a'
                href='https://medium.com/@tiidelabfellowship'
                className='mr-2'
              >
                <img src='/medium.svg' alt='' />
              </Flink>
            </Row>
          </FooterLogo>

          <div className=''>
            <Fheading>Learn More</Fheading>
            <Flink to='/apply' className='pt-4 '>
              Apply
            </Flink>
            <Flink>FAQs</Flink>
            <Flink>Terms & Conditions</Flink>
            <Flink>Help Center</Flink>
          </div>
          <div className=''>
            <Fheading>Company</Fheading>
            <Flink to='/about' className='pt-4'>
              About Us
            </Flink>
            <Flink to='/gallery'>Gallery</Flink>
            <Flink to='/contact'>Contact Us</Flink>
            <Flink as='a' href='mailto:hi@tiidelab.com'>
              Hire a Developer
            </Flink>
          </div>
        </FlexWrapper>
      </Foot>
    </>
  );
};

const Row = styled.div`
  display: flex;
  align-items: center;
`;
