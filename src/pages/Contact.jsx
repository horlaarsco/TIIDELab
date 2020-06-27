import React from "react";
import styled from "styled-components";

export function Contact() {
  return (
    <div>
      <Hero>
        <Top>
          <Header>Contact Us</Header>
          <div>
            <TopCircle></TopCircle>
            <BottomCircle></BottomCircle>
          </div>
        </Top>
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
        <Absolute>
          <SquareCircle></SquareCircle>
          <img src='/Group.png' alt='' />
          <span></span>
        </Absolute>
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
    </div>
  );
}

const ApplyButton = styled.button`
  background: #c13147;
  color: white;
  border: none;
  padding: 1rem 3rem;
  position: relative;
  font-size: 1.7rem;
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

const FormDiv = styled.div`
  position: relative;
  padding: 5rem 22rem;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 5rem;
  }

  form {
    width: 575px;
  }
  input {
    display: block;
    border: none;
    border-bottom: 1px solid #979797;
    font-size: 2.2rem;
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
    font-size: 2.2rem;
    padding: 1.8rem;
    color: #080808;
  }

  div {
    position: absolute;
    right: 0;
    top: 0;
    background: #fff5f7;
    height: 100%;
    width: 450px;
    border-top-left-radius: 40%;
    border-bottom-left-radius: 40%;
  }
`;
const Absolute = styled.div`
  position: absolute;
  right: 118px;
  top: 40px;
  display: flex;

  span {
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #e7c941;
  }
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
const Number = styled.p`
  line-height: 1;
`;

const Bottom = styled.div`
  padding: 7rem 22rem;
  p {
    font-size: 1.9rem;
    width: 572px;
    line-height: 1.36;
    font-weight: 300;
  }
`;

const Top = styled.div`
  padding: 8rem 22rem;
  background: #f4f2f2;
  /* width: 572px; */
  position: relative;

  & > div {
    position: absolute;
    bottom: 15px;
    right: 0;
  }
`;
const Right = styled.div`
  flex: 1;

  img {
    margin-right: 11.8rem;
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
  font-size: 4.1rem;
  color: #434343;
  font-weight: bold;
`;
