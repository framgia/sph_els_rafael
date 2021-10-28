import { FC } from 'react';
import {
    PencilAltIcon,
    MinusCircleIcon,
    PlusCircleIcon
} from "@heroicons/react/solid";

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
                                    //   onClick={() => props.openModal(original)}
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

export default columns;