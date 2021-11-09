import { FC } from 'react'
import Table from '@components/UI/Table/Table';
import Boxwidget from '@components/UI/Widget/Boxwidget/Boxwidget';
import Columns from "./UserColumns";

interface Props {

}

const UserList: FC<Props> = () => {
    return (
        <Boxwidget
            // action={() => editQuizAdminModal({})}
            title="Users"
            btnName="Add User">
            {/* {loading ? (
          <Spinner />
        ) : (
          <Table
            columns={Columns}
            data={data}
          />
        )} */}
            <Table
                columns={Columns}
                data={[]}
            />
        </Boxwidget>
    )
}

export default UserList
