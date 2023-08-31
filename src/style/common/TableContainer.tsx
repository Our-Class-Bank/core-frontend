import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div<{ width?: string }>`
  width: ${(props) => (props.width ? props.width : "250px")};
  height: 531px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  margin: 0px 4px;
  padding: 12px;
  overflow-y: auto;
`;

const Title = styled.h1`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  margin-left: 8px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
`;
interface ContainerProps {
  title?: string;
  width?: string;
  buttonPart?: React.ReactNode;
  titlePart?: React.ReactNode;
  children: React.ReactNode;
}

const TableContainer: React.FC<ContainerProps> = ({
  title,
  width,
  buttonPart,
  titlePart,
  children,
}) => {
  return (
    <Wrapper>
      <TitleWrapper>
        {!titlePart && <Title>{title}</Title>}
        {titlePart}
        {buttonPart}
      </TitleWrapper>

      <Container width={width}>{children}</Container>
    </Wrapper>
  );
};

export default TableContainer;
