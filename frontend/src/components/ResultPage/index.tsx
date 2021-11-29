import { FC, useEffect } from 'react';
import { RootState } from '@store/reducers'
import { connect } from 'react-redux';
import Spinner from '@components/UI/Spinner/Spinner'
import UserAnswer from './Useranswer';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from '@store/actions/index'
import { bindActionCreators } from 'redux';
import {
    getUserAnswers,
    getTakeQuizData
} from '@store/actions/action-creator/';
import { useParams } from 'react-router-dom';
import UserAnswerModel from '@model/userAnswerModel';

type Props = LinkStateProps & LinkDispatchProps;

const ResultPage: FC<Props> = ({ checkAnswers, getAnswers, loading, getQuizData }) => {
    let { id } = useParams<any>();

    useEffect(() => {
        if (!checkAnswers)
            return;
        const loadData = () => {
            getAnswers(id);
            getQuizData(id);
        }

        loadData();
    }, [])

    return !loading ? (
        <>
            <div className="flex justify-between items-center w-150 text-white m-auto">
                <div className="text-2xl font-bold font-sans">
                    Basic 500
                </div>
                <div className="font-sans">
                    Result: {checkAnswers.reduce((currentTotal: any, answers) => {
                        if (!answers.question_choice?.isCorrect)
                            return currentTotal;
                        return currentTotal + 1;
                    }, 0)}  of {checkAnswers.length}
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
                    {checkAnswers && checkAnswers.map((answer, idx) => (
                        <UserAnswer
                            key={idx}
                            questionWord={(answer.question && answer.question?.word) || ""}
                            isCorrect={(answer.question_choice
                                && answer.question_choice?.isCorrect) || false}
                            userChoice={(answer.question_choice &&
                                answer.question_choice.choice)
                                || ""} />
                    ))}
                </div>
            </div>
        </>
    ) : (
        <Spinner />
    )
}

interface LinkStateProps {
    loading: boolean,
    checkAnswers: UserAnswerModel[],
}

interface LinkDispatchProps {
    getAnswers: (id: string) => void;
    getQuizData: (id: string) => void;
}

const mapStateToProps = (state: RootState, ownProps: any): LinkStateProps => ({
    loading: state.takeQuiz.answersLoading,
    checkAnswers: state.takeQuiz.checkAnswers
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, Action>, ownProps: any): LinkDispatchProps => ({
    getAnswers: bindActionCreators(getUserAnswers, dispatch),
    getQuizData: bindActionCreators(getTakeQuizData, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage)
