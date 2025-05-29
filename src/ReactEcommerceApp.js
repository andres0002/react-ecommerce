// js
// react
import { Provider } from 'react-redux';
// third
import "bootstrap/dist/css/bootstrap.min.css";
// own
import { AppRouters } from './core/routers/AppRouters';
import { store } from "./shared/store";

export const ReactEcommerceApp = () => {
  return (
    <Provider store={store}>
      <AppRouters />
    </Provider>
  );
}
