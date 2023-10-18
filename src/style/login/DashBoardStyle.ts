import { styled } from "styled-components";

export const Container: any = styled.div`
  width: 700px;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  gap: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;

  h1 {
    font-size: 25px;
    text-align: center;
    font-weight: 600;
    color: ${(props) => props.theme.mainBlue};
    margin-bottom: 10px;
  }

  p {
    text-align: center;
    font-size: 18px;
    font-weight: 350;
  }
`;
export const DashboardCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const DashboardCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.mainBlue};
  border-radius: 10px;
  padding: 15px;
  flex: 1;
  margin: 5px;

  span {
    color: white;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
`;

export const Subtitle = styled.span`
  font-size: 13px;
  margin-bottom: 3px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Number = styled.span`
  font-size: 30px;
  font-weight: 400;
`;
