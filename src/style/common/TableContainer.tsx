import styled from "styled-components";
import GuideLine from "@/pages/layout/GuideLine";
import React from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div<{
  width?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
}>`
  width: ${(props) => (props.width ? props.width : "250px")};
  height: ${(props) => (props.height ? props.height : "531px")};
  min-height: ${(props) => (props.minHeight ? props.minHeight : "none")};
  max-height: ${(props) => (props.maxHeight ? props.maxHeight : "none")};
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

const LeftSideWrapper = styled.div`
  display: flex;
  align-items: center;
`;

interface ContainerProps {
  title?: string;
  width?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  buttonPart?: React.ReactNode;
  titlePart?: React.ReactNode;
  children: React.ReactNode;
  explanation?: string;
}

const TableContainer: React.FC<ContainerProps> = ({
  title,
  width,
  height,
  minHeight,
  maxHeight,
  buttonPart,
  titlePart,
  children,
  explanation,
}) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <LeftSideWrapper>
          {!titlePart && <Title>{title}</Title>}
          {titlePart}
          {explanation && <GuideLine explanation={explanation} />}
        </LeftSideWrapper>
        {buttonPart}
      </TitleWrapper>

      <Container
        width={width}
        height={height}
        minHeight={minHeight}
        maxHeight={maxHeight}
      >
        {children}
      </Container>
    </Wrapper>
  );
};

export default TableContainer;
