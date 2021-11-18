import { FC, useState, useEffect } from 'react';
import Modal from '@components/UI/Modal/Modal';
import {
  PlusCircleIcon, SaveIcon
} from "@heroicons/react/solid";
import { RootState } from '@store/reducers'
import { ThunkDispatch } from 'redux-thunk';
import { Action } from '@store/actions/index'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Question from '@model/questionModel';
import Choice from '@model/choicesModel';
import {
  editQuestionModal,
  saveQuestionData,
  updateQuestionData
} from '@store/actions/action-creator/';
import { produce } from 'immer'
import ChoicesInput from './ChoicesInput'
import { useParams } from 'react-router-dom';
import SpinnerBtn from '@components/SVG/SpinnerBtn';
import Swal from 'sweetalert2';

type Props = LinkDispatchProps & LinkStateProps;
const QuestionModal: FC<Props> = ({ editQuestionModal,
  editQuestionDetails,
  saveLoading,
  saveData, error,
  updateData }) => {

  let { id } = useParams<any>();
  const [question, setQuestion] = useState<Question>({
    word: "",
  })

  const [choices, setChoices] = useState<Choice[]>([
    { choice: "", isCorrect: false },
    { choice: "", isCorrect: false },
    { choice: "", isCorrect: false },
    { choice: "", isCorrect: false },
  ]);

  const [errorState, setErrorState] = useState<any>([]);


  useEffect(() => {
    const { word, question_choices, id } = (editQuestionDetails && editQuestionDetails)
      || {
      question_choices: [
        { choice: "", isCorrect: false },
        { choice: "", isCorrect: false },
        { choice: "", isCorrect: false },
        { choice: "", isCorrect: false },
      ]
    }

    editQuestionDetails && setQuestion({
      id,
      word
    })

    question_choices && setChoices(question_choices)

  }, [editQuestionDetails]);

  const questionHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setQuestion({
      ...question,
      [name]: value
    })
  }

  const choiceHandler = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const value = e.target.value;

    setChoices(currentChoices =>
      produce(currentChoices, v => {
        v[id].choice = value;
      })
    )
  }

  const btnSetAnswer = (id: number) => {
    const choice = produce(choices, draft => {
      draft.map(p => p.isCorrect = false);
    })
    const newChoice = produce(choice, draft => {
      draft[id].isCorrect = true;
    })

    setChoices(newChoice);
  }

  const saveQuestion = () => {
    const data: Question = {
      id: question.id,
      word: question.word,
      choices: [...choices],
    }

    const hasCorrectAnswer = data.choices?.some((item) => {
      return item.isCorrect == true;
    })

    if (hasCorrectAnswer) {
      data.id ?
        updateData(data, id)
        : saveData(data, id);

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Please Set a Correct Answer',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  useEffect(() => {
    if (error) {
      let errorObj: any = eval(error);
      setErrorState(errorObj.data.errors);
    }
  }, [error]);

  return (
    <Modal
      isOpen={editQuestionDetails ? true : false}
      title={
        <span>
          <PlusCircleIcon className="w-5 h-5" />&nbsp;Add Question
        </span>
      }
      onClose={() => editQuestionModal(null)}>
      <div className="flex flex-col pb-10 w-full h-full">
        <div className="grid grid-cols-3 m-2 w-full h-full gap-x-10">
          <div className="col-span-1">
            <label htmlFor="word" className="block text-md font-medium text-gray-700">
              Question
            </label>
            <input
              type="text"
              name="word"
              id="word"
              value={(question && question.word) || ""}
              onChange={questionHandler}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-11/12 shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errorState &&
              Object.keys(errorState).map((keys: any) => {
                return (
                  <span className="block text-xs font-sans font-bold text-red-600">
                    {errorState[keys]}
                  </span>
                )
              })
            }
          </div>
          <div className="col-span-2 flex flex-col h-full">
            {choices.map((e, i) =>
              <ChoicesInput
                key={i}
                id={i}
                choiceText={e.choice}
                isCorrect={e.isCorrect}
                btnClick={btnSetAnswer}
                handler={choiceHandler}
              />)
            }
          </div>
        </div>
        <div className="flex justify-center items-center mt-5">
          <button
            onClick={() => saveQuestion()}
            disabled={saveLoading}
            className="bg-gray-600 
            text-lg px-20 
            hover:bg-gray-800 
            text-white font-bold 
            py-2 rounded 
            focus:outline-none focus:shadow-outline" type="button">
            {saveLoading && (
              <SpinnerBtn />
            )}
            Save
            <SaveIcon className="text-2xl h-5 w-5" />
          </button>
        </div>
      </div>
    </Modal>
  )
}

interface LinkStateProps {
  editQuestionDetails: Question | any,
  saveLoading: boolean,
  error: string | null;
}

interface LinkDispatchProps {
  editQuestionModal: (data: object | null) => void;
  saveData: (Data: Question, id: string) => void;
  updateData: (Data: Question, id: string) => void;
}

const mapStateToProps = (state: RootState, ownProps: any): LinkStateProps => ({
  editQuestionDetails: state.questions.editQuestionDetails,
  saveLoading: state.questions.SaveLoading,
  error: state.questions.error,
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, Action>, ownProps: any): LinkDispatchProps => ({
  editQuestionModal: bindActionCreators(editQuestionModal, dispatch),
  saveData: bindActionCreators(saveQuestionData, dispatch),
  updateData: bindActionCreators(updateQuestionData, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionModal)
