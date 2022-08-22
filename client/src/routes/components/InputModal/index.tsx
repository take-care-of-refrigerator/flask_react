import { useEffect, useRef } from 'react'

import Modal from "../Modal";
import InputBox from "../InputBox";
import SignUp from "../../components/InputBox/SignUp";


import { isModalState } from "../../../states/frigeState";
import { useRecoilState } from "recoil";

import { useLocation } from "react-router-dom";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const InputModal = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isModal, setIsModal] = useRecoilState(isModalState);

  const toSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
      <InputButton
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          setIsModal(!isModal);
        }}
      >
        {pathname === "/" ? "로그인" : "냉장고 칸 추가"}
      </InputButton>
      <InputButton onClick={toSignUp}>회원가입</InputButton>
      {isModal && <Modal children={<InputBox />} />}
    </>
  );
};

export default InputModal;


const InputButton = styled.button`
  border: none;
  background-color: #fafafa;
  color: #595959;
  padding: 4px;
  border-radius: 2px;
  margin: 0 4px;
`
