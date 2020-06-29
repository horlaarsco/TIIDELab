import React from "react";
import styled from "styled-components";
import {
  SectionDiv,
  WineSemiCircle,
  Button,
  TopCircle,
  BottomCircle,
  SubHeader,
  WrapTop,
  Absolute,
  Bottom,
} from "../components";

const ImagesArray = [
  "https://res.cloudinary.com/ddxgfwoao/image/upload/v1593438037/dinner_with_CEO_cxq37b.jpg",
  "https://res.cloudinary.com/ddxgfwoao/image/upload/v1593438038/Running_codes_in_class_wopugc.jpg",
  "https://res.cloudinary.com/ddxgfwoao/image/upload/v1593438036/3_fellows_working_together_ul0nc2.jpg",
  "https://res.cloudinary.com/ddxgfwoao/image/upload/v1593438038/fellows_with_Mrs_Folusho_Samuel_cafatk.jpg",
  "https://res.cloudinary.com/ddxgfwoao/image/upload/v1593438037/Female_fellow_coding_z90gft.jpg",
  "https://res.cloudinary.com/ddxgfwoao/image/upload/v1593438036/Dr_Lanre_Philips_mentorship_session_rns5mi.jpg",
  "https://res.cloudinary.com/ddxgfwoao/image/upload/v1593438035/Visit_to_NECA_Lagos_oepb85.jpg",
  "https://res.cloudinary.com/ddxgfwoao/image/upload/v1593438035/Visit_to_NECA_Lagos_1_kw0b2m.jpg",
  "https://res.cloudinary.com/ddxgfwoao/image/upload/v1593438330/IMG-20200322-WA0012_sp6q7y.jpg",
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
              <WineSemiCircle />
              <img
                width='350px'
                src='https://res.cloudinary.com/ddxgfwoao/image/upload/q_auto:good/v1593439208/Group_photo_of_fellows_wdm2vs.jpg'
                alt=''
              />
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
          <h3>Be a Junior Developer Today</h3>
          <p>
            We are TIIDELab, an acronym for THINK, INNOVATE, IDEATE, DEVELOP and
            EXECUTE. We are a technology driven enterprise focused on helping
            African youths thrive and impact their society.
          </p>
          <LightApplyButton>Start Journey Now</LightApplyButton>
        </SectionDiv>
      </div>
    </div>
  );
}

const LightApplyButton = styled(Button)`
  background: white;
  color: #c13147;
  border: none;

  &:after {
    border: 1px solid white;
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
