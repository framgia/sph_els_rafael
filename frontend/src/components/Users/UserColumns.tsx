import TableActionColumns from "@components/UI/Table/TableActionColumns";

const columns = [
  {
    Header: " ",
    columns: [
      {
        Header: "First Name",
        accessor: "fname",
      },
      {
        Header: "Middle Name",
        accessor: "mname",
      },
      {
        Header: "Last name",
        accessor: "lname",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Role",
        accessor: "rolestring",
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

