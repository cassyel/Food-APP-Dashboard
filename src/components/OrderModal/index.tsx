import { Fragment } from 'react';
import { Overlay, ModalBody, OrderDetails, Actions } from './styles';
import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';

interface IOrderModalProps {
  order: Order | null;
  isLoading: boolean;
  handleModal: (order?: Order) => void;
  onCancelOrder: () => Promise<void>;
  onChangeOrderStatus: () => void;
}

function total(order: Order) {
  return formatCurrency(order?.products.reduce((total, { product, quantity }) => {
    return total + (product.price * quantity);
  }, 0) || 0);
}


export function OrderModal({
  handleModal,
  order,
  onCancelOrder,
  isLoading,
  onChangeOrderStatus,
}: IOrderModalProps) {
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
                          style={{ backgroundImage: `url("${import.meta.env.VITE_API_IMAGES}/${product.imagePath}")` }}
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
                {order.status !== 'DONE' && (
                  <Fragment>
                    <button
                      className='primary'
                      type='button'
                      disabled={isLoading}
                      onClick={onChangeOrderStatus}
                    >
                      <span>
                        {order.status === 'WAITING' && '🧑‍🍳'}
                        {order.status === 'IN_PRODUCTION' && '✅'}
                      </span>
                      <strong>
                        {order.status === 'WAITING' && 'Iniciar Produção'}
                        {order.status === 'IN_PRODUCTION' && 'Concluir Pedido'}
                      </strong>
                    </button>


                    <button
                      className='secondary'
                      type='button'
                      onClick={onCancelOrder}
                      disabled={isLoading}
                    >
                  Cancelar Pedido
                    </button>
                  </Fragment>
                )}
              </Actions>
            </ModalBody>
          </Overlay>
        )
      }
    </Fragment>
  );
}
