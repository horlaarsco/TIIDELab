import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ApplyButton = styled.button`
  background: var(--c-color1);
  color: white;
  border: none;
  font-family: "Overpass", sans-serif;
  margin-left: 3rem;
  padding: 0.5rem 1rem;
  position: relative;
  font-size: 1rem;
  &:after {
    content: " ";
    border: 1px solid #c13147;
    position: absolute;
    width: 100%;
    height: 100%;
    left: -7px;
    bottom: -7px;
  }
  @media screen and (max-width:800px){
    margin-left: 2rem !important;
  }
`;

const Hire = styled.a`
  font-family: "Overpass", sans-serif;
  color: #000000 !important;
  text-decoration: none;
`

const Wrapper = styled.div`
  padding-left: 5rem;
  padding-right: 5rem;
  background: rgb(244, 242, 242);
  @media screen and (max-width:800px){
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`

const Nav = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <nav className="navbar navbar-expand-lg navbar-light bg-tiide fixed-top">
          <NavLink to="/" className="navbar-brand">
            <img
              className="img-fluid"
              alt="TiideLab logo"
              src="./asset/img/tiidelab-logo.png"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/contact" className="nav-link">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/gallery" className="nav-link">
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item">
                <Hire className="h-mobile nav-link" to="/hire">Hire</Hire>
              </li>
              <li className="nav-item">
                <ApplyButton className="h-mobile">Apply Now</ApplyButton>
              </li>
            </ul>
          </div>
          <div className="float-right h-desktop">
            <Hire to="/hire">Hire</Hire>
            <ApplyButton>Apply Now</ApplyButton>
          </div>
        </nav>
      </Wrapper>
    </React.Fragment>
  );
};

export default Nav;
