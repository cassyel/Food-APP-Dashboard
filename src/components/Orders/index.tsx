import { Container } from './styles';
import { Orders } from '../OrdersBoard';
import { useEffect, useState } from 'react';
import { Order } from '../../types/Order';
import { api } from '../../utils/api';


export function OrdersBoard() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    api.get('/orders')
      .then(({ data }) => {
        setOrders(data);
      });
  }, []);

  function handleCancelOrder(orderId: string) {
    setOrders((prevState) => prevState.filter(order => order._id !== orderId));
  }

  return (
    <Container>
      <Orders
        icon='⏳'
        title='Fila de espera'
        orders={orders.filter((order) => order.status === 'WAITING')}
        onCancelOrder={handleCancelOrder}
      />
      <Orders
        icon='👨🏼‍🍳'
        title='Em preparação'
        orders={orders.filter((order) => order.status === 'IN_PRODUCTION')}
        onCancelOrder={handleCancelOrder}
      />
      <Orders
        icon='✅'
        title='Pronto'
        orders={orders.filter((order) => order.status === 'DONE')}
        onCancelOrder={handleCancelOrder}
      />
    </Container>
  );
}
