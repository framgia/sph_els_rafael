import { FC, useState } from 'react';
import Learnword from './Learnword'

interface UserLearnWord {
  wordLearn: string;
  answer: string;
}

const LearnWords: FC = () => {
  const [userLearnWords, setUserLearnWords] = useState<UserLearnWord[]>([
    { wordLearn: "Japanese", answer: "English" },
    { wordLearn: "Japanese", answer: "English" },
    { wordLearn: "Japanese", answer: "English" },
    { wordLearn: "Japanese", answer: "English" },
    { wordLearn: "Japanese", answer: "English" },
    { wordLearn: "Japanese", answer: "English" },
    { wordLearn: "Japanese", answer: "English" },
    { wordLearn: "Japanese", answer: "English" },
    { wordLearn: "Japanese", answer: "English" },
    { wordLearn: "Japanese", answer: "English" },
    { wordLearn: "Japanese", answer: "English" },
    { wordLearn: "Japanese", answer: "English" },
    { wordLearn: "Japanese", answer: "English" },
    { wordLearn: "Japanese", answer: "English" }
  ])

  return (
    <div className="col-span-2">
      <div className="h-150 rounded-lg bg-gray-700 overflow-auto">
        <div className="border-bottom p-5">
          <h2 className="font-sans ">Words Learned</h2>
          <div className="border-0 border-b-2 border-solid border-indigo-500 my-5" />
          <div className="flex align-middle justify-center">
            <div className="flex justify-center h-full align-center">
              <div className="grid grid-cols-2 gap-y-5  w-120 text-center">
                <div className="font-bold text-xl">
                  Words
                </div>
                <div className="font-bold text-xl">
                  Answer
                </div>
                {userLearnWords.map((userLearnWord, key: number) => (
                  <Learnword key={key}
                    wordLearn={userLearnWord.wordLearn}
                    answer={userLearnWord.answer} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default LearnWords;
