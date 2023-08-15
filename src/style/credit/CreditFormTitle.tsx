import React from "react";
import styled from "styled-components";

interface TitleProps {
  isActiveProp?: boolean;
}

const Title = styled.h1<TitleProps>`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  margin-left: 8px;
  cursor: pointer;
  padding-right: 4px;
  color: ${(props) => (props.isActiveProp ? "black" : "#d9d9d9")};
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface CreditFormTitleProps {
  isCreditChangeAll: boolean;
  handleCreditChangeAll: (value: boolean) => void;
}

const CreditFormTitle: React.FC<CreditFormTitleProps> = ({
  isCreditChangeAll,
  handleCreditChangeAll,
}) => {
  return (
    <TitleWrapper>
      <Title
        isActiveProp={!isCreditChangeAll}
        onClick={() => handleCreditChangeAll(false)}
      >
        입력
      </Title>
      <Title isActiveProp={isCreditChangeAll}>
        <span>|</span>
      </Title>
      <Title onClick={() => handleCreditChangeAll(true)}>전체변경</Title>
    </TitleWrapper>
  );
};

export default CreditFormTitle;
