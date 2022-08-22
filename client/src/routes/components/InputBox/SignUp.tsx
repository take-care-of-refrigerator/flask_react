import React, {useRef, useState} from "react";

const SignUp = () => {
  let userIdRef: React.MutableRefObject<HTMLInputElement | null> = useRef(null);
  const [userId, setUserId] = useState("");
  const [passowrd, setPassword] = useState("");
  return (
    <div>
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
        <button>로그인</button>
      </form>
    </div>
  );
};

export default SignUp;
