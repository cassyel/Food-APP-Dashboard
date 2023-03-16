import { Container } from './styles';
import { Orders } from '../Orders';
import { orders, orders2, orders3 } from '../../utils/mockOrders';


export function OrdersBoard() {
  return (
    <Container>
      <Orders icon='⏳' title='Fila de espera' orders={orders} />
      <Orders icon='👨🏼‍🍳' title='Em preparação' orders={orders2}/>
      <Orders icon='✅' title='Pronto' orders={orders3}/>
    </Container>
  );
}
