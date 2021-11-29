import { FC } from 'react';

interface AnswerState {
    questionWord: String;
    isCorrect: Boolean;
    userChoice: String;
}

const UserAnswer: FC<AnswerState> = ({ questionWord, isCorrect, userChoice }) => {
    return (
        <div className="flex mb-5 justify-around">
            <div>
                {isCorrect ? (
                    <i className="fas fa-check text-2xl"></i>
                ) : (
                    <i className="fas fa-times text-2xl"></i>
                )}
            </div>
            <div>
                {questionWord}
            </div>
            <div>
                {userChoice}
            </div>
        </div>
    )
}

export default UserAnswer;
