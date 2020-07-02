import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export function Header() {
  const [showNav, setShowNav] = React.useState(false);

  return (
    <Head>
      <span>
        <Link onClick={() => setShowNav(false)} to='/'>
          <img
            className='navbar-brand'
            src='https://res.cloudinary.com/ddxgfwoao/image/upload/q_auto:eco/v1593448767/tiidelab_logo_new_jliy5p.svg'
            alt=''
          />
        </Link>
        <Nav>
          <li>
            <NavLink
              exact
              activeStyle={{
                fontWeight: "700",
                color: "black",
              }}
              to='/'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                fontWeight: "700",
                color: "black",
              }}
              to='/about'
            >
              {" "}
              About Us{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                fontWeight: "700",
                color: "black",
              }}
              to='/contact'
            >
              {" "}
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                fontWeight: "700",
                color: "black",
              }}
              to='/gallery'
            >
              {" "}
              Gallery
            </NavLink>
          </li>
        </Nav>
        <HireBox>
          <Hire>
            <a href='mailto:hi@tiidelab.com'>Hire</a>
          </Hire>
          <ApplyButton href='/apply'>Apply Now</ApplyButton>
        </HireBox>
        <Ham onClick={() => setShowNav(!showNav)}>
          <div></div> <div></div>
          <div></div>
        </Ham>
      </span>

      <MNav showNav={showNav}>
        <ul>
          <li>
            <Link onClick={() => setShowNav(false)} to='/'>
              {" "}
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setShowNav(false)} to='/about'>
              {" "}
              About Us{" "}
            </Link>
          </li>
          <li>
            <Link onClick={() => setShowNav(false)} to='/contact'>
              {" "}
              Contact Us
            </Link>
          </li>
          <li>
            <Link onClick={() => setShowNav(false)} to='/gallery'>
              {" "}
              Gallery
            </Link>
          </li>
          <li>
            <HireLink
              as='a'
              href='mailto:hi@tiidelab.com'
              style={{ color: "#c13147" }}
              onClick={() => setShowNav(false)}
            >
              Hire
            </HireLink>
          </li>
        </ul>
        <div>
          <MobApply to='/apply'>Apply Now</MobApply>
        </div>
      </MNav>
    </Head>
  );
}

const MobApply = styled(Link)`
  background: #c13147;
  color: white !important;
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
  margin-top: -7px;
`;

const HireLink = styled(Link)``;

const Ham = styled.div`
  display: block;
  cursor: pointer;
  /* border: 1px solid #c0c0c0;
  border-radius: 5px;
  width: 40px; */
  div {
    width: 35px;
    height: 5px;
    background-color: #000000;
    margin: 6px 0;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
const MNav = styled.div`
  position: absolute;
  display: ${({ showNav }) => (showNav ? "block" : "none")};
  padding: 0 4rem;
  padding-bottom: 3rem;
  background-color: #f4f2f2;
  width: 100%;
  -webkit-transition: all 0.26s ease-in-out;
  -moz-transition: all 0.26s ease-in-out;
  -ms-transition: all 0.26s ease-in-out;
  -o-transition: all 0.26s ease-in-out;
  transition: all 0.26s ease-in-out;
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 1rem 0;
  }

  button {
    margin: 1rem 0;
    margin-bottom: 0;
  }
`;

const Hire = styled.p`
  font-weight: bold;
  font-size: 1.6rem;
  a {
    color: #c13147;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Head = styled.header`
  position: sticky;
  top: 0;
  padding: 1rem 0;
  z-index: 100;
  background: #f4f2f2;

  span {
    background: #f4f2f2;
    max-width: 1240px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 0.8rem 5.5rem;
    font-size: 1.6rem;
    align-items: center;
  }

  a {
    text-decoration: none;
    font-size: 1.6rem;
  }

  @media (max-width: 1000px) {
    span {
      padding: 0.8rem 2rem;
    }
  }

  @media (max-width: 768px) {
    span {
      padding: 2rem 2rem;
    }
  }
`;

const HireBox = styled.div`
  display: flex;
  align-items: center;
`;

const ApplyButton = styled.a`
  background: #c13147;
  color: white !important;
  border: none;
  margin-left: 6rem;
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
  margin-top: -7px;

  @media (max-width: 768px) {
    display: ${({ mobile }) => (mobile ? "block" : "none")};
  }
`;

const Nav = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
  margin: auto;

  li {
    margin-right: 6rem;
  }

  @media (max-width: 1000px) {
    li {
      margin-right: 3rem;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
