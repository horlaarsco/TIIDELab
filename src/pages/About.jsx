import React from "react";
import styled from "styled-components";
import {
  TopCircle,
  BottomCircle,
  SubHeader,
  WrapTop,
  Absolute,
  Bottom,
  SectionDiv,
} from "../components";

export function About() {
  return (
    <div>
      <Hero>
        <WrapTop>
          <Absolute>
            <TopCircle /> <BottomCircle />
          </Absolute>
          <Top>
            <SubHeader>About Us</SubHeader>
            <div>
              {/* <WineSemiCircle /> */}
              <img
                src='https://res.cloudinary.com/ddxgfwoao/image/upload/q_auto:eco/v1594024963/about_us_new_next_o1mlyv.png'
                alt=''
              />
              <span></span>
            </div>
          </Top>
        </WrapTop>
        <Bottom>
          <p>
            Challenges around getting young people employed and productive in
            the technological workplace inspired the birth of TIIDELab. Since
            then, we have trained 28 full stack developers through the first
            cohort of the TIIDELab Fellowship.
            <br />
            <br />
            With over a decade of experience in technology, business development
            and communications, our team continuously bridges the gap around
            employment, infrastructure, quality trainings and access to
            opportunities.
          </p>
        </Bottom>
      </Hero>
      <div
        style={{
          background: "#c13147",
        }}
      >
        <SectionDiv bg='#c13147'>
          <h3>Who We are</h3>
          <p>
            We are TIIDELab an initiative of Techspecialist Consulting Limited.
            We THINK, INNOVATE, IDEATE, DEVELOP and EXECUTE. We are a technology
            driven enterprise focused on helping youths thrive and impact their
            society.
          </p>
        </SectionDiv>
      </div>
      <Vision>
        <span>
          <img
            src='https://res.cloudinary.com/ddxgfwoao/image/upload/q_auto:eco/v1594025036/our_vision_new_lej5sc.png'
            alt=''
          />
        </span>

        <div>
          <SubHeader>Our Vision</SubHeader>
          <p>
            To develop young Africans who use technology enabled means in
            solving everyday challenges.
          </p>
        </div>
      </Vision>
      <div
        style={{
          background: "#f4f2f2",
        }}
      >
        <SectionDiv color='black' bg='#f4f2f2'>
          <h3>Our Mission</h3>

          <p>
            To develop our fellows with relevant skills and use of digital tools
            to become self-reliant
          </p>
        </SectionDiv>
      </div>
      <WhatWedo>
        <div>
          <SubHeader> What we do</SubHeader>
          <p>
            We provide access to high quality trainings for front or back end
            development while incorporating problem solving and collaborative
            skills. We give our fellows access to market and available
            opportunities in the work sector by providing guidance using people
            and relevant tools.
            <br />
            <br />
            We utilize the blended learning process and strong evaluation
            metrics to ensure that our fellows are adequately prepared to tackle
            real life challenges.
          </p>
        </div>
        <span>
          <img
            src='https://res.cloudinary.com/ddxgfwoao/image/upload/q_auto:eco/v1593449019/what_we_do_brv98a.png'
            alt=''
          />
        </span>
      </WhatWedo>

      {/* <div
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/ddxgfwoao/image/upload/c_scale,q_auto:eco,w_1068/v1593431132/image_ntvtkj.png)",
          backgroundPosition: "center bottom",
          backgroundSize: "cover",
        }}
      >
        <SectionDiv>
          <h3>Do not be left out</h3>
          <p>
            Whether you are completely new to coding or had prior experience, we
            will help you accelerate your dream of becoming a world-class
            software developer or designer in record time.
          </p>
          <LightButton href='/apply'>Apply Now</LightButton>
        </SectionDiv>
      </div>
    
     */}
      <div style={{ background: "#f4f2f2" }}>
        <Key>
          <h3>Key Management</h3>
        </Key>
      </div>

      <KeyGrid>
        <div>
          <Manager>
            <div>
              <TopImg src='/kadri.png' alt='' />
              <h3>Kadri Salami</h3>
              <p>Founder, TIIDELab Initiative</p>
            </div>
            <div>
              <a href='https://www.linkedin.com/in/kadir-salami-0a090054/'>
                <img width='30px' src='/linkedin.svg' alt='' />
              </a>{" "}
              <a href='http://twitter.com/kadir_salami'>
                <img width='30px' src='/twitter.svg' alt='' />
              </a>{" "}
            </div>
          </Manager>
          <Manager>
            <div>
              <TopImg
                src='https://res.cloudinary.com/ddxgfwoao/image/upload/q_auto:eco/v1594084032/Group_3_wmt1pe.png'
                alt=''
              />
              <h3>Pishikeni Tukura</h3>
              <p>Business Development Lead</p>
            </div>
            <div>
              <a href='https://www.linkedin.com/in/pishikeni-tukura-60128b153/'>
                <img width='30px' src='/linkedin.svg' alt='' />
              </a>{" "}
              <a href='http://twitter.com/Tukura_the_3rd'>
                <img width='30px' src='/twitter.svg' alt='' />
              </a>{" "}
            </div>
          </Manager>
        </div>
        <div>
          <Manager>
            <div>
              <BottomImg src='/shamsudeen.png' alt='' />
              <h3>Shamsudeen Aderoju</h3>
              <p>Project Co-ordinator</p>
            </div>
            <div>
              <a href='https://www.linkedin.com/in/aderoju-shamsudeen-adedapo-03288774/'>
                <img width='30px' src='/linkedin.svg' alt='' />
              </a>{" "}
              <a href='http://twitter.com/shamdex2000'>
                <img width='30px' src='/twitter.svg' alt='' />
              </a>{" "}
            </div>
          </Manager>
          <Manager>
            <div>
              <BottomImg
                src='https://res.cloudinary.com/ddxgfwoao/image/upload/q_auto:eco/v1594084056/cele_wjpnak.png'
                alt=''
              />
              <h3>Celestine Omin</h3>
              <p>Mentor</p>
            </div>
            <div>
              <a href='https://www.linkedin.com/in/celestineomin/'>
                <img width='30px' src='/linkedin.svg' alt='' />
              </a>{" "}
              <a href='http://twitter.com/cyberomin'>
                <img width='30px' src='/twitter.svg' alt='' />
              </a>{" "}
            </div>
          </Manager>
          <Manager>
            <div>
              <BottomImg
                src='https://res.cloudinary.com/ddxgfwoao/image/upload/q_auto:eco/v1594084039/Group_6_pfdpcd.png'
                alt=''
              />
              <h3>Fikayo Adepoju</h3>
              <p>Mentor</p>
            </div>
            <div>
              <a href='https://www.linkedin.com/in/fikayoadepoju/'>
                <img width='30px' src='/linkedin.svg' alt='' />
              </a>{" "}
              <a href='http://twitter.com/coderonfleek'>
                <img width='30px' src='/twitter.svg' alt='' />
              </a>
            </div>
          </Manager>
        </div>
      </KeyGrid>
    </div>
  );
}

