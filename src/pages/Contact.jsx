import React from "react";
import styled from "styled-components";

export function Contact() {
  return (
    <div>
      <Hero>
        <WrapTop>
          <Absolute>
            <TopCircle></TopCircle>
            <BottomCircle></BottomCircle>
          </Absolute>
          <Top>
            <Header>Contact Us</Header>
            <div>
              <SquareCircle></SquareCircle>
              <img width='350px' src='/Group.png' alt='' />
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
        <form action=''>
          <h2>Send us a Message</h2>
          <input type='text' placeholder='Email Address*' />
          <input type='text' placeholder='Subject*' />
          <textarea
            name=''
            id=''
            rows='5'
            placeholder='Message*            '
          ></textarea>
          <ApplyButton>Send Message</ApplyButton>
        </form>
        <div></div>
      </FormDiv>
      <Faq>
        <span>
          <div>
            <Header>FAQ’s</Header>
            <img width='550px' src='/faq.svg' alt='' />
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
      <ApplyDiv>
        <h3>Do not be left out</h3>
        <p>
          Whether you are completely new to coding or had prior experience, we
          will help you accelerate your dream of becoming a world-class software
          developer or designer in record time.
        </p>
        <LightApplyButton>Apply Now</LightApplyButton>
      </ApplyDiv>
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
const ApplyDiv = styled.div`
  padding: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: black;
  color: white;

  h3 {
    margin: 0;
    font-size: 3.5rem;
    font-weight: 900;
  }

  p {
    max-width: 630px;
    line-height: 1.5;
    margin: 2.4rem 0;
  }
`;

const Faq = styled.div`
  margin-top: 200px;
  span {
    padding: 3rem 15rem;
    background: #f4f4f4;
    display: block;
    div {
      max-width: 1200px;
      margin: 0 auto;
      position: relative;
    }
  }

  img {
    position: absolute;
    right: 0;
    top: -230px;
  }

  div {
    padding: 3rem 15rem;
    margin-top: 10rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  p {
    color: #080808;
    font-weight: 300;
  }
`;

const ApplyButton = styled.button`
  background: #c13147;
  color: white;
  border: none;
  padding: 1rem 3rem;
  position: relative;
  font-size: 1.6rem;
  &:after {
    content: " ";
    border: 1px solid #c13147;
    position: absolute;
    width: 100%;
    height: 100%;
    left: -7px;
    bottom: -7px;
  }
`;

const LightApplyButton = styled(ApplyButton)`
  background: white;
  color: #c13147;
  border: 1px solid #c13147;

  &:after {
    border: 1px solid white;
  }
`;

const FormDiv = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 15rem;

  h2 {
    font-size: 2rem;
    color: #434343;
    margin-bottom: 5rem;
  }

  form {
    width: 575px;
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
    width: 350px;
    border-top-left-radius: 40%;
    border-bottom-left-radius: 40%;
  }
`;

const SquareCircle = styled.div`
  height: 100px;
  width: 50px;
  background: #c13147;
  border-bottom-left-radius: 70px;
  margin-right: 1.5rem;
`;
const TopCircle = styled.div`
  background: #e9e8e8;
  width: 70px;
  height: 70px;
  border-top-left-radius: 70px;
`;

const BottomCircle = styled.div`
  background: #c6c4c4;
  width: 70px;
  height: 70px;
  border-bottom-left-radius: 70px;
`;
const Number = styled.p`
  line-height: 1;
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
const Hero = styled.div`
  position: relative;
  img {
  }
`;

const Header = styled.h2`
  font-size: 3.5rem;
  color: #434343;
  font-weight: 900;
`;

const WrapTop = styled.section`
  background: #f4f2f2;
`;
