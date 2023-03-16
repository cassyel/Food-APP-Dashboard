import { Fragment } from 'react';
import { Overlay, ModalBody, OrderDetails, Actions } from './styles';
import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';

interface IOrderModalProps {
  handleModal: (order?: Order) => void;
  order: Order | null
}

function total(order: Order) {
  return formatCurrency(order?.products.reduce((total, { product, quantity }) => {
    return total + (product.price * quantity);
  }, 0) || 0);
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
                        <div
                          className='product-image'
                          style={{ backgroundImage: `url("https://food-app-6n6r.onrender.com/uploads/images/${product.imagePath}")` }}
                          title={product.name}
                        />
                        <span className="product-quantity">{quantity}x</span>
                        <div className="product-details">
                          <strong>{product.name}</strong>
                          <span>{formatCurrency(product.price)}</span>
                        </div>
                      </div>
                    ))
                  }
                </div>

                <div className="product-total">
                  <span>Total</span>
                  <strong>{total(order)}</strong>
                </div>
              </OrderDetails>

              <Actions>
                <button className='primary' type='button'>
                  <span>🧑‍🍳</span>
                  <strong>Iniciar Produção</strong>
                </button>

                <button className='secondary' type='button'>
                  Cancelar Pedido
                </button>
              </Actions>
            </ModalBody>
          </Overlay>
        )
      }
    </Fragment>
  );
}
