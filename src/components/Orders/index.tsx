import { useState, MouseEvent, SyntheticEvent } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';

interface IOrdersProps {
  title: string;
  icon: string;
  orders: Array<Order>
}

interface IModifyModal {
  status: boolean;
  style: 'hidden' | 'visible'
}

export function Orders({ title, icon, orders }: IOrdersProps) {
  const [modalVisible, setModalVisible] = useState(false);

  function modifyModal({ status, style }: IModifyModal) {
    setModalVisible(status);
    document.body.style.overflowY = style;
  }

  function handleOpenModal(event: SyntheticEvent | MouseEvent) {
    return (event?.target as Element).ariaLabel === 'visibleModal'
      ? modifyModal({ status: true, style: 'hidden' })
      : modifyModal({ status: false, style: 'visible' });
  }

  document.addEventListener('keydown', (event) => {
    return event.key === 'Escape'
      ? modifyModal({ status: false, style: 'visible' })
      : null;
  });

  return (
    <Board>
      <OrderModal handleModal={(event) => handleOpenModal(event)} visible={modalVisible} />
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>( {orders.length} )</span>
      </header>
      {
        Boolean(orders.length) && (
          <OrdersContainer>
            {orders.map((order) => (
              <button onClick={(event) => handleOpenModal(event)} type='button' aria-label='visibleModal' key={order._id}>
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
