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

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      line-height: 0;
      background-color: transparent;
      border-radius: 50px;
      transition: .2s;
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

      img {
        border-radius: 6px;
        max-height: 70px;
        max-width: 70px;
      }

      .quantity {
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
`;
