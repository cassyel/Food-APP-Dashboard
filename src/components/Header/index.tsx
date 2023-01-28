import logo from '../../assets/images/logo.svg';
import { Container, Content, PageDetails } from './styles';



export function Header() {
  return (
    <Container>
      <Content>
        <PageDetails>
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </PageDetails>

        <h3>Food APP</h3>
      </Content>
    </Container>
  );
}
