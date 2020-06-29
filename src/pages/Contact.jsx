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
              <WineSemiCircle />
              <img src='/Group.png' alt='' />
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
            <br /> <br /> <strong>Call us for quick response on</strong>
          </p>
          <Number>+234 906 1995 782</Number>
          <p>* Mon - Sat (9am - 6pm). Sun (2pm - 6pm)</p>
        </Bottom>
      </Hero>
      <FormDiv>
        <Form action=''>
          <h2>Send us a Message</h2>
          <input type='text' placeholder='Email Address*' />
          <input type='text' placeholder='Subject*' />
          <textarea
            name=''
            id=''
            rows='5'
            placeholder='Message*            '
          ></textarea>
          <Button>Send Message</Button>
        </Form>
        <div></div>
      </FormDiv>
      <Faq>
        <span>
          <div>
            <SubHeader>FAQ’s</SubHeader>
            <img
              width='550px'
              src='https://res.cloudinary.com/ddxgfwoao/image/upload/v1593437043/Tiidelab_CEO_addressing_fellows_brlsug.jpg'
              alt=''
            />
          </div>
        </span>
        <div>
          <p> 1. What is the duration of the training?</p>
          <Answer>
            <strong> Answer:</strong> it’s a 5 month intensive training
          </Answer>
          <p> 2. Can I apply if I have a job?</p>
          <Answer>
            <strong> Answer:</strong> The training will be very intensive and we
            do not want any distractions that could hinder your progress. It is
            80% remote and 20% physical.
          </Answer>
          <p> 3. What Learning methods will be employed?</p>
          <Answer>
            <strong> Answer:</strong> We use a blended learning approach which
            is 70% self-learning and 30% mentor.
          </Answer>
          <p> 4. Will I get employed after my training?</p>
          <Answer>
            <strong> Answer:</strong> After the training you will be interviewed
            by partner companies who need interns with the possibility of full
            time employment after an evaluation period.
          </Answer>
          <p> 5. Must I reside in Lagos or Abuja?</p>
          <Answer>
            <strong> Answer:</strong> You must not reside in Abuja or Lagos
            provided you will not miss the physical meet up once a week. The
            physical meet up is important requirement and absence won’t be
            tolerated.
          </Answer>
          <p> 6. Will I pay for this opportunity?</p>
          <Answer>
            <strong> Answer:</strong> TIIDELab reduces the burden of this cost
            intensive process on the part of the fellows. We are proud to
            partner with ITF and NECA whose values align with our core mission
            and believe in “Harnessing the African Potential”. Using a very
            competitive selection process, we ensure that passionate individuals
            are selected for this process.
          </Answer>
        </div>
      </Faq>
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
          <LightApplyButton>Apply Now</LightApplyButton>
        </SectionDiv>
      </div>
    </div>
  );
}

const Answer = styled.p`
  display: flex;
  margin-top: 2rem;
  line-height: 1.7;

  strong {
    margin-right: 1rem;
    font-weight: 600;
  }
`;

const Faq = styled.div`
  margin-top: 200px;
  h2 {
    margin: 4rem 0;
  }
  span {
    background: #f4f4f4;
    display: block;
    div {
      padding: 3rem 15rem;

      max-width: 1300px;
      margin: 0 auto;
      position: relative;
    }
  }

  img {
    position: absolute;
    right: 0;
    top: -120px;
  }

  @media (max-width: 768px) {
    img {
      display: none;
    }
  }

  div {
    padding: 3rem 15rem;
    margin-top: 10rem;
    max-width: 1300px;
    margin: 0 auto;
  }
  p {
    color: #080808;
    font-weight: 300;
  }

  @media (max-width: 1200px) {
    div {
      padding: 3rem 10rem;
    }

    span {
      div {
        padding: 5rem 10rem;
      }
    }
  }

  @media (max-width: 1000px) {
    div {
      padding: 3rem 5rem;
    }

    span {
      div {
        padding: 5rem 5rem;
      }
    }
  }

  @media (max-width: 768px) {
    div {
      padding: 3rem 3rem;
    }

    span {
      div {
        padding: 5rem 3rem;
      }
    }
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

const Form = styled.form`
  width: 575px;

  @media (max-width: 768px) {
    width: 100% !important;
    
  }

  @media (max-width: 1200px) {
    width: 400px;x
  }
`;

const FormDiv = styled.div`
  position: relative;
  max-width: 1300px;
  margin: 0 auto;
  padding: 5rem 15rem;
  @media (max-width: 1200px) {
    padding: 5rem 10rem;
  }

  @media (max-width: 1000px) {
    padding: 5rem 5rem;
  }

  @media (max-width: 768px) {
    padding: 6rem 3rem;

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

const Number = styled.p`
  line-height: 1;
`;

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
