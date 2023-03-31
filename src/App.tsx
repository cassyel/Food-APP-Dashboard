import { GlobalStyles } from './styles/GlobalStyles';
import { Fragment, useEffect } from 'react';
import { Header } from './components/Header';
import { OrdersBoard } from './components/Orders';
import { api } from './utils/api';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  useEffect(() => {
    api
      .post('/login', {
        name: import.meta.env.VITE_AUTHORIZATION_NAME,
        email: import.meta.env.VITE_AUTHORIZATION_EMAIL,
        password: import.meta.env.VITE_AUTHORIZATION_PASSWORD,
      })
      .then(({ data }) => {
        api.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      });
  }, []);

  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <OrdersBoard />
      <ToastContainer position='bottom-center'/>
    </Fragment>
  );
}
