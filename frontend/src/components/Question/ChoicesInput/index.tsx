import { FC } from 'react';
import Choice from '@model/choicesModel'

interface Props {
  id: number;
  handler: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  btnClick: (id: number) => void;
  isCorrect: boolean;
  choiceText: string;
}

const ChoicesInput: FC<Props> = ({ id, handler, btnClick, isCorrect, choiceText }) => {

  return (
    <div className="my-auto">
      <label className="block text-md font-medium text-gray-700">
        Choice {id + 1}
      </label>
      <input
        type="text"
        id="choice1"
        onChange={(e) => handler(e, id)}
        value={choiceText || ""}
        className={`mt-1 mb-2 b-0 focus:ring-indigo-500 
        focus:border-indigo-500 
        block w-11/12 sm:text-sm rounded-md ${isCorrect && 'border-green-400 border-2 ring-0'}`}
      />
      <div className="w-full flex justify-end">
        <button onClick={() => btnClick(id)} className="px-5 py-2 border-0 rounded-xl bg-blue-900 hover:bg-indigo-700 text-white">Set As Correct Answer</button>
      </div>
    </div>
  )
}

export default ChoicesInput;
