import { Order } from '../types/Order';

export const orders: Order[] = [
  {
    _id: '6666666',
    table: '123',
    status: 'WAITING',
    products: [{
      product: {
        name: 'Pizza quatro queijos',
        price: 10,
        imagePath: '1678765137928-quatro-queijos.png'
      },
      quantity: 3,
      _id: '77777777777',
    }],
  },
  {
    _id: '666666',
    table: '123',
    status: 'WAITING',
    products: [{
      product: {
        name: 'Pizza quatro queijos',
        price: 10,
        imagePath: '1678765137928-quatro-queijos.png'
      },
      quantity: 3,
      _id: '7777777777',
    },
    {
      product: {
        name: 'Pizza quatro queijos',
        price: 10,
        imagePath: '1678765137928-quatro-queijos.png'
      },
      quantity: 3,
      _id: '777777777',
    }],
  }, {
    _id: '66666',
    table: '123',
    status: 'WAITING',
    products: [{
      product: {
        name: 'Pizza quatro queijos',
        price: 10,
        imagePath: '1678765137928-quatro-queijos.png'
      },
      quantity: 3,
      _id: '77777777',
    }],
  },
  {
    _id: '6666',
    table: '123',
    status: 'WAITING',
    products: [{
      product: {
        name: 'Pizza quatro queijos',
        price: 10,
        imagePath: '1678765137928-quatro-queijos.png'
      },
      quantity: 3,
      _id: '7777777',
    }],
  },
  {
    _id: '666',
    table: '123',
    status: 'WAITING',
    products: [{
      product: {
        name: 'Pizza quatro queijos',
        price: 10,
        imagePath: '1678765137928-quatro-queijos.png'
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
        name: 'Pizza quatro queijos',
        price: 10,
        imagePath: '1678765137928-quatro-queijos.png'
      },
      quantity: 3,
      _id: '77777',
    }],
  }
];

export const orders2: Order[] = [
  {
    _id: '6',
    table: '123',
    status: 'IN_PRODUCTION',
    products: [{
      product: {
        name: 'Pizza quatro queijos',
        price: 10,
        imagePath: '1678765137928-quatro-queijos.png'
      },
      quantity: 3,
      _id: '7777',
    },
    {
      product: {
        name: 'Coca cola',
        price: 7,
        imagePath: '1678765239870-coca-cola.png'
      },
      quantity: 3,
      _id: '777',
    }],
  }
];

export const orders3: Order[] = [
  {
    _id: '0',
    table: '123',
    status: 'DONE',
    products: [{
      product: {
        name: 'Pizza quatro queijos',
        price: 10,
        imagePath: '1678765137928-quatro-queijos.png'
      },
      quantity: 3,
      _id: '77',
    },
    {
      product: {
        name: 'Pizza quatro queijos',
        price: 10,
        imagePath: '1678765137928-quatro-queijos.png'
      },
      quantity: 3,
      _id: '7',
    }],
  }
];
