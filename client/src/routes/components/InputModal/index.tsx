import Modal from "../Modal";
import InputBox from "../InputBox";

import { isModalState } from "../../../states/frigeState";
import { useRecoilState } from "recoil";

import { useLocation } from "react-router-dom";

const InputModal = () => {
  const { pathname } = useLocation();
  const [isModal, setIsModal] = useRecoilState(isModalState);

  return (
    <div>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          setIsModal(!isModal);
        }}
      >
        {pathname === "/" ? "sign in" : "냉장고 칸 추가"}
      </button>
      {isModal && <Modal children={<InputBox />} />}
    </div>
  );
};

export default InputModal;
