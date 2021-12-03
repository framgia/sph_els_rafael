import { FC, useState, useEffect } from 'react';
import UserDetail from './UserDetail';
import { connect } from 'react-redux'
import { getUserStudentList } from '../../store/actions/action-creator/'
import { RootState } from '../../store/reducers'
import { useDispatch } from 'react-redux';
import User from '@model/userModels';
import Spinner from '@components/UI/Spinner/Spinner';
import Pagination from '@components/UI/Pagination';


type Props = LinkStateProps;

const StudentUser: FC<Props> = ({ loading, userList, total }) => {

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(8);

  const paginate = (pageNumber: number) => {
    dispatch(getUserStudentList(pageNumber));
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    dispatch(getUserStudentList());
  }, []);

  return (
    <div className="flex flex-col m-10 bg-gray-900 rounded-xl">
      <h2 className="text-white text-4xl mb-5 p-5">
        Users
      </h2>
      <div className="bg-gray-700 grid gap-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 p-5">
        {
          loading ? (
            <Spinner />
          ) :
            userList && userList.map((user, key: number) => (
              <UserDetail
                key={key}
                id={user.id}
                fname={user.fname}
                lname={user.lname}
                email={user.email}
                mname={user.mname}
                followers={user.followers}
                photo={user.photo}
              />
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
  userList: User[] | null,
  loading: boolean,
  total: number,
}

const mapStateToProps = (state: RootState, ownProps: any): LinkStateProps => ({
  userList: state.userStudent.userlist,
  loading: state.userStudent.userListLoading,
  total: state.userStudent.userTotal,
})

export default connect(mapStateToProps, null)(StudentUser);
