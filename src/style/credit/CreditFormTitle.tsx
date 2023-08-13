import styled from "styled-components";

const Title = styled.h1`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  margin-left: 8px;
  cursor: pointer;
  padding-right: 4px;
  color: ${(props) => (props.isActive ? "black" : "#d9d9d9")};
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function CreditFormTitle(props) {
  const { isCreditChangeAll, handleCreditChangeAll } = props;
  return (
    <>
      <TitleWrapper>
        <Title
          isActive={!isCreditChangeAll}
          onClick={() => handleCreditChangeAll(false)}
        >
          입력
        </Title>
        <Title>|</Title>
        <Title
          isActive={isCreditChangeAll}
          onClick={() => handleCreditChangeAll(true)}
        >
          전체변경
        </Title>
      </TitleWrapper>
    </>
  );
}

export default CreditFormTitle;
