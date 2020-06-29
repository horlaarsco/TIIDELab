import React from "react";
import styled from "styled-components";
import {
  SectionDiv,
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
  "https://res.cloudinary.com/ddxgfwoao/image/upload/v1593441746/20200220_200552_qfgq1y.jpg",
  "https://res.cloudinary.com/ddxgfwoao/image/upload/v1593441746/dinner_with_CEO_1_zebvjs.jpg",
  "https://res.cloudinary.com/ddxgfwoao/image/upload/v1593441746/OSC_fest_Lagos_zgomfk.jpg",
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
            Whether you are completely new to coding or had prior experience, we
            will help you accelerate your dream of becoming a world-class
            software developer or designer in record time.
          </p>
          <LightApplyButton>Start Journey Now</LightApplyButton>
        </SectionDiv>
      </div>
      <Testimonial>
        <div
          id='carouselExampleSlidesOnly'
          className='carousel slide'
          data-ride='carousel'
        >
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <p>
                Tiidelab has helped me gain more focus and shed more light on
                what I want to do and how to go about it. Within the space of
                five months, I've been able to learn how to look for growing
                problems in the society, how to come up with a solution and how
                to create the solution using tech. I've improved not only as a
                developer and a business personnel but also as a person.
              </p>
              <h2>Sanusi Micheal HAYATU</h2>
              <p>
                <i>-Former student/Lead Engineer at Apple</i>
              </p>
              <img
                width='100px'
                src='https://res.cloudinary.com/ddxgfwoao/image/upload/v1593454384/sanusi_Pasport_strd9b.png'
                alt=''
              />
            </div>
            <div className='carousel-item '>
              <p>
                Tiidelab has helped me gain more focus and shed more light on
                what I want to do and how to go about it. Within the space of
                five months, I've been able to learn how to look for growing
                problems in the society, how to come up with a solution and how
                to create the solution using tech. I've improved not only as a
                developer and a business personnel but also as a person.
              </p>
              <h2>Sanusi Micheal HAYATU</h2>
              <p>
                <i>-Former student/Lead Engineer at Apple</i>
              </p>
              <img
                width='100px'
                src='https://res.cloudinary.com/ddxgfwoao/image/upload/v1593454384/sanusi_Pasport_strd9b.png'
                alt=''
              />
            </div>
            <div className='carousel-item '>
              <p>
                Tiidelab has helped me gain more focus and shed more light on
                what I want to do and how to go about it. Within the space of
                five months, I've been able to learn how to look for growing
                problems in the society, how to come up with a solution and how
                to create the solution using tech. I've improved not only as a
                developer and a business personnel but also as a person.
              </p>
              <h2>Sanusi Micheal HAYATU</h2>
              <p>
                <i>-Former student/Lead Engineer at Apple</i>
              </p>
              <img
                width='100px'
                src='https://res.cloudinary.com/ddxgfwoao/image/upload/v1593454384/sanusi_Pasport_strd9b.png'
                alt=''
              />
            </div>
            <div className='carousel-item '>
              <p>
                Tiidelab has helped me gain more focus and shed more light on
                what I want to do and how to go about it. Within the space of
                five months, I've been able to learn how to look for growing
                problems in the society, how to come up with a solution and how
                to create the solution using tech. I've improved not only as a
                developer and a business personnel but also as a person.
              </p>
              <h2>Sanusi Micheal HAYATU</h2>
              <p>
                <i>-Former student/Lead Engineer at Apple</i>
              </p>
              <img
                width='100px'
                src='https://res.cloudinary.com/ddxgfwoao/image/upload/v1593454384/sanusi_Pasport_strd9b.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </Testimonial>
    </div>
  );
}

const Testimonial = styled.div`
  text-align: center;
  padding: 10rem 15rem;

  img {
    margin-top: 2rem;
  }

  h2 {
    margin: 2rem 0;
    color: #c13147;
    font-weight: bold;
  }

  p {
    max-width: 575px;
    margin: 0 auto;
  }

  @media (max-width: 1200px) {
    padding: 8rem 7rem;
  }

  @media (max-width: 1100px) {
    padding: 8rem 3rem;
  }

  @media (max-width: 768px) {
    padding: 6rem 4rem;
  }
`;

const LightButton = styled(Button)`
  background: white;
  color: #c13147;
  border: none;

  &:after {
    border: 1px solid white;
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
