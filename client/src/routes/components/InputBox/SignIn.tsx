import React, {useState, useRef, useEffect, FormEvent} from "react";
import styled from "styled-components";
import axios from 'axios'

const SignIn = () => {
  let userIdRef: React.MutableRefObject<HTMLInputElement | null> = useRef(null);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    userIdRef?.current?.focus();
  }, []);

  useEffect(() => {}, [userIdRef]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    axios.post('http://43.200.157.122:5000/', {
      userId,
      password
    })
  }
  return (
    <LoginContainer>
      <form onSubmit={onSubmit}>
        <div>
          아이디:
          <input
            style={{margin: `0 10px`}}
            type="text"
            name="userId"
            value={userId}
            onChange={(event) => setUserId(event.currentTarget.value)}
            ref={userIdRef}
          />
        </div>
        <div>
          비밀번호:
          <input
            style={{margin: `0 10px`}}
            name="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </div>
        <LoginButton type="submit">로그인</LoginButton>
      </form>
    </LoginContainer>
  );
};

export default SignIn;

const LoginContainer = styled.div`
  width: 200px;
  height: 200px;
`

const LoginButton = styled.button`
  border: none;
  background-color: white;
  padding: 4px;
  border-radius: 4px;
`


