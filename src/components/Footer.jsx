import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  background: linear-gradient(270deg, #fff5c9 0.14%, #ffc5d2 100%);;
//   background-image:
//   radial-gradient(#D8D8D8 20%, transparent 0), 
//   radial-gradient(#D8D8D8 20%, transparent 0);
//   background-size: 30px 30px;
//   background-position: 0 0, 15px 15px;
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
  font-weight: 400;
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
`;

const FlexWrapper = styled.div`
    display: flex;
    flex-wrap:wrap;
    padding: 0 1%;
    > div { 
        margin: 0 3%;
    }
    > div:first-child {
        width: 40%;
    }
`
export const Footer = () => {
  return (
    <Foot>
      <div className="container">
        <PaddingSpace left="3rem" right="3rem" top="10rem" bottom="5rem">
          <FlexWrapper>
            <div className="">
              <img
                src="./tiidelab-logo.svg"
                alt="tiidelab logo"
              />
              <Paragraph color="#292929" className="pt-4">
                We were in the middle of the largest project we’ve undertaken as
                a business. There’s no way we would have been able to grow as
                aggressively or be as successful as we have been without our
                Andela team.
              </Paragraph>
              <Paragraph color="#680D14">Copyright © 2020, TIIDELab.</Paragraph>
            </div>
            <div className="">
              <Fheading>Learn More</Fheading>
              <Flink className="pt-4">Apply</Flink>
              <Flink>FAQ'S</Flink>
              <Flink>{"Term's & Conditions"}</Flink>
              <Flink>Help Center</Flink>
            </div>
            <div className="">
              <Fheading>Company</Fheading>
              <Flink className="pt-4">About Us</Flink>
              <Flink>Gallery</Flink>
              <Flink>Contact Us</Flink>
              <Flink>Hire a Developer</Flink>
            </div>
            <div className="">
              <Fheading>Connect</Fheading>
              <Flink className="pt-4">Twitter</Flink>
              <Flink>Instagram</Flink>
              <Flink>Facebook</Flink>
              <Paragraph color="#680D14">hello@TIIDELab.com</Paragraph>
            </div>
            {/* <div className="col-md-2"></div> */}
          </FlexWrapper>
        </PaddingSpace>
      </div>
    </Foot>
  );
};