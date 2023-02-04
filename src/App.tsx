import { GlobalStyles } from './styles/GlobalStyles';
import { Fragment } from 'react';
import { Header } from './components/Header';
import { OrdersBoard } from './components/Board';

export function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <OrdersBoard />
    </Fragment>
  );
}
