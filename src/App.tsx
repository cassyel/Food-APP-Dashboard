import { GlobalStyles } from './styles/GlobalStyles';
import { Fragment } from 'react';
import { Header } from './components/Header';

export function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Header />
    </Fragment>
  );
}
