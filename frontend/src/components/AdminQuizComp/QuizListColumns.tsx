import {
    PlusCircleIcon
} from "@heroicons/react/solid";
import { editQuizAdminModal, deleteQuizData } from '../../store/actions/action-creator/'
import TableActionColumns from "@components/UI/Table/TableActionColumns";
import { Link } from "react-router-dom";


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
                                <Link
                                    to={`/quizzes/${original.id}/question`}
                                    className="bg-gray-600 px-5 py-2 rounded-md text-white hover:bg-gray-800"
                                >
                                    <PlusCircleIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true" />
                                    {" "}
                                    Add Question
                                </Link>{" "}
                                <TableActionColumns
                                    original={original}
                                    editAction={() => editQuizAdminModal(original)}
                                    deleteAction={() => deleteQuizData(original.id)}
                                />
                            </div>
                        </>
                    );
                },
            },
        ],
    },
];

export default columns;

