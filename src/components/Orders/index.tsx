import { Container } from './styles';
import { Orders } from '../OrdersBoard';
import { useEffect, useState } from 'react';
import { Order } from '../../types/Order';
import { api } from '../../utils/api';

import socketIo from 'socket.io-client';

export function OrdersBoard() {
  const [orders, setOrders] = useState<Order[]>([]);
  // import.meta.env.VITE_API_BASE

  useEffect(() => {
    const socket = socketIo(import.meta.env.VITE_API_BASE, {
      transports: ['websocket'],
    });

    socket.on('orders@new', (order) => {
      setOrders((prevState) => prevState.concat(order));
    });
  }, []);

  useEffect(() => {
    api.get('/orders')
      .then(({ data }) => {
        setOrders(data);
      });
  }, []);

  function handleCancelOrder(orderId: string) {
    setOrders((prevState) => prevState.filter(order => order._id !== orderId));
  }

  function handleOrderStatusChange(orderId: string, status: Order['status']) {
    setOrders((prevState) => prevState.map(order => (
      order._id === orderId
        ? { ...order, status }
        : order
    )));
  }

  return (
    <Container>
      <Orders
        icon='⏳'
        title='Fila de espera'
        orders={orders.filter((order) => order.status === 'WAITING')}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <Orders
        icon='👨🏼‍🍳'
        title='Em preparação'
        orders={orders.filter((order) => order.status === 'IN_PRODUCTION')}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <Orders
        icon='✅'
        title='Pronto'
        orders={orders.filter((order) => order.status === 'DONE')}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
    </Container>
  );
}
