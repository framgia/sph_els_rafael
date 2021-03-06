import TableActionColumns from "@components/UI/Table/TableActionColumns";
import Choices from './Choices';
import { editQuestionModal, deleteQuestionData } from '@store/actions/action-creator/'

const columns = [
  {
    Header: "Quiz Table",
    columns: [
      {
        Header: "Question",
        accessor: "word",
      }, {
        width: 250,
        Header: "Choices",
        Cell: (data: any) => {
          let {
            row: { original },
          } = data;
          return (
            <div className="w-full flex flex-col">
              {original.question_choices.map(({ choice, isCorrect, id }: any) => (
                <Choices key={id} choice={choice} isCorrect={isCorrect} />
              ))}
            </div>
          );
        },
      },
      {
        width: 100,
        Header: "Action",
        Cell: (data: any) => {
          let {
            row: { original },
          } = data;

          return (
            <div className="w-full flex flex-end">
              <TableActionColumns
                original={original}
                editAction={() => editQuestionModal(original)}
                deleteAction={() => deleteQuestionData(original.id)}
              />
            </div>
          );
        },
      },
    ],
  },
];

export default columns;
