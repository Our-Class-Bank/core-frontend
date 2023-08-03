import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  gap: 8px;
`;

const Icon = styled.img`
  width: 26px;
  height: 26px;
`;

const Category = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

const Content = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

interface ICardItemProps {
  icon: string;
  category: string;
  content: string;
}

function CardItem({ icon, category, content }: ICardItemProps) {
  return (
    <Container>
      <Icon src={icon} />
      <div>
        <Category>{category}</Category>
        <Content>{content}</Content>
      </div>
    </Container>
  );
}

export default CardItem;
