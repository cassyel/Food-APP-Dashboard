import { Order } from '../../types/Order';
import { Board, OrdersContainer } from './styles';

interface IOrdersProps {
  title: string;
  icon: string;
  orders: Array<Order>
}

export function Orders({ title, icon, orders }: IOrdersProps) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>( {orders.length} )</span>
      </header>
      { Boolean(orders.length) && (
        <OrdersContainer>
          {orders.map((order) => (
            <button type='button' key={order._id}>
              <strong>Mesa {order.table}</strong>
              {
                order.products.length > 1
                  ? <span>{order.products.length} itens</span>
                  : <span>{order.products.length} item</span>
              }
            </button>
          ))}
        </OrdersContainer>
      )
      }
    </Board>
  );
}
