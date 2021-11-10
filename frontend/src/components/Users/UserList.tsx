import { FC } from 'react'
import Table from '@components/UI/Table/Table';
import Boxwidget from '@components/UI/Widget/Boxwidget/Boxwidget';
import Columns from "./UserColumns";
import User from 'models/userModels';
import Spinner from '@components/UI/Spinner/Spinner'

interface RProps {
  loading: boolean;
  data: User[] | null;
}


const UserList: FC<RProps> = ({ data, loading }) => {
  return (
    <Boxwidget
      // action={() => editQuizAdminModal({})}
      title="Users"
      btnName="Add User">
      {loading ? (
        <Spinner />
      ) : (
        <Table
          columns={Columns}
          data={data}
        />
      )}
    </Boxwidget>
  )
}

export default UserList

