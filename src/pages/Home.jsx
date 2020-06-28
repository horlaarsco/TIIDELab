import React from "react";
import Layout from '../components/Layout';
import Nav from '../components/Navbar';
import styled from 'styled-components';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const ApplyButton = styled.button`
  background: var(--c-color1);
  color: white;
  border: none;
  font-family: "Overpass", sans-serif;
  padding: 0.5rem 1rem;
  position: relative;
  font-size: 1rem;
  &:after {
    content: " ";
    border: 1px solid #c13147;
    position: absolute;
    width: 100%;
    height: 100%;
    left: -7px;
    bottom: -7px;
  }
  @media screen and (max-width:800px){
    margin-left: 2rem !important;
  }
`;

const Header = styled.header`
  background-image: linear-gradient(90deg, #ffffff 69%, #eeeeee 60%);
  width: 100%;
  height: 600px;
`
const Paragraph = styled.p`
  color: ${props =>  props.color || "var(--c-color8)"};
  font-weight: 300;
  font-family: 'Overpass', sans-serif !important;
`
const Heading1 = styled.h1`
  color: var(--c-color1);
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 2.1rem;
`
const Caption = styled.div`
  padding-top: ${props => props.top || "10rem"};
  padding-left: ${props => props.left || "10rem"};
  position: ${props => props.position}
`

const SemiCircle1 = styled.div`
  width: ${props => props.width || "3.1rem"};
  height: ${props => props.height || "6rem"};
  background: ${props => props.bg};
  border-radius: ${props => props.radius};
  position: ${props => props.position};
  bottom: ${props => props.bottom};
  opacity: ${props => props.opacity};
  left: ${props => props.left};
  right: ${props => props.right};
`;

const Image = styled.img`
  height: ${props => props.height || "400px"};
  margin-left: ${props => props.left || "1rem"};
`
const TimeLine = styled.div`
  position: relative;
  margin-left:auto;
  margin-right: auto;
  margin-bottom: 36rem;
`
const SubHead = styled.h2`
  color: ${props => props.color || "var(--c-color8)"};
  font-family: 'Overpass', sans-serif;
  text-align: ${props => props.align || "center"};
  font-size: 2rem;
`;

const Light = styled.span`
  font-weight: 300;
`
const SvgImage = styled.img`
  border-radius: 100px;
  border: ${props => props.border};
  padding: 0.4rem;
  position: ${props => props.position};
  left: ${props => props.left};
  right: ${props => props.right};
  top: ${props => props.top};
`;

const Plink = styled.a`
  text-decoration: none;
  color: #5C5C5C;
  transition: 2s ease-in-out;
  &:hover{
    color: var(--c-color1) !important;
  }
`;

const LeftTimeline = styled.div`
  position: absolute;
  left: -18rem;
  top: 1.2rem;
`;

const LastTimeline = styled.div`
  position: absolute;
  left: -15rem;
  top: 3.5rem;
`;

const Steps = styled.div`
  margin-top: 4rem;
  display: block;
`;

const RightTimeline = styled.div`
  position: relative;
  top: -9.5rem;
  left: 7rem;
`;

const Journey = styled.div`
  background: #F2F2F2;
  height: 350px;
  width: 100%;
  // position: relative;
  
`;

const Count= styled.p`
  color: var(--c-color1);
  font-size: 41px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
`;

