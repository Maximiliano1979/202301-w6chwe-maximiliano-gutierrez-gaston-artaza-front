import styled from "styled-components";
import "@fontsource/roboto-mono";

const RobotCardStyles = styled.div`
  .card {
    border-radius: 20px;
  }
  .typography {
    font-size: 1.4rem;
    font-family: "Roboto Mono", sans-serif;
  }

  .button-container {
    display: flex;
    justify-content: center;
  }

  button {
    font-size: 1rem;
    background-color: #e1e1e7;
  }
`;

export default RobotCardStyles;
