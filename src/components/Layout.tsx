import Header from './Header';
import styled from 'styled-components';
import Footer from './Footer';

const Root = styled.div`
  background: #f6f7fc;
  height: 100vh;
  width: 100vw;
  display: flex; ;
`;

const Container = styled.div`
  display: flex;
  padding: 2rem 2rem 0 2rem;
  flex: 1 1 auto;
  flex-direction: column;
`;

export default function Layout({ children }: { children: any }) {
  return (
    <Root>
      <Container>
        <Header></Header>
        {children}
        <Footer></Footer>
      </Container>
    </Root>
  );
}
