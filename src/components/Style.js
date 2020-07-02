import styled from "styled-components";

export const SectionDiv = styled.div`
  background-image: ${({ bgimage }) => bgimage};
  padding: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${({ bg }) => bg};
  color: ${({ color }) => color || "white"};
  max-width: 1240px;
  margin: 0 auto;
  h3 {
    font-size: 3.5rem;
    margin: 0;
    font-weight: 900;
  }
  @media (max-width: 758px) {
    padding: 5rem 3rem;
  }
  p {
    max-width: 630px;
    line-height: 1.5;
    margin: 2.4rem 0;
  }
`;

export const WineSemiCircle = styled.div`
  height: 100px;
  width: 40px;
  background: #c13147;
  border-bottom-left-radius: 70px;
  margin-right: 1.5rem;
`;

export const Button = styled.button`
  color: white;
  border: none;
  padding: 1rem 3rem;
  position: relative;
  font-size: 1.6rem;
  cursor: pointer;
  background: #c13147;
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

export const TopCircle = styled.div`
  background: #e9e8e8;
  width: 70px;
  height: 70px;
  border-top-left-radius: 70px;
  opacity: 0.5;
`;

export const BottomCircle = styled.div`
  background: #c6c4c4;
  width: 70px;
  height: 70px;
  border-bottom-left-radius: 70px;
  opacity: 0.5;
`;

export const SubHeader = styled.h2`
  font-size: 3.5rem;
  color: #434343;
  font-weight: 900;
  margin: 4rem 0;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const WrapTop = styled.section`
  background: #f4f2f2;
`;

export const Absolute = styled.span`
  position: absolute;
  right: 0;
  top: 80px;
`;

export const Bottom = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 5rem 15rem;
  p {
    width: 572px;
    font-weight: 300;
  }

  strong {
    font-size: 2.5rem;
    font-weight: 600;
  }

  @media (max-width: 1200px) {
    padding: 5rem 10rem;
  }

  @media (max-width: 1000px) {
    padding: 6rem 5rem;
    p {
      max-width: 502px;
    }
  }
  @media (max-width: 870px) {
    p {
      max-width: 402px;
    }
  }
  @media (max-width: 768px) {
    padding: 6rem 3rem;

    p {
      max-width: 100%;
    }
  }
`;
