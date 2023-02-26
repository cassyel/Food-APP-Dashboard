import { Fragment } from 'react';
import { Overlay, ModalBody, OrderDetails } from './styles';
import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';

interface IOrderModalProps {
  handleModal: (order?: Order) => void;
  order: Order | null
}


export function OrderModal({ handleModal, order }: IOrderModalProps) {
  return (
    <Fragment>
      {
        order && (
          <Overlay onClick={() => handleModal()}>
            <ModalBody onClick={(event) => event.stopPropagation()}>
              <header>
                <strong>Mesa {order.table}</strong>
                <button type='button'>
                  <img src={closeIcon} alt="Icone de fechar" onClick={() => handleModal()}/>
                </button>
              </header>

              <div className="status-container">
                <small>Status do Pedido</small>
                <div>
                  <span>
                    {order.status === 'WAITING' && '⏳'}
                    {order.status === 'IN_PRODUCTION' && '👨🏼‍🍳'}
                    {order.status === 'DONE' && '✅'}
                  </span>
                  <strong>
                    {order.status === 'WAITING' && 'Fila de espera'}
                    {order.status === 'IN_PRODUCTION' && 'Em preparação'}
                    {order.status === 'DONE' && 'Pronto!'}
                  </strong>
                </div>
              </div>

              <OrderDetails>
                <strong>
                  {order.products.length <= 1 ? 'Item' : 'Itens'}
                </strong>

                <div className="order-itens">
                  {
                    order.products.map(({ _id, product, quantity }) => (
                      <div className="item" key={_id}>
                        <img width="70" src={'https://via.placeholder.com/70'} alt={product.name} />
                        <span className="quantity">{quantity}x</span>
                        <div className="product-details">
                          <strong>{product.name}</strong>
                          <span>{formatCurrency(product.price)}</span>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </OrderDetails>
            </ModalBody>
          </Overlay>
        )
      }
    </Fragment>
  );
}
