import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0,0.8);
  backdrop-filter: blur(4.5px);
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  width: 480px;
  border-radius: 8px;
  padding: 32px;
  margin: 0 15px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      line-height: 0;
      background-color: transparent;
      border-radius: 50px;
      transition: .2s;
      border: 0;
    }

    button:hover {
      transform: scale(1.1);
    }

    strong {
      font-size: 24px;
    }
  }

  .status-container {
    margin-top: 32px;

    small {
      font-size: 14px;
      opacity: .8;
    }

    div {
      margin-top: 8px;
      display: flex;
      gap: 8px;
      align-items: center;
    }
  }

  @media screen and (max-width: 420px) {

    }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-weight: 500;
    font-size: 14px;
    opacity: .8;
  }

  .order-itens {
    margin-top: 16px;

    .item {
      display: flex;

      & + .item {
        margin-top: 16px;
      }

      .product-image {
        width: 70px;
        height: 48px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }

      .product-quantity {
        font-size: 14px;
        color: #666;
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }

      .product-details {
        margin-left: 4px;
        display: flex;
        flex-direction: column;
        gap: 8px;

        span {
          font-size: 14px;
          color: #666;
        }
      }
    }
  }

  .product-total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    span {
      font-weight: 500;
      font-size: 14px;
      opacity: .8;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 32px;


  button:disabled {
    opacity: .5;
    cursor: not-allowed;
  }

  .primary {
    background: #333333;
    border-radius: 48px;
    border: 0;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
  }

  .secondary {
    padding: 14px 24px;
    color: #d73035;
    font-weight: 600;
    border: 0;
    background: transparent;
    margin-top: 12px;
  }
`;
