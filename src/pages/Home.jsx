import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { SubHeader, SectionDiv, Button } from "../components";

const Hero = styled.header`
  width: 100%;
  overflow: hidden;
  section {
    display: flex;
    max-width: 1300px;
    margin: 0 auto;
    padding: 6rem 15rem;
    align-items: center;
  }

  p {
    max-width: 480px;
  }

  img {
    width: 520px;
  }

  @media (max-width: 1200px) {
    section {
      padding: 3rem 7rem;
    }

    img {
      width: 500px;
    }
  }

  @media (max-width: 1100px) {
    section {
      padding: 3rem 3rem;
    }

    img {
      width: 400px;
    }
  }
  @media (max-width: 1000px) {
    img {
      width: 300px;
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 6rem 4rem;
      flex-direction: column;
      /* align-items: flex-start; */
    }

    img {
      width: 100%;
      margin-top: 9rem;
      align-self: center;
    }
  }
`;
const Paragraph = styled.p``;

const HParagraph = styled.p`
  color: ${(props) => props.color || "var(--c-color8)"};
  font-weight: 300;
  font-family: "Overpass", sans-serif !important;
  font-size: 2rem;
`;

const Journey = styled.div`
  background: #f4f2f2;

  section {
    display: flex;
    max-width: 1300px;
    margin: 10rem auto;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem 10rem;
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
    section {
      flex-direction: column;
    }
    div {
      padding: 3rem 4rem;
    }

    img {
      order: 2;
      padding: 0;
      width: 100%;
    }
  }
`;

const Count = styled.p`
  color: #c13147;
  font-size: 41px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
`;

const BorderImg = styled.div`
  border-radius: 100px;
  border: ${(props) => props.border};
`;

export const Home = () => {
  return (
    <>
      <Hero>
        <section className=' w-100'>
          <div className='mx-3'>
            <HParagraph>Want to become an employable</HParagraph>
            <SubHeader style={{ color: "#C13147" }}>
              {"< Junior Developer? >"}
            </SubHeader>
            <p>
              we will help you accelerate your dream of becoming job ready in
              record time.
            </p>
            <Button className='mt-5'>Apply Now</Button>
          </div>
          <img src='/home.svg' alt='' />
        </section>
      </Hero>
      <main id='main'>
        <Journey>
          <section>
            <div>
              <SubHeader> Our Journey so far</SubHeader>
              <p>
                Whether you are completely new to coding or had prior
                experience, we will help you accelerate your dream of becoming a
                world-class software developer or designer in record time.
              </p>
              <span>
                <Button className='mt-5'>View Gallery</Button>
              </span>
            </div>
            <img src='/home3.png' />
          </section>
        </Journey>
        <section>
          <div className='container my-5 py-5'>
            <div className='row'>
              <div className='col-md-3 mb-4 text-center col-sm-6'>
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
              <div className='col-md-3 mb-4 text-center col-sm-6'>
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
              <div className='col-md-3 mb-4 text-center col-sm-6'>
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
              <div className='col-md-3 mb-4 text-center col-sm-6'>
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
              Whether you are completely new to coding or had prior experience,
              we will help you accelerate your dream of becoming a world-class
              software developer or designer in record time.
            </p>
            <LightButton>Apply Now</LightButton>
          </SectionDiv>
        </div>
        <Testimonial>
          <p>
            We were in the middle of the largest project we’ve undertaken as a
            business. There’s no way we would have been able to grow as
            aggressively or be as successful as we have been without our Andela
            team.
          </p>
          <h2>Tope Abdulahi</h2>
          <p>
            <i>-Former student/Lead Engineer at Apple</i>
          </p>
        </Testimonial>
      </main>
    </>
  );
};

const Testimonial = styled.div`
  text-align: center;
  padding: 10rem 15rem;

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

// const Timelines = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;

//   div {
//     width: 240px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `;

const LightButton = styled(Button)`
  background: white;
  color: #c13147;
  border: none;

  &:after {
    border: 1px solid white;
  }
`;

// <div style={{ position: "relative" }}>
// <SemiCircle1
//   radius='64px 0 0 0'
//   bg='#FF95A5'
//   width='5.5rem'
//   height='5rem'
//   position='absolute'
//   left='auto'
//   right='0'
//   bottom='30px'
//   opacity='10%'
// ></SemiCircle1>
// </div>
// <Steps className='container'>
// <SubHeader>
//   <Light>It Takes Just</Light> 3 Steps
// </SubHeader>
// <TimeLine>
//   <Timelines style={{ position: "relative" }}>
//     <div className='firstTimeline'>
//       <img src='/1.svg' alt='' />
//       {/* <LeftTimeline>
//         <Plink>Get Admitted: </Plink>
//         <Paragraph>
//           Basic Requirements: Laptop, Knowledge <br /> of HTML, CSS
//           and JavaScript
//         </Paragraph>
//       </LeftTimeline> */}
//     </div>
//     <div className='secondTimeline'>
//       <img src='/2.svg' alt='' />
//     </div>
//     <div className='thirdTimeline'>
//       <img src='/3.svg' alt='' />
//     </div>
//   </Timelines>
// </TimeLine>
// </Steps>

// const Heading1 = styled.h1`
//   color: var(--c-color1);
//   font-family: "Poppins", sans-serif;
//   font-weight: 600;
//   font-size: 2.1rem;
// `;

// const SemiCircle1 = styled.div`
//   width: ${(props) => props.width || "3.1rem"};
//   height: ${(props) => props.height || "6rem"};
//   background: ${(props) => props.bg};
//   border-radius: ${(props) => props.radius};
//   position: ${(props) => props.position};
//   bottom: ${(props) => props.bottom};
//   opacity: ${(props) => props.opacity};
//   left: ${(props) => props.left};
//   right: ${(props) => props.right};
// `;

// const TimeLine = styled.div`
//   position: relative;
//   margin-left: auto;
//   margin-right: auto;
//   margin-bottom: 36rem;
// `;

// const Light = styled.span`
//   font-weight: 300;
// `;
// const SvgImage = styled.img`
//   padding: 0.4rem;
//   position: ${(props) => props.position};
//   left: ${(props) => props.left};
//   right: ${(props) => props.right};
//   top: ${(props) => props.top};
// `;

// const Plink = styled.a`
//   text-decoration: none;
//   color: #5c5c5c;
//   transition: 2s ease-in-out;
//   &:hover {
//     color: var(--c-color1) !important;
//   }
// `;

// const LeftTimeline = styled.div`
//   position: absolute;
//   left: -18rem;
//   top: 1.2rem;
// `;

// const LastTimeline = styled.div`
//   position: absolute;
//   left: -15rem;
//   top: 3.5rem;
// `;

// const Steps = styled.div`
//   margin-top: 4rem;
//   display: block;
// `;

// const RightTimeline = styled.div`
//   position: relative;
//   top: -9.5rem;
//   left: 7rem;
// `;
