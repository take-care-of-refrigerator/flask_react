import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const SignIn = () => {
  let userIdRef: React.MutableRefObject<HTMLInputElement | null> = useRef(null);
  const [userId, setUserId] = useState("");
  const [passowrd, setPassword] = useState("");
  useEffect(() => {
    userIdRef?.current?.focus();
  }, []);

  useEffect(() => {}, [userIdRef]);
  return (
    <div>
      <form action="/">
        아이디:
        <input
          style={{margin: `0 10px`}}
          type="text"
          value={userId}
          onChange={(event) => setUserId(event.currentTarget.value)}
          ref={userIdRef}
        />
        비밀번호:
        <input
          style={{margin: `0 10px`}}
          type="password"
          value={passowrd}
          onChange={(event) => setPassword(event.currentTarget.value)}
        />
        <button>로그인</button>
      </form>
    </div>
  );
};

export default SignIn;



