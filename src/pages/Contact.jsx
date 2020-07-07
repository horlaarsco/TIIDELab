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
} from "../components";

export function Contact() {
  return (
    <div>
      <Hero>
        <WrapTop>
          <Absolute>
            <TopCircle /> <BottomCircle />
          </Absolute>
          <Top>
            <SubHeader>Contact Us</SubHeader>
            <div>
              {/* <WineSemiCircle /> */}
              <img
                src='https://res.cloudinary.com/ddxgfwoao/image/upload/q_auto:eco/v1594053326/Contact_us_latest_xtgk1e.png'
                alt=''
              />
              <span></span>
            </div>
          </Top>
        </WrapTop>
        {/* <Bottom>
          <p>
            <br /> <br /> <strong>Call us today</strong>
          </p>
          <Number> +234 906 0000 293, +234 817 7098 608</Number>
          <p> Mon - Sat (9am - 6pm). Sun (2pm - 6pm)</p>
        </Bottom> */}
      </Hero>
      <FormDiv>
        <Form action='https://formspree.io/xlepwkkp' method='POST'>
          <h2>Send us a Message</h2>
          <input type='text' placeholder='Email Address *' required />
          <input type='text' placeholder='Subject *' required />
          <textarea
            name=''
            id=''
            rows='5'
            placeholder='Message *'
            required
          ></textarea>
          <Button type='submit'>Send Message</Button>
        </Form>
        <div></div>
      </FormDiv>

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
          <LightButton href='/apply'>Apply Now</LightButton>
        </SectionDiv>
      </div>
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

const Form = styled.form`
  width: 575px;

  @media (max-width: 768px) {
    width: 100% !important;
  }

  @media (max-width: 1200px) {
    width: 400px;
  }
`;

const FormDiv = styled.div`
  position: relative;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 15rem;
  margin-top: 10rem;
  margin-bottom: 10rem;
  z-index: -1;
  @media (max-width: 1200px) {
    padding: 5rem 10rem;
  }

  @media (max-width: 1000px) {
    padding: 5rem 5rem;
  }

  @media (max-width: 768px) {
    padding: 6rem 3rem;
    margin-top: 0rem;
    margin-bottom: 5rem;

    div {
      display: none;
    }
  }

  h2 {
    font-size: 2rem;
    color: #434343;
    margin-bottom: 5rem;
  }

  input {
    display: block;
    border: none;
    border-bottom: 1px solid #979797;
    font-size: 1.6rem;
    padding: 1.8rem;
    color: #080808;
    width: 100%;
    margin-bottom: 3rem;
  }

  textarea {
    border: none;
    border-bottom: 1px solid #979797;
    width: 100%;
    margin-bottom: 3rem;
    font-size: 1.6rem;
    padding: 1.8rem;
    color: #080808;
  }

  div {
    position: absolute;
    right: 0;
    top: 0;
    background: #fff5f7;
    height: 100%;
    width: 300px;
    border-top-left-radius: 40%;
    border-bottom-left-radius: 40%;
  }
`;

// const Number = styled.p`
//   line-height: 1;
// `;

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

const Hero = styled.div`
  position: relative;
`;
