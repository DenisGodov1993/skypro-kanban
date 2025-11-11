import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 72px;
  font-weight: 700;
  color: #94A6BE;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: #94A6BE;
  margin-bottom: 32px;
`;

const HomeLink = styled(Link)`
  padding: 12px 24px;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565EEF);
  background-color: #FFFFFF;
  color: #565EEF;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    background-color: #565EEF;
    color: #FFFFFF;
  }
`;

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Title>404</Title>
      <Subtitle>Страница не найдена</Subtitle>
      <HomeLink to="/">На главную страницу</HomeLink>
    </Wrapper>
  );
};

export default NotFoundPage;


// const NotFoundPage = () => {
//   return <div>Страница не найдена</div>;
// };

// export default NotFoundPage;
