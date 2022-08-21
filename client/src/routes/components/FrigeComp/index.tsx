import Modal from "../Modal";
import { useState } from 'react'


interface Props {
  arr: string[]
}

const FrigeComp = ({arr}: Props) => {
  const [isModal, setIsModal] = useState(false);
  const [ingredients, setIngredients] = useState<string[]>(arr)
  const [inputValue, setInputValue] = useState('')
  const clickedClose = () => {
    setIsModal(false)
    setIngredients(prev => [...prev, inputValue])
    setInputValue('')
  }

  const deleteIngredient = (idx: number) => {
    const newArr = ingredients.filter((item, index) => index != idx)
    setIngredients(newArr)
  }

  return (
    <div>
      {!isModal && <button type="button" onClick={() => setIsModal(prev => !prev)}>재료 입력</button> }
      {isModal && <input type="text" value={inputValue} onChange={(target) => setInputValue(target.currentTarget.value)} />}
      {isModal && <button type="button" onClick={clickedClose}>입력</button>}
      <ul>
        {ingredients.map((item, index) => {
          const idx = index
          return <p key={item + index}>
            {item}
            <button type="button" onClick={() => deleteIngredient(idx)}>X</button>
          </p>
        })}
      </ul>

    </div>
  )
}

export default FrigeComp;
