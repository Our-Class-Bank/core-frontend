import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 530px;
  height: 252px;
  background: ${(props) => props.theme.subGray};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 28px;
  overflow: auto;
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 100%; /* Add this line */
  overflow: auto;
  &::-webkit-scrollbar {
    border-radius: 5px;
    width: 10px;
    background-color: #d9d9d9;
  }

  &::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 20px;
    border: 1px solid #d9d9d9;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #a6a6a6;
  }
`;