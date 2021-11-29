import { FC } from 'react';
import { RootState } from '@store/reducers'
import { connect } from 'react-redux';
import UserData from '@model/userModels'
import LearnWord from './Learnword'

type Props = LinkStateProps;

const LearnWords: FC<Props> = ({ userData }) => {

  const { user_learn_words } = (userData && userData) || {};

  return (
    <div className="col-span-2">
      <div className="h-150 rounded-lg bg-gray-700 overflow-auto">
        <div className="border-bottom p-5">
          <h2 className="font-sans ">Words Learned</h2>
          <div className="border-0 border-b-2 border-solid border-indigo-500 my-5" />
          <div className="flex align-middle justify-center">
            <div className="flex justify-center h-full align-center">
              <div className="grid grid-cols-2 gap-y-5  w-full md:w-120 text-center">
                <div className="font-bold text-xl">
                  Words
                </div>
                <div className="font-bold text-xl">
                  Answer
                </div>
                {user_learn_words && user_learn_words.map((userLearnWord, key: number) => (
                  <LearnWord key={key}
                    wordLearn={userLearnWord.question_choice.questions?.word || ""}
                    answer={userLearnWord.question_choice.choice} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

interface LinkStateProps {
  userData: UserData | null,

}

const mapStateToProps = (state: RootState, ownProps: any): LinkStateProps => ({
  userData: state.userStudent.userDetail,

})

export default connect(mapStateToProps, null)(LearnWords);

