import TableActionColumns from "@components/UI/Table/TableActionColumns";

const columns = [
  {
    Header: " ",
    columns: [
      {
        Header: "Question",
        accessor: "question",
      },
      {
        width: 150,
        Header: "Action",
        Cell: (data: any) => {
          let {
            row: { original },
          } = data;

          return (
            <div className="w-full flex flex-end">
              <TableActionColumns
                original={original}
              />
            </div>
          );
        },
      },
    ],
  },
];

export default columns;
