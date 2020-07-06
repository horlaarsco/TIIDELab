import React from "react";
import styled from "styled-components";
import {
  TopCircle,
  BottomCircle,
  SubHeader,
  WrapTop,
  Absolute,
} from "../components";

const Hero = styled.div`
  position: relative;
`;

const Top = styled.div`
  padding: 6rem 15rem;
  margin: 0 auto;
  position: relative;
  max-width: 1300px;
  img {
    width: 300px;
  }

  @media (max-width: 1200px) {
    padding: 5rem 10rem;
    & > div {
      right: 0 !important;
    }
  }

  @media (max-width: 1100px) {
    padding: 6rem 5rem;
    img {
      width: 250px;
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

export function FAQ() {
  return (
    <>
      <Hero>
        <WrapTop>
          <Absolute>
            <TopCircle /> <BottomCircle />
          </Absolute>
          <Top>
            <SubHeader>FAQs</SubHeader>
            <div>
              <img
                src='https://res.cloudinary.com/ddxgfwoao/image/upload/q_auto:eco/v1594024258/FAQ_new_bnoohb.png'
                alt=''
              />
              <span></span>
            </div>
          </Top>
        </WrapTop>
      </Hero>
      <Faq>
        <div>
          <p> 1. What is the duration of the training?</p>
          <Answer>
            The TIIDELab Fellowship is a 5-month intensive training from 6th
            August – 19th December, 2020
          </Answer>

          <p> 2. Will I pay for this opportunity?</p>
          <Answer>
            TIIDELab Fellowship is totally free. We are proud to partner with
            ITF and NECA whose values align with our core mission. Also,
            seclected participants would be provided with free data
            subscription.
          </Answer>
          <p> 3. Must I reside in Lagos or Abuja?</p>
          <Answer>
            You must not reside in Abuja or Lagos provided you will not miss the
            physical meet up once a week. The physical meet up is an important
            requirement and will add you to your overall performance score
            required to become a TIIDELab fellow.
          </Answer>
          <p> 4. Can I apply if I have a job?</p>
          <Answer>
            If your job will allow you to take a temporary leave of absence for
            the duration of the training, then we recommend you apply. The
            training will be very intensive and we do not want any distractions
            that could hinder your progress.
          </Answer>
          <p> 5. What Learning methods will be employed?</p>
          <Answer>
            We use a blended learning approach which is a competency based
            self-learning process and mentors available round the clock for
            proper guidance.
          </Answer>
          <p> 6. What might prevent me from graduating?</p>
          <Answer>
            Consecutive failure in completing assigned tasks and absence from
            both remote or physical sessions.
          </Answer>
          <p> 7. Will I get employed after my training?</p>
          <Answer>
            After the training, you will be interviewed by partner companies who
            need interns with the possibility of full-time employment after an
            evaluation period.
          </Answer>
        </div>
      </Faq>
    </>
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
  @media (max-width: 768px) {
    margin-top: 20px;
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

    
    }

    img {
      width: 500px !important;
    }
  }

  @media (max-width: 1000px) {
    div {
      padding: 3rem 5rem;
    }

   
  }

  @media (max-width: 768px) {
    div {
      padding: 3rem 3rem;
    }

   
  }
`;
