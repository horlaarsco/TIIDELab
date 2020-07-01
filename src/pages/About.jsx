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
import Parser from "html-react-parser";

const Above = styled.span`
  background-image: url("/above.png");
  height: 40px;
  width: 100%;
  display: block;
`;

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
                src='https://res.cloudinary.com/ddxgfwoao/image/upload/q_auto:eco/v1593449129/about_us_bp5pqk.png'
                alt=''
              />
              <span></span>
            </div>
          </Top>
        </WrapTop>
        <Above />
        <Bottom>
          <p>
            Challenges around getting young people employed and productive in
            the technological workplace inspired the birth of TIIDELab. Since
            then, we have trained 28 full stack developers through the first
            cohort of the TIIDELab Fellowship.
            <br /> <br />
            With over a decade of experience in technology, business development
            and communications, our team continuously bridges the gap around
            employment, infrastructure, quality trainings and access to
            opportunities. …Harnessing the African potentials.
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
            src='https://res.cloudinary.com/ddxgfwoao/image/upload/q_auto:eco/v1593449077/our_vision_jejivh.png'
            alt=''
          />
        </span>

        <div>
          <SubHeader>Our Mission</SubHeader>
          <p>
            - To train our fellows with relevant digital skills and tools in an
            enabling environment to positively influence the African continent.
            <br /> <br />
            -To develop our fellows with relevant skills and use of digital
            tools to become self-reliant.
          </p>
        </div>
      </Vision>
      <div
        style={{
          background: "#f4f2f2",
        }}
      >
        <SectionDiv color='black' bg='#f4f2f2'>
          <h3>Our Vision</h3>

          <p>
            Develop young Africans who use technology enabled means
            <br /> in solving everyday challenges.
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
          {Parser(
            `<a class="typeform-share button light-button mt-5" href="https://form.typeform.com/to/lWblM7mI" data-mode="popup"  data-hide-headers=true target="_blank">Apply Now </a> `
          )}{" "}
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
