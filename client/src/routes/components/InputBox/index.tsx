import { useLocation } from "react-router-dom";
import FrigeInput from "./FrigeInput";
import SignIn from "./SignIn";

const InputBox = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/")[1];
  const pathComponent = {
    frige: <FrigeInput />,
    "": <SignIn />,
  }[path];

  return <div>{pathComponent}</div>;
};

export default InputBox;
