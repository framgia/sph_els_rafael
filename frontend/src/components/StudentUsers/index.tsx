import { FC, useState } from 'react';
import UserDetail from './UserDetail';
import User from '@model/userModels'

const StudentUser: FC = () => {
  const [userList, setUserList] = useState<User[]>([
    { id: "2", fname: "Sample", lname: "sample LN", mname: "asdasd", email: "asdasd" },
    { id: "3", fname: "Sample", lname: "sample LN", mname: "asdasd", email: "asdasd" },
    { id: "4", fname: "Sample", lname: "sample LN", mname: "asdasd", email: "asdasd" },
    { id: "5", fname: "Sample", lname: "sample LN", mname: "asdasd", email: "asdasd" },
    { id: "6", fname: "Sample", lname: "sample LN", mname: "asdasd", email: "asdasd" },
    { id: "7", fname: "Sample", lname: "sample LN", mname: "asdasd", email: "asdasd" },
    { id: "8", fname: "Sample", lname: "sample LN", mname: "asdasd", email: "asdasd" },
    { id: "9", fname: "Sample", lname: "sample LN", mname: "asdasd", email: "asdasd" },
  ])

  return (
    <div className="flex flex-col m-10">
      <h2 className="text-white text-4xl mb-5">
        Users
      </h2>
      <div className="grid gap-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mr-10">
        {userList.map((user, key: number) => (
          <UserDetail
            key={key}
            id={user.id}
            fname={user.fname}
            lname={user.lname}
            email={user.email}
            mname={user.mname} />
        ))}
      </div>
    </div>
  )
}

export default StudentUser;
