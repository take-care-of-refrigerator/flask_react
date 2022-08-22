import styled from "styled-components";

interface Props {
  children: JSX.Element;
}

const Modal = ({ children }: Props) => {
  return (
    <ModalBox onClick={(event) => event.stopPropagation()}>
      <ModalTitle>Modal</ModalTitle>
      {children}
    </ModalBox>
  );
};

export default Modal;

const ModalTitle = styled.h1`
  background-color: #eaeaea;
  color: black;
`

const ModalBox = styled.div`
  z-index: 9999;
  background-color: #eaeaea;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  padding: 12px;
`;
