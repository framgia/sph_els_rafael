import { FC, useEffect, useState } from 'react';
import Quiz from '@model/quizModels'
import QuizCard from './QuizCard';
import { connect } from 'react-redux'
import { getStudentQuizList } from '../../store/actions/action-creator/'
import { RootState } from '@store/reducers'
import { useDispatch } from 'react-redux';
import Spinner from '@components/UI/Spinner/Spinner';
import Pagination from '@components/UI/Pagination';

type Props = LinkStateProps;

const StudentQuiz: FC<Props> = ({ loading, quizList, total }) => {

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(8);

  const paginate = (pageNumber: number) => {
    dispatch(getStudentQuizList(pageNumber));
    setCurrentPage(pageNumber);
  }


  useEffect(() => {
    dispatch(getStudentQuizList());
  }, []);

  return (
    <div className="flex flex-col m-10 bg-gray-900 rounded-xl">
      <h2 className="text-white text-4xl mb-5 p-5">
        Quizzes
      </h2>
      <div className="bg-gray-700 grid gap-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 p-5">
        {
          loading ? (
            <Spinner />
          ) :
            quizList && quizList.map((quiz, key: number) => (
              <QuizCard key={key} quizData={quiz} />
            ))
        }
      </div>
      <div className="flex px-5 py-10">
        <Pagination
          paginate={paginate}
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
          total={total} />
      </div>
    </div>
  )
}

interface LinkStateProps {
  quizList: Quiz[] | null,
  loading: boolean,
  total: number,
}

const mapStateToProps = (state: RootState, ownProps: any): LinkStateProps => ({
  quizList: state.quizStudent.quizList,
  loading: state.quizStudent.quizListloading,
  total: state.quizStudent.quizTotal,
})

export default connect(mapStateToProps, null)(StudentQuiz)
