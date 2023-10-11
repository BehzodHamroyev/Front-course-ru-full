import { ReactNode } from "react";
import ReduxStateInterfces from "../config/ReduxInterfaces";
import { Provider } from "react-redux";
import { creatReduxStore } from "../config/store";

interface ReduxProviderInterface {
  children?: ReactNode;
  innitialState?: ReduxStateInterfces;
}

export const StoreProvide = (prop: ReduxProviderInterface) => {
  const { children, innitialState } = prop;

  const store = creatReduxStore( innitialState );

  return <Provider store={store}>{children}</Provider>;
};
