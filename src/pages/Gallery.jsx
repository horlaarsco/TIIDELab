import React from "react";
import styled from "styled-components";

export function Gallery() {
  return (
    <div>
      <Hero>
        <WrapTop>
          <Absolute>
            <TopCircle></TopCircle>
            <BottomCircle></BottomCircle>
          </Absolute>
          <Top>
            <Header>Gallery</Header>
            <div>
              <SquareCircle></SquareCircle>
              <img width='350px' src='/gallery.svg' alt='' />
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
      <Images>
        <div>
          <LeftImage>
            <ImageGrid
              w='100%'
              h='100%'
              src='https://via.placeholder.com/400x400.png'
              alt=''
            />
          </LeftImage>
          <RightImage>
            <ImageGrid
              h='50%'
              src='https://via.placeholder.com/400x400.png'
              alt=''
            />
            <div>
              <ImageGrid
                w='50%'
                src='https://via.placeholder.com/400x400.png'
                alt=''
              />
              <ImageGrid
                w='50%'
                src='https://via.placeholder.com/400x400.png'
                alt=''
              />
            </div>
          </RightImage>
        </div>
      </Images>
      <Journey>
        <h3>Be a Junior Developer Today</h3>
        <p>
          We are TIIDELab, an acronym for THINK, INNOVATE, IDEATE, DEVELOP and
          EXECUTE. We are a technology driven enterprise focused on helping
          African youths thrive and impact their society.
        </p>
        <JourneyButton>Start Journey Now</JourneyButton>
      </Journey>
    </div>
  );
}

const WrapTop = styled.section`
  background: #f4f2f2;
`;

const Images = styled.div`
  & > div {
    display: flex;
  }

  width: 100%;
  max-width: 1200px;
  padding: 5rem 15rem;
  margin: 0 auto;
  img {
    object-fit: cover;
    border: 1px solid white;
  }
`;

const RightImage = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    height: 50%;
  }
`;
const LeftImage = styled.div`
  width: 50%;
`;

const ImageGrid = styled.img`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
`;

const JourneyButton = styled.button`
  background: white;
  color: #c13147;
  border: 1px solid #c13147;
  padding: 1rem 3rem;
  position: relative;
  font-size: 1.6rem;
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

const Journey = styled.div`
  padding: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #c13147;
  color: white;

  h3 {
    font-size: 3.5rem;
    margin: 0;
    font-weight: 900;
  }

  p {
    max-width: 630px;
    line-height: 1.5;
    margin: 2.4rem 0;
  }
`;

const Hero = styled.div`
  /* max-width: 1000px; */
  /* display: flex; */

  position: relative;

  img {
  }
`;

const Header = styled.h2`
  font-size: 3.5rem;
  color: #434343;
  font-weight: 900;
`;

const SquareCircle = styled.div`
  height: 108px;
  width: 54px;
  background: #c13147;
  border-bottom-left-radius: 80px;
  margin-right: 1.5rem;
`;
const TopCircle = styled.div`
  background: #e9e8e8;
  width: 80px;
  height: 80px;
  border-top-left-radius: 80px;
`;

const BottomCircle = styled.div`
  background: #c6c4c4;
  width: 80px;
  height: 80px;
  border-bottom-left-radius: 80px;
`;

const Bottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 15rem;
  p {
    width: 572px;
    font-weight: 300;
  }

  strong {
    font-weight: 600;
  }
`;

const Top = styled.div`
  padding: 6rem 15rem;
  margin: 0 auto;
  position: relative;
  max-width: 1200px;

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
`;

const Absolute = styled.span`
  position: absolute;
  right: 0;
  top: 80px;
`;
