import { FC, useEffect, useState } from 'react';
import { RootState } from '@store/reducers'
import { connect } from 'react-redux';
import Questions from '@model/questionModel';
import Spinner from '@components/UI/Spinner/Spinner'
import UserAnswer from './Useranswer';


interface AnswerState {
    questionWord: String;
    isCorrect: Boolean;
    userChoice: string;
}


type Props = LinkStateProps;

const ResultPage: FC<Props> = ({ userAnswer, questionList }) => {
    const [userAnswerState, setUserAnswerState] = useState<AnswerState[]>([])

    useEffect(() => {
        if (!userAnswer)
            return;
        if (!questionList)
            return;
        const usersAnsweredFunc = () => {
            const newUserAnswer: any = userAnswer.map((answer: any) => {
                let questionFound = questionList.find((question) => {
                    return question.id === answer.question_id
                });

                let userChoice = questionFound &&
                    questionFound.question_choices &&
                    questionFound?.question_choices.find((choice) => {
                        return choice.id === answer.choice_id;
                    });
                return {
                    questionWord: questionFound?.word,
                    userChoice: userChoice?.choice,
                    isCorrect: userChoice?.isCorrect
                };
            })

            setUserAnswerState(newUserAnswer);
        }
        usersAnsweredFunc();
    }, [])

    return userAnswerState.length > -1 ? (
        <>
            <div className="flex justify-between items-center w-150 text-white m-auto">
                <div className="text-2xl font-bold font-sans">
                    Basic 500
                </div>
                <div className="font-sans">
                    Result: {userAnswerState.reduce((currentTotal: any, item) => {
                        if (!item.isCorrect)
                            return currentTotal;
                        return currentTotal + 1;
                    }, 0)}  of {questionList.length}
                </div>
            </div>
            <div className="flex justify-between items-center w-full md:w-150 text-white m-auto">
                <div className="flex flex-col w-full mt-10">
                    <div className="flex justify-around mb-5">
                        <div className="text-center font-sans">
                            {" "}
                        </div>
                        <div className="text-lg font-bold">
                            Word
                        </div>
                        <div className="text-lg font-bold">
                            Answer
                        </div>
                    </div>
                    {userAnswerState.map((state, idx) => (
                        <UserAnswer
                            key={idx}
                            questionWord={state.questionWord}
                            isCorrect={state.isCorrect}
                            userChoice={state.userChoice} />
                    ))}
                </div>
            </div>
        </>
    ) : (
        <Spinner />
    )
}

interface LinkStateProps {
    questionList: Questions[],
    loading: boolean,
    userAnswer: {}[],
}

const mapStateToProps = (state: RootState, ownProps: any): LinkStateProps => ({
    questionList: state.takeQuiz.questionList,
    loading: state.takeQuiz.questionListloading,
    userAnswer: state.takeQuiz.userAnswers,
})

export default connect(mapStateToProps, null)(ResultPage)
