import { FC, useState, useEffect } from 'react';
import { Prompt, useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import {
    getTakeQuizQuestion,
    addUserAnswer,
    getTakeQuizData,
    saveUserAnswers
} from '@store/actions/action-creator/';
import { RootState } from '@store/reducers'
import { ThunkDispatch } from 'redux-thunk';
import { Action } from '@store/actions/index'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Questions from '@model/questionModel';
import Spinner from '@components/UI/Spinner/Spinner'
import Choices from '@model/choicesModel'
import QuizModel from '@model/quizModels';

type Props = LinkStateProps & LinkDispatchProps;

const Quiz: FC<Props> = ({
    questionList,
    getQuestionList,
    loading,
    setUserAnswer,
    getQuizData,
    quizData,
    saveAnswer,
    quizDataLoading,
    userAnswer }) => {

    let { id } = useParams<any>();
    const history = useHistory();
    const [numberQuestion, setNumberQuestion] = useState(0);

    const nextQuestion = (Data: Questions, userAnswerId: number | undefined) => {
        setNumberQuestion(currentNumberQuestion => currentNumberQuestion + 1);

        setUserAnswer({
            question_id: Data.id,
            question_choice_id: userAnswerId,
        })
    }

    useEffect(() => {
        getQuestionList(id);
        getQuizData(id);
    }, [])

    useEffect(() => {

        if (!questionList.length)
            return;

        if (numberQuestion === questionList.length) {
            history.push(`/student/quiz/${id}/result`)
            const saveData = {
                user_answers: [...userAnswer]
            }
            saveAnswer(saveData);
        }

    }, [numberQuestion, userAnswer])

    return loading ? (
        <Spinner />
    ) : (
        <>
            <Prompt when={questionList?.length !== numberQuestion} message="are you sure to leave this quiz page??" />
            <div className="text-white grid gap-2 m-auto w-full md:w-150 lg:grid-cols-3">
                <div className="flex flex-col">
                    <h2>{quizData?.title}</h2>
                    <p>{questionList &&
                        questionList[numberQuestion] &&
                        questionList[numberQuestion].word}</p>
                </div>
                <div className="col-span-2 flex flex-col h-full mt-8">
                    <span className="w-full flex justify-end mb-5">{`${numberQuestion + 1} of ${questionList?.length}`}</span>
                    {questionList && questionList[numberQuestion]
                        && questionList[numberQuestion].question_choices?.map((choice: Choices) => (
                            <div key={choice.id} className="my-auto">
                                <div className="w-full flex">
                                    <button onClick={() => nextQuestion
                                        (questionList[numberQuestion],
                                            choice.id)}
                                        className="px-5 w-full py-2 border-0 rounded-xl bg-purple-600 hover:bg-purple-700 text-white">
                                        {choice.choice}
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}

interface LinkStateProps {
    questionList: Questions[],
    loading: boolean,
    quizData: QuizModel | null,
    quizDataLoading: boolean,
    userAnswer: {}[],
}

interface LinkDispatchProps {
    getQuestionList: (id: string) => void;
    setUserAnswer: (data: object) => void;
    getQuizData: (id: string) => void;
    saveAnswer: (data: any) => void;
}

const mapStateToProps = (state: RootState, ownProps: any): LinkStateProps => ({
    questionList: state.takeQuiz.questionList,
    loading: state.takeQuiz.questionListloading,
    quizData: state.takeQuiz.quizData,
    quizDataLoading: state.takeQuiz.quizDataLoading,
    userAnswer: state.takeQuiz.userAnswers,
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, Action>, ownProps: any): LinkDispatchProps => ({
    getQuestionList: bindActionCreators(getTakeQuizQuestion, dispatch),
    setUserAnswer: bindActionCreators(addUserAnswer, dispatch),
    getQuizData: bindActionCreators(getTakeQuizData, dispatch),
    saveAnswer: bindActionCreators(saveUserAnswers, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
