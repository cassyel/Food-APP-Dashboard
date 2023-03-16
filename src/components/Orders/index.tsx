import { useEffect, useState  } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';

interface IOrdersProps {
  title: string;
  icon: string;
  orders: Array<Order>
}

export function Orders({ title, icon, orders }: IOrdersProps) {
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);
  const scrollBar = document.body.style;

  function handleOpenModal(order?: Order | null) {
    order
      ? (setSelectedOrder(order), scrollBar.overflowY = 'hidden')
      : (setSelectedOrder(null), scrollBar.overflowY = 'visible');
  }

  function handleCloseModal() {
    document.addEventListener('keydown', (event) => {
      return event.key === 'Escape'
        ? (setSelectedOrder(null), scrollBar.overflowY = 'visible')
        : null;
    });
  }

  useEffect(() => {
    document.addEventListener('keydown', handleCloseModal);
    return () => {
      document.removeEventListener('keydown', handleCloseModal);
    };
  }, [handleCloseModal, setSelectedOrder]);

  return (
    <Board>
      <OrderModal order={selectedOrder} handleModal={handleOpenModal}/>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>( {orders.length} )</span>
      </header>
      {
        Boolean(orders.length) && (
          <OrdersContainer>
            {orders.map((order) => (
              <button onClick={() => handleOpenModal(order)} type='button' aria-label='visibleModal' key={order._id}>
                <strong aria-label='visibleModal'>Mesa {order.table}</strong>
                {
                  order.products.length <= 1
                    ? <span aria-label='visibleModal'>{order.products.length} item</span>
                    : <span aria-label='visibleModal'>{order.products.length} itens</span>
                }
              </button>
            ))}
          </OrdersContainer>
        )
      }
    </Board>
  );
}