const Home  = () => {

  return(
    <React.Fragment>
      <Layout page="Home">
        <Header>
          < Nav />
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Caption top="13rem">
                  <Paragraph>Want to become an employable</Paragraph>
                  <Heading1>{"< Junior Developer? >"}</Heading1>
                  <Paragraph>we will help you accelerate your dream of becoming job ready in record time.</Paragraph>
                  <ApplyButton>Apply Now</ApplyButton>
                </Caption>
              </div>
              <div className="col-md-6">
                <Caption top="5rem" left="0" position="relative">
                  <SemiCircle1 radius="64px 0 0 0" bg="var(--c-color1)" width="5.5rem" height="2.1rem"></SemiCircle1>
                  <Image src="./asset/img/home1.png" alt="Man in front of a computer" height="400px"></Image>
                  <SemiCircle1 radius="0 0 0 64px" bg="#0D218A" width="5.5rem" height="2.1rem" position="absolute" left="19rem" bottom="0"></SemiCircle1>
                </Caption>
              </div>
            </div>
          </div>
        </Header>
        <main id="main">
          <div style={{position: "relative"}}>
            <SemiCircle1 radius="64px 0 0 0" bg="#FF95A5" width="5.5rem" height="5rem" position="absolute" left="auto" right="0" bottom="30px" opacity="10%"></SemiCircle1>
          </div>
          <Steps className="container">
            <SubHead><Light>It Takes Just</Light> 3 Steps</SubHead>
            <TimeLine>
                <div style={{position: "relative"}}>
                  <div className="firstTimeline">
                    <svg width="150px" height="150px" viewBox="0 0 227 253">
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                          <g id="Landing-Page-" transform="translate(-584.000000, -1265.000000)" stroke="#D1D1D1" strokeWidth="3">
                              <path d="M719.393266,1516 L719.393266,1445.97472 C768.881698,1445.97472 809,1405.90986 809,1356.48736 C809,1307.06485 768.881698,1267 719.393266,1267 C669.904833,1267 629.786531,1307.06485 629.786531,1356.48736 L586,1356.48736" id="Oval-Copy-3"></path>
                          </g>
                      </g>
                    </svg>
                    <SvgImage src="./asset/img/feedback.svg" alt="Feedback" position="absolute" left="2.7rem" top="0.6rem" border="2px solid #777777"></SvgImage>
                    <LeftTimeline>
                      <Plink>Get Admitted: </Plink>
                      <Paragraph>Basic Requirements: Laptop, Knowledge <br /> of HTML, CSS and JavaScript</Paragraph>
                    </LeftTimeline>
                  </div>
                </div>
                <div>
                  <div className="secondTimeline">
                    <svg width="60px" height="200px" viewBox="0 0 94 310">
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                          <g id="Landing-Page2" transform="translate(-717.000000, -1512.000000)" stroke="#D1D1D1" strokeWidth="3">
                              <path d="M719.041245,1820 L719,1731.93675 C768.705627,1731.93675 809,1691.90231 809,1642.51731 C809,1593.13231 768.705627,1553.09786 719,1553.09786 L719.056394,1514" id="Oval-Copy-4"></path>
                          </g>
                      </g>
                    </svg>
                    <SvgImage src="./asset/img/e-learning.svg" alt="E-learning" position="absolute"  left="-2.5rem" top="2.3rem" border="2px solid #777777"></SvgImage>
                    <SvgImage src="./asset/img/Path.svg" alt="path" position="relative" left="-9px" top="-18px"></SvgImage>
                    <RightTimeline>
                        <Plink>Get Trained: </Plink>
                        <Paragraph>We use a blended learning process, <br /> 80% remote and 20% physical. <br /> Access to learning platform, <br /> Free Data access for the entire <br /> duration of the course</Paragraph>
                    </RightTimeline>
                  </div>
                </div>
                <div>
                  <div className="thirdTimeline">
                    <svg width="150px" height="150px" viewBox="0 0 232 239">
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                          <g id="Landing-Page2" transform="translate(-578.000000, -1815.000000)" stroke="#D1D1D1" strokeWidth="3">
                              <path d="M722.474809,2049 L722.474809,1998.77129 C771.918207,1998.77129 812,1958.75197 812,1909.38565 C812,1860.01932 771.918207,1820 722.474809,1820 C673.031412,1820 632.949618,1860.01932 632.949618,1909.38565 L576,1909.7192" id="Oval-Copy-5" transform="translate(694.000000, 1934.500000) rotate(-270.000000) translate(-694.000000, -1934.500000) "></path>
                          </g>
                      </g>
                    </svg>
                    <SvgImage src="./asset/img/job-search.svg" alt="Job-Search" position="absolute" left="3rem" top="3rem" border="2px solid #777777"></SvgImage>
                    <LastTimeline>
                      <Plink>Get Employed: </Plink>
                      <Paragraph>You will be exposed to internship <br /> and job opportunities at partner <br /> companies and kick start <br /> your junior developer career.  </Paragraph>
                    </LastTimeline>
                  </div>
                </div>
            </TimeLine>
          </Steps>
          <Journey>
            <div className="container">
              <div className="row">
                <div className="col-6 mt-5 pl-5">
                  <SubHead color="#616161" align="left" className="mt-5">Our Journey so far</SubHead>
                  <Paragraph>Whether you are completely new to coding or had prior experience,  we will help you accelerate your dream of becoming a world-class software developer or designer in record time.</Paragraph>
                  <ApplyButton>View Gallery</ApplyButton>
                </div>
                <div className="col-6">
                  <Image src="./asset/img/home3.png" height="350px"/>
                </div>
              </div>
            </div>
          </Journey>
          <section>
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <CountUp end={700}>
                      {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <div>
                              <Count ref={countUpRef} />
                              <Paragraph>Applicant</Paragraph>
                            </div>
                          </VisibilitySensor>
                      )}
                  </CountUp>
                </div>
                <div className="col-md-3 col-sm-6">
                  <CountUp end={35}>
                      {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <div>
                              <Count ref={countUpRef} />
                              <Paragraph>Accepted</Paragraph>
                            </div>
                          </VisibilitySensor>
                      )}
                  </CountUp>
                </div>
                <div className="col-md-3 col-sm-6">
                  <CountUp end={28}>
                      {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <div>
                              <Count ref={countUpRef} />
                              <Paragraph>Trained</Paragraph>
                            </div>
                          </VisibilitySensor>
                      )}
                  </CountUp>
                </div>
                <div className="col-md-3 col-sm-6">
                  <CountUp end={12}>
                      {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <div>
                              <Count ref={countUpRef} />
                              <Paragraph>Interned</Paragraph>
                            </div>
                          </VisibilitySensor>
                      )}
                  </CountUp>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </React.Fragment>
  )
}

export default Home;
