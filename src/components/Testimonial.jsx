import React from "react";
import styled from "styled-components";

export function Testimonial() {
  return (
    <Wrapper>
      <div
        id='carouselExampleControls'
        className='carousel slide'
        data-ride='carousel'
      >
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <p>
              Tiidelab has helped me gain more focus and shed more light on what
              I want to do and how to go about it. Within the space of five
              months, I've been able to learn how to look for growing problems
              in the society, how to come up with a solution and how to create
              the solution using tech. I've improved not only as a developer and
              a business personnel but also as a person.
            </p>
            <h2>Sanusi Micheal HAYATU</h2>
            <p>
              <i>-Tiidelab Fellow</i>
            </p>
            <img
              width='100px'
              src='https://res.cloudinary.com/ddxgfwoao/image/upload/v1593454384/sanusi_Pasport_strd9b.png'
              alt=''
            />
          </div>
          <div className='carousel-item '>
            <p>
              At TIIDELab, I had an extensive learning experience about the
              requisite tech and non-tech skills for survival in the tech
              industry. I had the opportunity to meet wonderful people, learned
              a new Javascript Framework and conquered my fears about CLI
              Environment. With TIIDELab experience, my career in the software
              space has been given a leap to everlasting growth.
            </p>
            <h2>Christainah Oluwakemi OWOYELE</h2>
            <p>
              <i>-Tiidelab Fellow</i>
            </p>
            <img
              width='100px'
              src='https://res.cloudinary.com/ddxgfwoao/image/upload/v1593457186/girl_head_ylqddg.png'
              alt=''
            />
          </div>
          <div className='carousel-item '>
            <p>
              Joining TIIDELab Fellowship was a dream come true in my tech
              journey, it gave me the opportunity to view/understand the Tech
              world better, now I can confidently call myself a junior developer
              because I have gotten foundation and a path to follow in growing
              into a top senior developer in the nearest future.
            </p>
            <h2>Godwin JACOB</h2>
            <p>
              <i>-Tiidelab Fellow</i>
            </p>
            <img
              width='100px'
              src='https://res.cloudinary.com/ddxgfwoao/image/upload/v1593457179/godwin_head_cie1kt.png'
              alt=''
            />
          </div>
          <div className='carousel-item '>
            <p>
              I had basic knowledge of HTML and CSS before TIIDELab and looking
              back, I really did not know how vast software development was. At
              the fellowship, we were taught front end web development
              technologies such as HTML, CSS and JavaScript and VUE JS as a
              JavaScript framework. We also learnt back end web development
              technologies such as Node JS using Express JS as its framework and
              also a database management system, which is MySQL.
            </p>
            <h2>Adebayo AJIBADE</h2>
            <p>
              <i>-Tiidelab Fellow</i>
            </p>
            <img
              width='100px'
              src='https://res.cloudinary.com/ddxgfwoao/image/upload/v1593457391/ajibade_head_hlcqmn.png'
              alt=''
            />
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#carouselExampleControls'
          role='button'
          data-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleControls'
          role='button'
          data-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
