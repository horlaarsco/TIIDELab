import React from "react";
import { BodyStyling } from "./style";
import styled from 'styled-components'
import { Helmet } from "react-helmet";
import {Link} from 'react-router-dom'

const Wrap = styled.a`
    position: relative;
    left: 3rem;
    color: red;
    transition: 1s easein;
    text-decoration: none !important;
    top: -12rem;
    &:focus {
      top: 0rem;
    }
    &:hover {
      top: 0rem;
    }
  }
`;

const Layout = ({ page = "Home", children }) => {
  return (
    <React.Fragment>
      <BodyStyling>
        <Helmet>
          <meta charSet="utf-8" />
          <title>TiideLab-{page}</title>
          <meta
            name="description"
            content="TiideLab is a tech company that helps to train junior developers"
          />
        </Helmet>
      <Link to={"main"} className="skip_content" aria-label="skip to main content">
        Skip to Content
      </Link>
      </BodyStyling>
      {children}
    </React.Fragment>
  );
};

export default Layout;
