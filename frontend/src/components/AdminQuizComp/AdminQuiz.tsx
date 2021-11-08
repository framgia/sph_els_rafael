import { useEffect, FC } from 'react'
import QuizList from './QuizList'
import QuizModal from './QuizModal'
import { connect } from 'react-redux'
import { getQuizList, editQuizAdminModal } from '../../store/actions/action-creator/'
import Quiz from 'models/quizModels';
import { RootState } from '../../store/reducers'
import { ThunkDispatch } from 'redux-thunk';
import { Action } from '../../store/actions/index'
import { bindActionCreators } from 'redux';

interface QuizState {

}

type Props = QuizState & LinkStateProps & LinkDispatchProps;

const AdminQuiz: FC<Props> = ({ getQuizList, quizList, loading, editQuizListData }) => {

    useEffect(() => {
        getQuizList();
    }, []);


    return (
        <>
            <QuizList loading={loading} data={quizList} />
            {editQuizListData && (
                <QuizModal />
            )}

        </>
    )
}

interface LinkStateProps {
    quizList: Quiz[] | null,
    loading: boolean,
    editQuizListData: object | null,
}

interface LinkDispatchProps {
    getQuizList: () => void;
    editQuizAdminModal: (data: object) => void;
}

const mapStateToProps = (state: RootState, ownProps: QuizState): LinkStateProps => ({
    quizList: state.quizzes.quizList,
    loading: state.quizzes.quizListloading,
    editQuizListData: state.quizzes.editQuizDetails,
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, Action>, ownProps: QuizState): LinkDispatchProps => ({
    getQuizList: bindActionCreators(getQuizList, dispatch),
    editQuizAdminModal: bindActionCreators(editQuizAdminModal, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminQuiz)

