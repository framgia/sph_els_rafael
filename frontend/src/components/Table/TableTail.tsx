import {FC} from 'react';
// const people = [
//     {
//       name: 'Jane Cooper',
//       title: 'Regional Paradigm Technician',
//       department: 'Optimization',
//       role: 'Admin',
//       email: 'jane.cooper@example.com',
//       image:
//         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//     },
//     // More people...
//   ]

  interface People{
    name:string,
    title:string,
    role:string,
    email:string,
  }

  interface TableProps{
    cols: string[];
    rows: People[],
  }
  
const TableTail:FC<TableProps> = (props) =>{
    return (
        <>
         <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="table-tail">
              <thead className="bg-gray-700">
                <tr>
                  {props.cols.map(columnName =>{
                    return(
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                        >
                      {columnName}
                    </th>)
                  })}
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-blue-50 divide-y divide-blue-200">
                {props.rows.map((person) => (
                  <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                     
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{person.name}</div>
                          <div className="text-sm text-gray-500">{person.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.title}</div>
                   
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
         </div>
        </>
      )
}

export default TableTail;