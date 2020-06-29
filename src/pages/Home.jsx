import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { SubHeader, SectionDiv, Button } from "../components";
import { ReactComponent as Steps3 } from "../assets/icons/3-steps.svg";
import Slider from "react-slick";
import { Link, NavLink } from "react-router-dom";

export const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
              We will help you accelerate your dream of becoming job ready in
              record time.
            </p>
            <a href='#main'>
              <Button className='mt-5'>See the path</Button>
            </a>
          </div>

          <main
            id='carouselExampleSlidesOnly'
            className='carousel slide'
            data-ride='carousel'
            data-interval='2000'
          >
            <main className='carousel-inner'>
              <main className='carousel-item active'>
                <img
                  src='https://res.cloudinary.com/ddxgfwoao/image/upload/q_auto:eco/v1593448126/home_3_wj361n.png'
                  alt='...'
                />
              </main>
              <main className='carousel-item'>
                <img
                  src='https://res.cloudinary.com/ddxgfwoao/image/upload/q_auto:eco/v1593447923/home_2_1_lsrvrn.png'
                  alt='...'
                />
              </main>
              <main className='carousel-item'>
                <img
                  src='https://res.cloudinary.com/ddxgfwoao/image/upload/q_auto:eco/v1593449031/home_1_qnam0p.png'
                  alt='...'
                />
              </main>
            </main>
          </main>
        </section>
      </Hero>
      <main id='main'>
        <TimeLine>
          <section className='container'>
            <SubHeader className='font-weight-light text-center'>
              It Takes Just{" "}
              <strong className='font-weight-bold'>3 Steps</strong>
            </SubHeader>
            <div className='row'>
              <div className='col-md'>
                <div className='mb-5 mb-md-0'>
                  <h4>Get Admitted: </h4>
                  <p>
                    You require a laptop, pass our aptitude test, basic
                    knowledge of HTML, CSS and JavaScript.
                  </p>
                </div>

                <div className='mt-md-37 mb-5 mb-md-0'>
                  <h4>Get Employed: </h4>
                  <p>
                    Upon completion, you will be exposed to internship and job
                    opportunities at partner companies. Earn while you advance
                    your developer career.
                  </p>
                </div>
              </div>
              <div className='col-md-2 d-none d-md-block'>
                <Steps3 />
              </div>
              <div className='col-md'>
                <div className='mt-md-21 mb-5 mb-md-0'>
                  <h4>Get Trained: </h4>
                  <p>
                    Free internet access for entire programme (5 months). Choose
                    either front-end or back-end track. 80% remote and 20%
                    classroom (Abuja and Lagos). Competency-based learning
                  </p>
                </div>
              </div>
            </div>
            <main>
              {" "}
              <Button className='mt-5 '>Apply Now</Button>
            </main>
          </section>
        </TimeLine>
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
                <Link to='/gallery'>
                  <Button className='mt-5'>View Gallery</Button>
                </Link>
              </span>
            </div>
            <img
              src='https://res.cloudinary.com/ddxgfwoao/image/upload/q_auto:eco/v1593446951/our_journey_so_far_ozylur.png'
              alt=''
            />
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
          <div
            id='carouselExampleSlidesOnly'
            className='carousel slide'
            data-ride='carousel'
            data-interval='2000'
          >
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <p>
                  Tiidelab has helped me gain more focus and shed more light on
                  what I want to do and how to go about it. Within the space of
                  five months, I've been able to learn how to look for growing
                  problems in the society, how to come up with a solution and
                  how to create the solution using tech. I've improved not only
                  as a developer and a business personnel but also as a person.
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
                  problems in the society, how to come up with a solution and
                  how to create the solution using tech. I've improved not only
                  as a developer and a business personnel but also as a person.
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
                  problems in the society, how to come up with a solution and
                  how to create the solution using tech. I've improved not only
                  as a developer and a business personnel but also as a person.
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
                  problems in the society, how to come up with a solution and
                  how to create the solution using tech. I've improved not only
                  as a developer and a business personnel but also as a person.
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
      </main>
    </>
  );
};
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

  h2 {
    margin: 2rem 0;
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

const TimeLine = styled.section`
  padding: 5rem 0;

  main {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }

  svg {
    width: 100%;
    position: absolute;
    height: 550px;
    right: 0;
    top: 0;
  }

  @media (min-width: 768px) {
    .col-md-2 {
      -ms-flex: 0 0 16.666667%;
      flex: 0 0 18.666667%;
      max-width: 18.666667%;
    }
    .mt-md-37 {
      margin: 37rem 0;
    }
    .mt-md-21 {
      margin-top: 21rem;
    }
  }
  h4 {
    font-size: 1.98em;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;

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
    position: relative;
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
