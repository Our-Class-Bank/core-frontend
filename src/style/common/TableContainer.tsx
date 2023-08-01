import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 250px;
  height: 531px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  margin: 0px 4px;
  padding: 12px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  margin-left: 8px;
  margin-bottom: 17px;
`;

function TableContainer(props) {
  const { title } = props;
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Container>{props.children}</Container>
    </Wrapper>
  );
}

export default TableContainer;
