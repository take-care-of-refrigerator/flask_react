import React, {useRef, useState} from "react";

import styled from "styled-components";



const SignUp = () => {
  let userIdRef: React.MutableRefObject<HTMLInputElement | null> = useRef(null);
  const [userId, setUserId] = useState("");
  const [passowrd, setPassword] = useState("");
  return (
    <SignContainer>
      <form action="/">
        <SignBox>
          <SignUpInputBox>
        아이디:
        <SignUpInput
          type="text"
          value={userId}
          onChange={(event) => setUserId(event.currentTarget.value)}
          ref={userIdRef}
        />
          </SignUpInputBox>
          <SignUpInputBox>
        비밀번호:
        <SignUpInput
          type="password"
          value={passowrd}
          onChange={(event) => setPassword(event.currentTarget.value)}
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
  width: 35%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
const SignUpInputBox = styled.div`
  
`
const SignUpInput = styled.input`
  width: 80%;
`

const SignUpButton = styled.button`
  width: 100px;
  margin-top: 10px;
  border: none;
  padding: 10px 0;
  border-radius: 4px;
`