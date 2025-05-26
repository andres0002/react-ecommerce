// js
// react
import { Provider } from 'react-redux';
// third
import "bootstrap/dist/css/bootstrap.min.css";
// own
import { RoutersApp } from "./core/routers/RoutersApp";
import { store } from "./shared/store";

export const ReactEcommerceApp = () => {
  return (
    <Provider store={store}>
      <RoutersApp />
    </Provider>
  );
}
