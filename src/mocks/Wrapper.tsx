import { Provider } from "react-redux";
import { store } from "../store";

export interface PropsWrapper {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children }: PropsWrapper): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

export default Wrapper;