const BottomImg = styled.img`
  width: 200px;
`;

const TopImg = styled.img`
  width: 250px;

  @media (max-width: 768px) {
    width: 200px;
  }
`;

const KeyGrid = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  & > div {
    display: flex;
    justify-content: center;
    margin: 8rem 0;
  }

  @media (max-width: 768px) {
    margin: 8rem auto;
    & > div {
      flex-direction: column;
      align-items: center;
      margin: 0;
    }
  }
`;

const Manager = styled.div`
  max-width: 300px;
  text-align: center;
  display: flex;
  margin: 0 2rem;
  img {
    margin-bottom: 1rem;
  }
  & > div {
    display: flex;
    flex-direction: column;
  }

  > div:nth-of-type(2) {
    margin-left: 1rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    margin: 2rem;
  }
`;
const Key = styled.div`
  padding: 4rem;
  text-align: center;
  max-width: 1240px;
  margin: 0 auto;
  h3 {
    font-size: 3.5rem;
    margin: 0;
    font-weight: 900;
  }
`;

const LightButton = styled.a`
  color: #c13147 !important;
  border: none;
  padding: 1rem 3rem;
  position: relative;
  font-size: 1.6rem;
  cursor: pointer;
  background: white;
  &:after {
    content: " ";
    border: 1px solid white;
    position: absolute;
    width: 100%;
    height: 100%;
    left: -7px;
    bottom: -7px;
  }
`;

const WhatWedo = styled.div`
  display: flex;
  max-width: 1300px;
  margin: 10rem auto;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    padding: 3rem 10rem;
  }

  span {
    display: flex;
    align-items: center;
  }

  img {
    width: 550px;
  }

  @media (max-width: 1200px) {
    div {
      padding: 3rem 7rem;
    }

    img {
      width: 450px;
    }
  }

  @media (max-width: 1100px) {
    div {
      padding: 3rem 4rem;
    }

    img {
      width: 400px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 2rem auto;

    div {
      padding: 3rem 4rem;
    }

    img {
      padding: 3rem 4rem;
      width: 100%;
    }
  }
`;

const Vision = styled.div`
  display: flex;
  max-width: 1300px;
  margin: 10rem auto;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    padding: 3rem 10rem;
  }

  img {
    width: 550px;
  }

  span {
    display: flex;
    align-items: center;
  }

  @media (max-width: 1200px) {
    div {
      padding: 3rem 7rem;
    }

    img {
      width: 450px;
    }
  }

  @media (max-width: 1100px) {
    div {
      padding: 3rem 4rem;
    }

    img {
      width: 400px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 2rem auto;

    div {
      padding: 3rem 4rem;
    }

    img {
      padding: 3rem 4rem;
      width: 100%;
    }
  }
`;

const Hero = styled.div`
  position: relative;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
`;

const Top = styled.div`
  padding: 6rem 15rem;
  margin: 0 auto;
  position: relative;
  max-width: 1300px;
  img {
    width: 350px;
  }

  @media (max-width: 1200px) {
    padding: 5rem 10rem;
    & > div {
      right: 0 !important;
    }
  }

  @media (max-width: 1000px) {
    padding: 6rem 5rem;
    img {
      width: 300px;
    }
  }

  & > div {
    position: absolute;
    right: 100px;
    top: 40px;
    display: flex;

    span {
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: #e7c941;
    }
  }

  @media (max-width: 768px) {
    padding: 6rem 3rem;

    & > div {
      display: none;
    }
  }
`;
