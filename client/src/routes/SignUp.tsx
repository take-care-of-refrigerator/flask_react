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
        아이디:
        <input
          type="text"
          value={userId}
          onChange={(event) => setUserId(event.currentTarget.value)}
          ref={userIdRef}
        />
        비밀번호:
        <input
          type="password"
          value={passowrd}
          onChange={(event) => setPassword(event.currentTarget.value)}
        />
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
const SignUpButton = styled.button`
  width: 100px;
  margin-top: 10px;
`