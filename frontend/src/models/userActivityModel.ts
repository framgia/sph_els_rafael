import UserModel from '@model/userModels';

interface UserActivity {
  id?: string;
  activitable_type: string;
  activitable_id: string;
  created_at?: Date;
  activitable: any;
  user: UserModel;
}

export default UserActivity;
