import { FC, useEffect } from 'react';
import QuizDetails from './QuizDetails';
import QuestionList from './QuestionList';
import { RootState } from '../../store/reducers'
import { ThunkDispatch } from 'redux-thunk';
import { Action } from '../../store/actions/index'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Questions from '@model/questionModel';
import Quiz from '@model/quizModels';
import { useParams } from 'react-router-dom';
import {
  getQuestionList,
  getQuizData,
} from '@store/actions/action-creator/';
import QuestionModal from './QuestionModal'
import { AnimatePresence } from 'framer-motion';

type Props = LinkStateProps & LinkDispatchProps;
const Question: FC<Props> = ({
  getQuestionList, getQuizData,
  questionList, loading,
  quizData, loadingQuizData,
  editQuestionDetails }) => {
  let { id } = useParams<any>();

  useEffect(() => {
    getQuestionList(id);
    getQuizData(id);
  }, [])

  return (
    <>
      <div className="container-fluid grid gap-2 m-10 lg:grid-cols-3 lg:w-full">
        <div className="flex flex-col  mt-5">
          <div className="bg-gray-700 rounde-lg lg:h-150 overflow-y-auto">
            <QuizDetails quizData={quizData} loading={loadingQuizData} />
          </div>
        </div>
        <div className="col-span-2 mr-10">
          <QuestionList data={questionList} loading={loading} />
        </div>
      </div>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {editQuestionDetails && (
          <QuestionModal />
        )}
      </AnimatePresence>
    </>
  )
}

interface LinkStateProps {
  questionList: Questions[] | null,
  quizData: Quiz | null,
  loading: boolean,
  loadingQuizData: boolean,
  editQuestionDetails: Questions | null,
}

interface LinkDispatchProps {
  getQuestionList: (id: string) => void;
  getQuizData: (id: string) => void;
}

const mapStateToProps = (state: RootState, ownProps: any): LinkStateProps => ({
  questionList: state.questions.questionList,
  loading: state.questions.questionListloading,
  quizData: state.questions.quizData,
  loadingQuizData: state.questions.quizDataLoading,
  editQuestionDetails: state.questions.editQuestionDetails,
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, Action>, ownProps: any): LinkDispatchProps => ({
  getQuestionList: bindActionCreators(getQuestionList, dispatch),
  getQuizData: bindActionCreators(getQuizData, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Question)



