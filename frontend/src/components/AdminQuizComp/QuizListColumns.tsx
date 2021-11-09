import {
    PencilAltIcon,
    MinusCircleIcon,
    PlusCircleIcon
} from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { editQuizAdminModal, deleteQuizData } from '../../store/actions/action-creator/'
import DeleteButton from "@components/UI/Buttons/DeleteButton";
import TableActionColumns from "@components/UI/Table/TableActionColumns";


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
                    const dispatch = useDispatch();
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

