import React, {useRef, useState} from "react";

import styled from "styled-components";

const SignUp = () => {
  let userIdRef: React.MutableRefObject<HTMLInputElement | null> = useRef(null);
  const [userId, setUserId] = useState("");
  const [passowrd, setPassword] = useState("");
  return (
    <SignContainer>
      <form action="/">
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
        키:
        <input
          type="text"
          value={userId}
          onChange={(event) => setUserId(event.currentTarget.value)}
          ref={userIdRef}
        />
        몸무게:
        <input
          type="text"
          value={userId}
          onChange={(event) => setUserId(event.currentTarget.value)}
          ref={userIdRef}
        />
        성별:
        <input
          type="text"
          value={userId}
          onChange={(event) => setUserId(event.currentTarget.value)}
          ref={userIdRef}
        />
        활동레벨:
        <input
          type="text"
          value={userId}
          onChange={(event) => setUserId(event.currentTarget.value)}
          ref={userIdRef}
        />
        좋아하는 음식1:
        <input
          type="text"
          value={userId}
          onChange={(event) => setUserId(event.currentTarget.value)}
          ref={userIdRef}
        />
        좋아하는 음식2:
        <input
          type="text"
          value={userId}
          onChange={(event) => setUserId(event.currentTarget.value)}
          ref={userIdRef}
        />
        <button>로그인</button>
      </form>
    </SignContainer>
  );
};

export default SignUp;

const SignContainer = styled.div`
  width: 60%;
  margin: 0 auto;
`
