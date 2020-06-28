import React from "react";
import Layout from '../components/Layout';
import Nav from '../components/Navbar'
import styled from 'styled-components';
import Footer from '../components/Footer/Footer';

const Header = styled.header`
  background: rgb(244, 242, 242);
  width: 100%;
  height: 400px;
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
  font-weight: 600;
  font-size: 2.1rem;
  padding-left: 14rem;
  padding-top: 11rem;
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
  bottom: 7.2rem;
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
  bottom: 3.2rem;
  border-radius: 0 0 0 100px;
  background: var(--c-color4);
  // @media (max-width: 500px) {
  //   width: 14vw;
  //   height: 10vh;
  //   bottom: 5rem;
  // }
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
  padding: 0.5rem 10rem 0.5rem 10rem
`

const SubWrapper = styled.div`
  position: relative;
  bottom: 16rem;
`

const SemiCircle1 = styled.div`
  width: 3.1rem;
  height: 6rem;
  background: ${props => props.bg};
  border-radius: ${props => props.radius};
`;

const SemiCircle2 = styled.div`
  width: 6rem;
  height: 3.1rem;
  top: 23rem;
  left: 21rem;
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
  width: 0.5rem;
  height: 0.5rem;
  background: ${props => props.color};
  position: ${props => props.position};
  top: ${props => props.top};
  left: ${props => props.left};
  right: 0;
  border-radius: 100px;
`;

const Image = styled.img`
  position: absolute;
  height: 400px;
  top: 0;
  left: 4rem;
`

const Who = styled.div`
  background: ${props => props.bg || "var(--c-color1)"};
`

const SubHead = styled.h2`
  color: ${props => props.color || "var(--c-color8)"};
  font-family: 'Overpass', sans-serif;
`;

const BigDivider = styled.div`
  height: 25rem;
  width: 15rem;
  position: absolute;
  border-radius: 124px 0 0 182px;
  right: 0;
  top: -10rem;
  left: auto;
  background: #FF95A5;
  opacity: 10%;
`;

const ApplyNowAction = styled.div`
  background-image: url(./asset/img/leftbg.png);
  width: 100%;
  margin-top: 10rem !important;
  height: 300px;
  margin-top: 5rem;
  background-repeat: no-repeat;
`

const Vision = styled.article`
  margin-top: 5rem;
`

const About = () => {
  return(
    <React.Fragment>
      <Layout page="About">
        <Header>
          <Nav />
          <div>
            <Heading1>About Us</Heading1>
            <Circle1></Circle1>
            <Circle2></Circle2>
          </div>
        </Header>
        <main id="main">
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6">
                <article>
                  <Paragraph>Challenges around getting young people employed and productive in the technological work place inspired the birth of TIIDELab. Since then, we have trained 28 full stack developers through the first cohort of the TIIDELab Fellowship. </Paragraph>
                  <Paragraph>With 50+ years of experience in technology, business development and communications, our team continuously bridges the gap around employment, infrastructure, quality trainings and access to opportunities.  </Paragraph>
                </article>
              </div>
              <div className="col-md-6">
                <SubWrapper>
                  <SemiCircle1 radius="0 0 0 64px" bg="var(--c-color1)"></SemiCircle1>
                  <Image src="./asset/img/about1.png" alt="Woman sitting in front of a computer"></Image>
                  <SmallCircle color="#E7C941" position="absolute" top="1rem" left="25rem"></SmallCircle>
                  <SemiCircle2 radius="0 0 0 64px" bg="var(--c-color8)" position="absolute"></SemiCircle2>
                  <SmallCircle color="var(--c-color8)" position="absolute" top="21rem" left="28rem"></SmallCircle>
                  <SmallCircle color="#E7C941" position="absolute" top="30em" left="5rem"></SmallCircle>
                </SubWrapper>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Who className="p-5">
              <SubHead className="text-center" color="#ffffff">Who We are</SubHead>
              <CenterParagraph color="#ffffff" className="text-center">We are TIIDELab, an acronym for THINK, INNOVATE, IDEATE, DEVELOP and EXECUTE. We are a technology driven enterprise focused on helping African youths thrive and impact their society.</CenterParagraph>
            </Who>
          </div>
          <div style={{position: "relative"}}>
            <BigDivider></BigDivider>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6">
                <div>
                  {/* <SemiCircle3 bg="#E7C941" radius="64px 0 0 64px"></SemiCircle3> */}
                  <Image src="./asset/img/about2.png" alt="People in fromt of computer"></Image>
                </div>
              </div>
              <div className="col-md-6">
                <Vision>
                  <SubHead>Our Vision</SubHead>
                  <Paragraph>- Develop young Africans who use technology enabled means in solving everyday challenges </Paragraph>
                  <Paragraph>- Developing Africa’s largest pool of problem solvers</Paragraph>
                  <Paragraph>- Raising Africa’s next generation of problem solvers.</Paragraph>
                  <Paragraph>- To Build young Africans with a culture of problem solving</Paragraph>
                  <Paragraph>- To Develop Young Africans with a culture of solving problems to African challenges</Paragraph>
                </Vision>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Who className="p-5" bg="#F4F4F4">
              <SubHead className="text-center">Our Mission</SubHead>
              <CenterParagraph className="text-center">We are TIIDELab, an acronym for THINK, INNOVATE, IDEATE, DEVELOP and EXECUTE. We are a technology driven enterprise focused on helping African youths thrive and impact their society.</CenterParagraph>
              <CenterParagraph>By creating an enabling environment, we provide relevant skills and tools to influence the African continent.</CenterParagraph>
            </Who>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6">
                <Vision>
                  <SubHead>What we do</SubHead>
                  <div className="pt-3">
                    <Paragraph>We provide access to high quality trainings for front or back end development while incorporating problem solving and collaborative skills. We give our fellows access to market and available opportunities in the work sector by providing guidance using people and relevant tools. </Paragraph>
                    <Paragraph>We utilize the blended learning process and strong evaluation metrics to ensure that our fellows are adequately prepared to tackle real life challenges.</Paragraph>
                  </div>
                </Vision>
              </div>
              <div className="col-md-6">
                <Image src="./asset/img/about3.png" alt="People in fromt of computer"></Image>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <ApplyNowAction className="p-5">
              <SubHead className="text-center" color="#ffffff">Do not be left out</SubHead>
              <CenterParagraph className="text-center" color="#FFFFFF">Whether you are completely new to coding or had prior experience,  we will help you accelerate your dream of becoming a world-class software developer or designer in record time.</CenterParagraph>
              <ApplyButton>Apply Now</ApplyButton>
            </ApplyNowAction>
          </div>
        </main>
        <Footer />
      </Layout>
    </React.Fragment>
  )
}

export default About;
