import {FC,useState} from 'react';
import TableTail from '@components/Table/TableTail';

const AdminQuizzes:FC = (props) =>{
    const [people,setPeople] =useState([
        {
            name:"Rafael",
            department:"sda",
            title: 'Regional Paradigm Technician',
              
            role: 'Admin',
            email: 'jane.cooper@example.com',
        },
        {
            name:"Rafael",
            department:"sda",
            title: 'Regional Paradigm Technician',
              
            role: 'Admin',
            email: 'jane.cooper@example.com',
        },
        {
            name:"Rafael",
            department:"sda",
            title: 'Regional Paradigm Technician',
              
            role: 'Admin',
            email: 'jane.cooper@example.com',
        },
    ]);

    const columns = ['name','title','status','role']

    return(
        <div className="h-96 bg-gray-800 rounded-lg border-white p-5 m-5">
            <TableTail cols={columns} rows={people}/>
        </div>
        )
}

export default AdminQuizzes;