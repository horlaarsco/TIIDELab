import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
    background-image: linear-gradient(270deg, #FFF5C9 0.14%, #FFC5D2 100%);
`

const Paragraph = styled.p`
  color: ${props =>  props.color || "var(--c-color8)"};
  font-weight: 300;
  font-family: 'Overpass', sans-serif !important;
`

const Fheading = styled.h5`
    color: #616161;
    font-family: 'Overpass', sans-serif !important;
    font-weight: 400;
`

const Flink = styled.a`
    color: #292929;
    text-decoration: none;
    font-weight: 300;
    padding-top: 1rem;
    font-family: 'Overpass', sans-serif !important;
    display: block;
`

export const Footer = () => {

    return(
        <Foot>
            <div className="container">
                <div className="row pt-5 pb-5">
                    <div className="col-md-4">
                        <img src="./asset/img/tiidelab-logo.png" alt="tiidelab logo" className="img-fluid"/>
                        <Paragraph color="#292929" className="pt-4">We were in the middle of the largest project we’ve undertaken as a business. There’s no way we would have been able to grow as aggressively or be as successful as we have been without our Andela team.</Paragraph>
                        <Paragraph color="#680D14">Copyright © 2020, TIIDELab.</Paragraph>
                    </div>
                    <div className="col-md-2">
                        <Fheading>Learn More</Fheading>
                        <Flink className="pt-4">Apply</Flink>
                        <Flink>FAQ'S</Flink>
                        <Flink>{"Term's & Conditions"}</Flink>
                        <Flink>Help Center</Flink>
                    </div>
                    <div className="col-md-2">
                        <Fheading>Company</Fheading>
                        <Flink className="pt-4">About Us</Flink>
                        <Flink>Gallery</Flink>
                        <Flink>Contact Us</Flink>
                        <Flink>Hire a Developer</Flink>
                    </div>
                    <div className="col-md-2">
                        <Fheading>Connect</Fheading>
                        <Flink className="pt-4">Twitter</Flink>
                        <Flink>Instagram</Flink>
                        <Flink>Facebook</Flink>
                        <Flink>hello@TIIDELab.com</Flink>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </Foot>
    )
};