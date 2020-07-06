import React from "react";
import styled from "styled-components";
import {
  SectionDiv,
  TopCircle,
  BottomCircle,
  SubHeader,
  WrapTop,
  Absolute,
  Bottom,
} from "../components";
import { Testimonial } from "../components";

const ImagesArray = [
  "https://res.cloudinary.com/ddxgfwoao/image/upload/q_auto:eco/v1593438038/1.jpg",
  "https://res.cloudinary.com/ddxgfwoao/image/upload/q_auto:eco/v1593441746/2.png",
  "https://res.cloudinary.com/ddxgfwoao/image/upload/q_auto:eco/v1593441746/3.jpg",
  "https://res.cloudinary.com/ddxgfwoao/image/upload/q_auto:eco/v1594026300/4.jpg",
  "https://res.cloudinary.com/ddxgfwoao/image/upload/v1594026305/5.jpg",
  "https://res.cloudinary.com/ddxgfwoao/image/upload/q_auto:eco/v1594026356/6.jpg",
  "https://res.cloudinary.com/ddxgfwoao/image/upload/q_auto:eco/v1594042722/Mentorship_with_Ricardo_1_mpfubb.jpg",
  "https://res.cloudinary.com/ddxgfwoao/image/upload/v1593438035/Visit_to_NECA_Lagos_1_kw0b2m.jpg",
  " https://res.cloudinary.com/ddxgfwoao/image/upload/v1593441746/20200220_200552_qfgq1y.jpg",
  "https://res.cloudinary.com/ddxgfwoao/image/upload/q_auto:eco/v1594026402/Business_Developmmet_Class_ahmwhr.jpg",
  "https://res.cloudinary.com/ddxgfwoao/image/upload/v1593438330/IMG-20200322-WA0012_sp6q7y.jpg",
  "https://res.cloudinary.com/ddxgfwoao/image/upload/q_auto:eco/v1593439208/12.jpg",
];

export function Gallery() {
  return (
    <div>
      <Hero>
        <WrapTop>
          <Absolute>
            <TopCircle /> <BottomCircle />
          </Absolute>
          <Top>
            <SubHeader>Gallery</SubHeader>
            <div>
              {/* <WineSemiCircle /> */}
              <img
                width='350px'
                src='https://res.cloudinary.com/ddxgfwoao/image/upload/q_auto:eco/v1593449112/Gallery_axfohb.png'
                alt=''
              />
              <span></span>
            </div>
          </Top>
        </WrapTop>
        <Bottom>
          <p>
            Great innovations begin from humble beginnings. This has been our
            driving force at tiidelab as we have been able to train 28 amazing
            youth, made them junior developers, and exposed them to a journey of
            career development via internships and employment opportunities over
            time.
            <br />
            <br />
            The unique TIIDELab experience is such that it encompasses Software
            Development (remote and class activities). This includes Soft and
            Employability Skills Development, Mentorship Sessions, Contests and
            Competitions, Sports and Recreational activities. We are delighted
            to take you through this amazing journey as we unveil the next
            generation of problem solvers
          </p>
        </Bottom>
      </Hero>
      <Images className='row'>
        {ImagesArray.map((image, index) => (
          <img
            key={index}
            className='col-12 col-sm-4 col-md-3'
            src={image}
            alt=''
          />
        ))}
      </Images>
      <div
        style={{
          background: "#c13147",
        }}
      >
        <SectionDiv bg='#c13147'>
          <h3>Start Your Journey Now</h3>
          <p>
            Whether you are completely new to coding or had prior experience, we
            will help you accelerate your dream of becoming a world-class
            software developer or designer in record time.
          </p>
          <LightButton href='/apply'>Apply Now</LightButton>
        </SectionDiv>
      </div>
      <Testimonial />
    </div>
  );
}

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

const Images = styled.div`
  width: 100%;
  max-width: 1300px;
  padding: 5rem 15rem;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  img {
    object-fit: cover;
    border: 1px solid white;
    padding: 0.5rem;
  }

  @media (max-width: 1200px) {
    padding: 3rem 10rem;
  }

  @media (max-width: 1000px) {
    padding: 3rem 5rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 3rem;

    img {
      max-height: 200px;
    }
  }
`;

const Hero = styled.div`
  position: relative;
`;

const Top = styled.div`
  padding: 6rem 15rem;
  margin: 0 auto;
  position: relative;
  max-width: 1300px;

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

  img {
    border-top-right-radius: 100px;
    border-bottom-left-radius: 100px;
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

  @media (max-width: 768px) {
    padding: 6rem 3rem;

    & > div {
      display: none;
    }
  }
`;
