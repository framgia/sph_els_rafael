import { FC } from 'react';

// import Columns from "./QuizListColumns";
import Table from '@components/UI/Table/Table';
import Boxwidget from '@components/UI/Widget/Boxwidget/Boxwidget';
import Quiz from '../../models/quizModels';
import Spinner from '@components/UI/Spinner/Spinner';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from '../../store/actions/index'
import { bindActionCreators } from 'redux';
import { editQuizAdminModal } from '../../store/actions/action-creator/'
import { connect } from 'react-redux'
import {
  PencilAltIcon,
  MinusCircleIcon,
  PlusCircleIcon
} from "@heroicons/react/solid";

interface RProps {
  loading: boolean;
  data: Quiz[] | null;
}


type Props = RProps & LinkDispatchProps;



const QuizList: FC<Props> = ({ loading, data, editQuizAdminModal }) => {


  const columns = [
    {
      Header: " ",
      columns: [
        {
          Header: "Title",
          accessor: "title",
        },
        {
          Header: "Description",
          accessor: "description",
        },
        {
          width: 150,
          Header: "Action",
          Cell: (data: any) => {
            let {
              row: { original },
            } = data;

            return (
              <>
                <div className="w-full flex flex-end">
                  <button
                    //   onClick={() => props.openModal(original)}
                    className="bg-gray-600 px-5 py-2 rounded-md text-white hover:bg-gray-800"
                  >
                    <PlusCircleIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true" />
                    {" "}
                    Add Word
                  </button>{" "}

                  <button
                    onClick={() => editQuizAdminModal(original)}
                    className="bg-gray-600 px-5 py-2 rounded-md text-white hover:bg-gray-800 "
                  >
                    <PencilAltIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true" />
                    Edit
                  </button>{" "}
                  <button
                    //   onClick={() => warningDeleting(original.u_id)}
                    className="bg-red-700 p-2 rounded-md text-white hover:bg-red-800"
                  >
                    <MinusCircleIcon
                      className="h-5 w-5 text-white"
                      aria-hidden="true" />
                    {" "}
                    Delete
                  </button>
                </div>
              </>
            );
          },
        },
      ],
    },
  ];


  return (
    <>
      <Boxwidget
        action={() => editQuizAdminModal({})}
        title="Quizzes">
        {loading ? (
          <Spinner />
        ) : (
          <Table
            columns={columns}
            data={data}
          />
        )}
      </Boxwidget>
    </>
  )
}

interface LinkDispatchProps {
  editQuizAdminModal: (data: object) => void;
}


const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, Action>, ownProps: RProps): LinkDispatchProps => ({

  editQuizAdminModal: bindActionCreators(editQuizAdminModal, dispatch)
})


export default connect(null, mapDispatchToProps)(QuizList)



