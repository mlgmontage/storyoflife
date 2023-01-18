import { store } from "app/store";
import React from "react";
import { Provider } from "react-redux";

export const withStore = (component: () => React.ReactNode) => () => {
  return <Provider store={store}>{component()}</Provider>;
};
