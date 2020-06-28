import React, { memo } from "react";
import styled from "styled-components";
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

const Ally = ({content = "main"}) => {
  return (
      <Wrap href={'#'+content} className="skip_content" aria-label="skip to main content">
        Skip to Content
      </Wrap>
  );
};

export default memo(Ally);
