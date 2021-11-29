import LearnWord from './userLearnWord'

type User = {
  id?: string;
  email: string;
  fname: string;
  mname: string;
  lname: string;
  role?: number;
  user_learn_words?: LearnWord[];
}

export default User;
