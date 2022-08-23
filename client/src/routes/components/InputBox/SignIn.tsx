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
    axios.post('http://10.0.15.202:5000', {
      userId,
      password
    })
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        아이디:
        <input
          style={{margin: `0 10px`}}
          type="text"
          name="userId"
          value={userId}
          onChange={(event) => setUserId(event.currentTarget.value)}
          ref={userIdRef}
        />
        비밀번호2:
        <input
          style={{margin: `0 10px`}}
          name="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default SignIn;



