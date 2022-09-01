import React, {useRef, useState, ChangeEvent} from "react";

import styled from "styled-components";

interface InputProps {
  readonly place: string;
}


const SignUp = () => {
  let userIdRef: React.MutableRefObject<HTMLInputElement | null> = useRef(null);
  const [userId, setUserId] = useState("");
  const [passowrd, setPassword] = useState("");

  const inputUserIdChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserId(event.currentTarget.value)
  }

  const inputPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }
    return (
    <SignContainer>
      <form action="/">
        <SignBox>
          <SignUpInputBox>
        아이디:
        <SignUpInput
          type="text"
          value={userId}
          // @ts-ignore
          place='아이디'
          onChange={inputUserIdChange}
          ref={userIdRef}
        />
          </SignUpInputBox>
          <SignUpInputBox>
        비밀번호:
        <SignUpInput
          type="password"
          // @ts-ignore
          place='비밀번호'
          value={passowrd}
          onChange={inputPasswordChange}
        />
          </SignUpInputBox>
          <SignUpButton>회원가입</SignUpButton>
        </SignBox>
      </form>
    </SignContainer>
  );
};

export default SignUp;

const SignContainer = styled.div`
  width: 100%;
  margin: 40px auto 0;
`
const SignBox = styled.div`
  width: 30%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
const SignUpInputBox = styled.div`
  width: 100%;
`
const SignUpInput = styled.input.attrs<InputProps>(
  ({place}) => ({
    placeholder: `${place}`
  })
)`
  width: 50%;
`

const SignUpButton = styled.button`
  width: 100px;
  margin-top: 10px;
  border: none;
  padding: 10px 0;
  border-radius: 4px;
`