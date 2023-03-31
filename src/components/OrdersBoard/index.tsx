import { useEffect, useState  } from 'react';
import { Order } from '../../types/Order';
import { api } from '../../utils/api';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';

import { toast } from 'react-toastify';

interface IOrdersProps {
  title: string;
  icon: string;
  orders: Array<Order>;
  onCancelOrder: (orderId: string) => void;
  onChangeOrderStatus: (orderId: string, status: Order['status']) => void;
}

export function Orders({
  title,
  icon,
  orders,
  onCancelOrder,
  onChangeOrderStatus,
}: IOrdersProps) {
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);
  const [isLoading, setIsLoading] = useState(false);
  const scrollBar = document.body.style;

  function handleOpenModal(order?: Order | null) {
    order
      ? (setSelectedOrder(order), scrollBar.overflowY = 'hidden')
      : (setSelectedOrder(null), scrollBar.overflowY = 'visible');
  }

  function handleCloseModal(event: KeyboardEvent) {
    return event.key === 'Escape'
      ? (setSelectedOrder(null), scrollBar.overflowY = 'visible')
      : null;
  }

  async function handleChangeOrderStatus() {
    setIsLoading(true);

    const status = selectedOrder?.status === 'WAITING'
      ? 'IN_PRODUCTION'
      : 'DONE';

    await api.patch(`/orders/${selectedOrder?._id}`,{ status });

    toast.success(`O pedido da mesa ${selectedOrder?.table} teve o status alterado!`);

    onChangeOrderStatus(selectedOrder!._id, status);
    setIsLoading(false);
    setSelectedOrder(null);
  }

  async function handleCancelOrder() {
    setIsLoading(true);

    await api.delete(`/orders/${selectedOrder?._id}`);
    toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado!`);

    onCancelOrder(selectedOrder!._id);
    setIsLoading(false);
    setSelectedOrder(null);
  }

  useEffect(() => {
    document.addEventListener('keydown', handleCloseModal);

    return () => {
      document.removeEventListener('keydown', handleCloseModal);
    };
  }, []);

  return (
    <Board>
      <OrderModal
        order={selectedOrder}
        handleModal={handleOpenModal}
        isLoading={isLoading}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleChangeOrderStatus}
      />
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
