import { Container } from './styles';
import { Orders } from '../Orders';
import { Order } from '../../types/Order';

const orders: Order[] = [
  {
    _id: '6666666',
    table: '123',
    status: 'WAITING',
    products: [{
      product: {
        name: 'Pizza quatro quijos',
        price: 10,
        imagePath: 'teste.png'
      },
      quantity: 3,
      _id: '777777',
    }],
  },
  {
    _id: '666666',
    table: '123',
    status: 'WAITING',
    products: [{
      product: {
        name: 'Pizza quatro quijos',
        price: 10,
        imagePath: 'teste.png'
      },
      quantity: 3,
      _id: '777777',
    },
    {
      product: {
        name: 'Pizza quatro quijos',
        price: 10,
        imagePath: 'teste.png'
      },
      quantity: 3,
      _id: '777777',
    }],
  }, {
    _id: '66666',
    table: '123',
    status: 'WAITING',
    products: [{
      product: {
        name: 'Pizza quatro quijos',
        price: 10,
        imagePath: 'teste.png'
      },
      quantity: 3,
      _id: '777777',
    }],
  },
  {
    _id: '6666',
    table: '123',
    status: 'WAITING',
    products: [{
      product: {
        name: 'Pizza quatro quijos',
        price: 10,
        imagePath: 'teste.png'
      },
      quantity: 3,
      _id: '777777',
    }],
  },
  {
    _id: '666',
    table: '123',
    status: 'WAITING',
    products: [{
      product: {
        name: 'Pizza quatro quijos',
        price: 10,
        imagePath: 'teste.png'
      },
      quantity: 3,
      _id: '777777',
    }],
  },
  {
    _id: '66',
    table: '123',
    status: 'WAITING',
    products: [{
      product: {
        name: 'Pizza quatro quijos',
        price: 10,
        imagePath: 'teste.png'
      },
      quantity: 3,
      _id: '777777',
    }],
  }
];

const orders2: Order[] = [
  {
    _id: '6',
    table: '123',
    status: 'IN_PROGRESS',
    products: [{
      product: {
        name: 'Pizza quatro quijos',
        price: 10,
        imagePath: 'teste.png'
      },
      quantity: 3,
      _id: '777777',
    },
    {
      product: {
        name: 'Pizza quatro quijos',
        price: 10,
        imagePath: 'teste.png'
      },
      quantity: 3,
      _id: '777777',
    }],
  }
];

export function OrdersBoard() {
  return (
    <Container>
      <Orders icon='⏳' title='Fila de espera' orders={orders} />
      <Orders icon='👨🏼‍🍳' title='Em preparação' orders={orders2}/>
      <Orders icon='✅' title='Pronto' orders={[]}/>
    </Container>
  );
}
