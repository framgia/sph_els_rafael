import {FC,useState} from 'react';
import TableTail from '@components/Table/TableTail';
import Table from '@components/Table/Table';

const AdminQuizzes:FC = (props) =>{
    const [people,setPeople] =useState([
        {
            title:"Rafael",
            description:"sda",
        },
       
    ]);

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
              Cell: (data:any) => {
                let {
                  row: { original },
                } = data;
    
                return (
                  <>
                    <button
                    //   onClick={() => props.openModal(original)}
                      className="bg-gray-600 px-5 py-2 rounded-md text-white "
                    >
                      Edit
                    </button>{" "}
                    <button
                    //   onClick={() => warningDeleting(original.u_id)}
                      className="bg-red-700 p-2 rounded-md text-white"
                    >
                      Delete
                    </button>
                  </>
                );
              },
            },
          ],
        },
      ];
    

    // const columns = ['name','title','status','role']

    return(
        <div className="h-96 bg-gray-800 rounded-lg border-white p-5 m-5">
            
           <Table
                // className="table table-striped table-bordered table-hover"
                columns={columns}
                data={people}
                // selectedRows={props.selectedRows}
                // setSelectedRows={props.setSelectedRows}
              />
        </div>
        )
}

export default AdminQuizzes;