import styled from "styled-components";

interface Props {
  children: JSX.Element;
}

const Modal = ({ children }: Props) => {
  return (
    <ModalContainer onClick={(event) => event.stopPropagation()}>
      <ModalTitle>Modal</ModalTitle>
      <ModalBox>
      {children}
      </ModalBox>
    </ModalContainer>
  );
};

export default Modal;

const ModalTitle = styled.h1`
  background-color: #5F0380;
  width: 100%;
  padding: 4px 8px;
  box-sizing: border-box;
  color: white;
`

const ModalContainer = styled.div`
  z-index: 9999;
  background-color: #efefef;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
`;

const ModalBox = styled.div`
  padding: 12px;
`
