import styled from "styled-components";

interface Props {
  children: JSX.Element;
}

const Modal = ({ children }: Props) => {
  return (
    <ModalBox onClick={(event) => event.stopPropagation()}>
      <h1>Modal</h1>
      {children}
    </ModalBox>
  );
};

export default Modal;

const ModalBox = styled.div`
  z-index: 9999;
  background-color: tomato;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
