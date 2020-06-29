import React from "react";
import styled from "styled-components";
import {
  WineSemiCircle,
  TopCircle,
  BottomCircle,
  SubHeader,
  WrapTop,
  Absolute,
  Bottom,
  SectionDiv,
  Button,
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
              <WineSemiCircle />
              <img src='/woman.svg' alt='' />
              <span></span>
            </div>
          </Top>
        </WrapTop>
        <Bottom>
          <p>
            Challenges around getting young people employed and productive in
            the technological work place inspired the birth of TIIDELab. Since
            then, we have trained 28 full stack developers through the first
            cohort of the TIIDELab Fellowship.
            <br /> <br />
            With 50+ years of experience in technology, business development and
            communications, our team continuously bridges the gap around
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
            We are TIIDELab, an acronym for THINK, INNOVATE, IDEATE, DEVELOP and
            EXECUTE. We are a technology driven enterprise focused on helping
            African youths thrive and impact their society.
          </p>
        </SectionDiv>
      </div>
      <Vision>
        <span>
          <img
            src='https://res.cloudinary.com/ddxgfwoao/image/upload/v1593435943/smiling_fellow_in_tiidelab_shirt_k9t3t6.jpg'
            alt=''
          />
        </span>

        <div>
          <SubHeader>Our Vision</SubHeader>
          <p>
            - Develop young Africans who use technology enabled means in solving
            everyday challenges{" "}
          </p>

          <p>- Developing Africa’s largest pool of problem solvers</p>

          <p>- Raising Africa’s next generation of problem solvers. </p>

          <p>- To Build young Africans with a culture of problem solving </p>

          <p>
            - To Develop Young Africans with a culture of solving problems to
            African challenges
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
            Our mission Is to train our fellows with relevant digital skills and
            tools in an enabling environment (to positively influence the
            continent). By creating an enabling environment, we provide relevant
            skills and tools to influence the African continent.
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
            src='https://res.cloudinary.com/ddxgfwoao/image/upload/v1593436761/Mr_Bankole_addressing_fellows_ozigo4.jpg'
            alt=''
          />
        </span>
      </WhatWedo>

      <div
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
          <LightApplyButton>Apply Now</LightApplyButton>
        </SectionDiv>
      </div>
    </div>
  );
}

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
    div {
      padding: 3rem 4rem;
    }

    img {
      padding: 3rem 4rem;
      width: 100%;
    }
  }
`;

const LightApplyButton = styled(Button)`
  background: white;
  color: #c13147;
  border: none;

  &:after {
    border: 1px solid white;
  }
`;

const Hero = styled.div`
  position: relative;
  margin-bottom: 100px;
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
