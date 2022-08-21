import { useState, FormEvent } from "react";
import { useRecoilState } from "recoil";

import { frigeState } from "../../../states/frigeState";

const FrigeInput = () => {
  const [frige, setFrige] = useRecoilState(frigeState);
  const [inputData, setInputData] = useState("");
  const frigeSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={frigeSubmit}>
        <input
          type="text"
          value={inputData}
          onChange={(event) => setInputData(event.currentTarget.value)}
        />
        <button
          type="button"
          onClick={() => {
            setFrige((prev) => [...prev, { name: inputData, content: "new" }]);
            setInputData("");

          }}
        >
          추가
        </button>
      </form>
    </div>
  );
};

export default FrigeInput;
