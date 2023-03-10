import styled from "styled-components";

const RobotsStyled = styled.ul`
  padding: 3rem;
  list-style: none;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  justify-items: center;

  .button-container {
    background-color: #f1ecec;
    padding: 1rem;
  }

  .button {
    border: solid 1px;
    border-color: #a29c9c;
    color: black;
  }
`;

export default RobotsStyled;
