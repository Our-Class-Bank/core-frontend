import React from "react";
import styled from "styled-components";

interface TitleProps {
  isactive?: boolean;
}

const Title = styled.h1<TitleProps>`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  margin-left: 8px;
  cursor: pointer;
  padding-right: 4px;
  color: ${(props) => (props.isactive ? "black" : "#d9d9d9")};
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
        isactive={!isCreditChangeAll}
        onClick={() => handleCreditChangeAll(false)}
      >
        입력
      </Title>
      <Title isactive={isCreditChangeAll}>
        <span>|</span>
      </Title>
      <Title
        isactive={isCreditChangeAll}
        onClick={() => handleCreditChangeAll(true)}
      >
        전체변경
      </Title>
    </TitleWrapper>
  );
};

export default CreditFormTitle;
