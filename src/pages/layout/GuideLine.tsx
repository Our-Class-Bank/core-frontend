import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) =>
    props.show ? props.theme.mainBlue : props.theme.mainGray};
  border-radius: 20px;
  width: 25px;
  height: 25px;
  border: none;
  font-size: 17px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: ${(props) => props.theme.mainBlue};
  }
`;

const Container = styled.div`
  position: relative; // Ensure the container is relatively positioned
`;

const Explanation = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  background: white;
  border: 1px solid ${(props) => props.theme.mainGray};
  border-radius: 5px;
  padding: 15px;
  position: absolute;
  top: 0;
  left: 40px;
  z-index: 2;
  width: 220px;
  white-space: pre-line;
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border: 1px solid ${(props) => props.theme.mainGray};
  border-radius: 20px;
  width: 25px;
  height: 25px;
  font-size: 20px;
  font-weight: 300;
  cursor: pointer;
  position: absolute;
  top: -10px;
  right: -10px;
  z-index: 1;
`;

interface GuideLineProps {
  explanation: string;
}

const GuideLine: React.FC<GuideLineProps> = ({ explanation }) => {
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <Container>
      <Button
        show={showExplanation}
        onClick={() => setShowExplanation(!showExplanation)}
      >
        ?
      </Button>
      <Explanation show={showExplanation}>
        {explanation}
        <CloseButton onClick={() => setShowExplanation(false)}>x</CloseButton>
      </Explanation>
    </Container>
  );
};

export default GuideLine;
