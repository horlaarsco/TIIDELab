import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Head>
      <Link to='/'>
        <img className='navbar-brand' src='/tiidelab-logo.svg' alt='' />
      </Link>
      <Nav>
        <li>
          <Link to='/'> Home</Link>
        </li>
        <li>
          <Link to='/about'> About Us </Link>
        </li>
        <li>
          <Link to='/contact'> Contact Us</Link>
        </li>
        <li>
          <Link to='/gallery'> Gallery</Link>
        </li>
      </Nav>
      <div>
        <Link to='/'> Hire</Link>
        <ApplyButton>Apply Now</ApplyButton>
      </div>
    </Head>
  );
}

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 4rem 5.5rem;
  font-size: 1.9rem;
  align-items: center;
  background: #f4f2f2;
  padding-bottom: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;

  div {
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
  }
`;

const ApplyButton = styled.button`
  background: #c13147;
  color: white;
  border: none;
  margin-left: 6rem;
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

const Nav = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;

  li {
    margin-right: 6rem;
  }
`;
