import React from "react";
// import Layout from '../components/Layout';
// import Nav from '../components/Navbar'
import styled from 'styled-components';
// import Footer from '../components/Footer/Footer';

const Header = styled.header`
  background: rgb(244, 242, 242);
  width: 100%;
  height: 250px;
  position: relative;
`
const ApplyButton = styled.button`
  background: #ffffff;
  color: var(--c-color1);
  border: none;
  font-family: "Overpass", sans-serif;
  margin-left: auto;
  margin-right: auto;
  display:block;
  padding: 0.5rem 1rem;
  position: relative;
  font-size: 1rem;
  z-index: 20;
  &:after {
    content: " ";
    border: 1px solid #c13147;
    position: absolute;
    width: 100%;
    height: 100%;
    left: -7px;
    z-index: 1;
    bottom: -7px;
  }
  // @media screen and (max-width:800px){
  //   margin-left: 2rem !important;
  // }
`;

const Heading1 = styled.h1`
  color: var(--c-color7);
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 4rem;
  padding-left: 24rem;
  padding-top: 12rem;
  @media (max-width: 500px) {
    padding-left: 2rem;
  }
`

const Circle1 = styled.div`
  width: 4rem;
  height: 4rem;
  position: absolute;
  right: 0;
  left: auto;
  opacity: 0.3;
  top: 14rem;
  border-radius: 100px 0 0 0;
  background: #CBCBCB;
  // @media (max-width: 500px) {
  //   width: 14vw;
  //   height: 10vh;
  //   bottom: 8.5rem;
  // }
`
const Circle2 = styled.div`
  width: 4rem;
  height: 4rem;
  position: absolute;
  right: 0;
  left: auto;
  opacity: 0.3;
  top: 18rem;
  border-radius: 0 0 0 100px;
  background: #1D1D1D;
`

const Paragraph = styled.p`
  color: ${props =>  props.color || "var(--c-color8)"};
  font-weight: 300;
  font-family: 'Overpass', sans-serif !important;
`

const CenterParagraph = styled.p`
  color: ${props =>  props.color || "var(--c-color8)"};
  font-weight: 300;
  font-family: 'Overpass', sans-serif !important;
  margin-right: auto;
  margin-left: auto;
  padding: 2rem 6rem 0.5rem 6rem
`

const SubWrapper = styled.div`
  position: absolute;
  right: 2.5rem;
  top: 3rem;
`

const SemiCircle1 = styled.div`
  width: 4.5rem;
  height: 9rem;
  margin-right: 39rem;
  background: #C13147;
  border-radius: 0 0 0 64px;
`;

const SemiCircle2 = styled.div`
  width: 8rem;
  height: 4rem;
  top: 38.5rem;
  right: 1.3rem;
  position: ${props => props.position};
  background: ${props => props.bg};
  border-radius: ${props => props.radius};
`;

const SemiCircle3 = styled.div`
  width: 2.5rem;
  height: 4.5rem;
  top: ${props => props.top || "23rem"};
  left: ${props => props.left || "21rem"};
  position: ${props => props.position};
  background: ${props => props.bg};
  border-radius: ${props => props.radius};
`;

const SmallCircle = styled.div`
  width: ${props => props.width || "1rem"};
  height: ${props => props.height || "1rem"};
  background: ${props => props.color};
  position: ${props => props.position};
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  border-radius: 100px;
`;

const Image = styled.img`
  position: ${props => props.position || "absolute"};
  height: ${props => props.height || "400px"};
  top: 0;
  right: 4rem;;
`

const Who = styled.div`
  background: ${props => props.bg || "#C13147"};
`

const SubHead = styled.h2`
  color: ${props => props.color || "var(--c-color8)"};
  font-family: 'Overpass', sans-serif;
  font-size:3rem;
`;

const BigDivider = styled.div`
  height: 45rem;
  width: 250px;
  position: absolute;
  border-radius: 147px 0 0 168px;
  right: 0;
  top: -20rem;
  left: auto;
  background: #FF95A5;
  opacity: 10%;
`;

const ApplyNowAction = styled.div`
  background-image: url(./about-left.svg);
  width: 100%;
  margin-top: 10rem !important;
  background-size: cover;
  background-repeat: no-repeat;
`

const Vision = styled.article`
  margin-top: 10rem;
  margin-left: 7rem;
`

const IntroWrap = styled.div`
  padding: 5rem 11rem;
  p{
    width: 600px;
  }
`

const MarginSpace = styled.div`
  margin-top: ${props => props.top};
  margin-bottom: ${props => props.bottom};
  margin-left: ${props => props.left};
  margin-right: ${props => props.right};
`;

const PaddingSpace = styled.div`
  padding-top: ${props => props.top};
  padding-bottom: ${props => props.bottom};
  padding-left: ${props => props.left};
  padding-right: ${props => props.right};
`;

const VisionWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const About = () => {
  return(
    <React.Fragment>
      {/* <Layout page="About"> */}
        <Header>
          {/* <Nav /> */}
          <div>
            <Heading1>About Us</Heading1>
            <div className="">
              <SubWrapper>
                <SemiCircle1 radius="0 0 0 64px" bg="#C13147"></SemiCircle1>
                <Image src="./about-group.svg" alt="Woman sitting in front of a computer"></Image>
                <SmallCircle color="#E7C941" position="absolute" top="1rem" right="3.9rem"></SmallCircle>
                <SemiCircle2 radius="0 0 0 64px" bg="#242424" position="absolute"></SemiCircle2>
                <SmallCircle color="#000000" position="absolute" top="36.5rem" right="0" width="0.5rem" height="0.5rem"></SmallCircle>
              </SubWrapper>
            </div>
            <Circle1></Circle1>
            <Circle2></Circle2>
          </div>
        </Header>
        <main id="main">
          <section>
            <div className="container mt-5">
              <IntroWrap>
                <article>
                  <Paragraph>Challenges around getting young people employed and productive in the technological work place inspired the birth of TIIDELab. Since then, we have trained 28 full stack developers through the first cohort of the TIIDELab Fellowship. </Paragraph>
                  <Paragraph>With 50+ years of experience in technology, business development and communications, our team continuously bridges the gap around employment, infrastructure, quality trainings and access to opportunities.  </Paragraph>
                </article>
                <SmallCircle color="#E7C941" position="relative" top="5rem" left="69rem"></SmallCircle>
              </IntroWrap>
            </div>
          </section>
          <MarginSpace top="4rem">
            <Who>
              <PaddingSpace top="6rem" bottom="6rem" left="35rem" right="35rem">
                <SubHead className="text-center" color="#FFFFFF">Who We are</SubHead>
                <CenterParagraph color="#ffffff" className="text-center">We are TIIDELab, an acronym for THINK, INNOVATE, IDEATE, DEVELOP and EXECUTE. We are a technology driven enterprise focused on helping African youths thrive and impact their society.</CenterParagraph>
              </PaddingSpace>
            </Who>
          </MarginSpace>
          <div style={{position: "relative"}}>
            <BigDivider></BigDivider>
          </div>
          <MarginSpace top="4rem">
            <VisionWrap>
              <Image src="./about-vision.svg" position={" "} height="450px" alt="People in fromt of computer"></Image>
              <Vision>
                <PaddingSpace left="2rem">
                  <SubHead>Our Vision</SubHead>
                  <PaddingSpace top="1rem">
                    <Paragraph>- Develop young Africans who use technology enabled means in solving everyday challenges </Paragraph>
                    <Paragraph>- Developing Africa’s largest pool of problem solvers</Paragraph>
                    <Paragraph>- Raising Africa’s next generation of problem solvers.</Paragraph>
                    <Paragraph>- To Build young Africans with a culture of problem solving</Paragraph>
                    <Paragraph>- To Develop Young Africans with a culture of solving problems to African challenges</Paragraph>
                  </PaddingSpace>
                </PaddingSpace>
              </Vision>
            </VisionWrap>
          </MarginSpace>
          <MarginSpace top="4rem">
            <Who  bg="#F4F4F4">
              <PaddingSpace top="6rem" bottom="6rem" left="35rem" right="35rem">
                <SubHead className="text-center">Our Mission</SubHead>
                <CenterParagraph className="text-center">We are TIIDELab, an acronym for THINK, INNOVATE, IDEATE, DEVELOP and EXECUTE. We are a technology driven enterprise focused on helping African youths thrive and impact their society.</CenterParagraph>
                <CenterParagraph className="text-center">By creating an enabling environment, we provide relevant skills and tools to influence the African continent.</CenterParagraph>
              </PaddingSpace>
            </Who>
          </MarginSpace>
          <MarginSpace top="4rem">
            <VisionWrap>
                <Vision>
                  <SubHead>What we do</SubHead>
                  <PaddingSpace top="2rem">
                    <div>
                      <Paragraph>We provide access to high quality trainings for front or back end development while incorporating problem solving and collaborative skills. We give our fellows access to market and available opportunities in the work sector by providing guidance using people and relevant tools. </Paragraph>
                      <Paragraph>We utilize the blended learning process and strong evaluation metrics to ensure that our fellows are adequately prepared to tackle real life challenges.</Paragraph>
                    </div>
                  </PaddingSpace>
                </Vision>
              <Image src="./about-what.svg" position={" "} alt="People in fromt of computer" ></Image>
            </VisionWrap>
          </MarginSpace>
          <div className="mt-5">
            <ApplyNowAction className="p-5">
              <SubHead className="text-center" color="#ffffff">Do not be left out</SubHead>
              <CenterParagraph className="text-center" color="#FFFFFF">Whether you are completely new to coding or had prior experience,  we will help you accelerate your dream of becoming a world-class software developer or designer in record time.</CenterParagraph>
              <ApplyButton>Apply Now</ApplyButton>
            </ApplyNowAction>
          </div>
        </main>
        {/* <Footer /> */}
      {/* </Layout> */}
    </React.Fragment>
  )
}

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
`;

const LightApplyButton = styled(Button)`
  background: white;
  color: #c13147;
  border: 1px solid #c13147;

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
