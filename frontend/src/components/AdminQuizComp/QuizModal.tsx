import React, { FC, useState, useEffect, Dispatch } from 'react';
import Modal from '@components/UI/Modal/Modal';
import {
    PlusCircleIcon, SaveIcon
} from "@heroicons/react/solid";
import { RootState } from '../../store/reducers'
import { ThunkDispatch } from 'redux-thunk';
import { Action } from '../../store/actions/index'
import { bindActionCreators } from 'redux';
import { editQuizAdminModal, saveQuizData, updateQuizData } from '../../store/actions/action-creator/'
import { connect } from 'react-redux'
import Quiz from '../../models/quizModels';
import SpinnerBtn from '@components/SVG/SpinnerBtn';

type Props = LinkDispatchProps & LinkStateProps;
const QuizModal: FC<Props> = ({ editQuizListData, SaveLoading, editQuizAdminModal, saveQuizData, updateQuizData }) => {
    const [input, setInput] = useState({
        id: "",
        title: "",
        description: "",
    })

    useEffect(() => {
        const { title, description, id } = editQuizListData && editQuizListData

        editQuizListData && setInput({
            title: title,
            description: description,
            id: id
        })

    }, [editQuizListData])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        setInput({
            ...input,
            [name]: value
        })
    }

    const saveClick = () => {
        if (input && !input.title || input && !input.description) {
            return;
        }

        const formData = new FormData();

        formData.set('title', input.title);
        formData.set('description', input.description);

        input.id ?
            updateQuizData(input, input.id && input.id)
            : saveQuizData(formData);

    }

    return (
        <Modal
            isOpen={editQuizListData ? true : false}
            title={
                <span>
                    <PlusCircleIcon className="w-5 h-5" />&nbsp;Add Quiz
                </span>
            }
            onClose={() => editQuizAdminModal(null)}>
            <div className="w-full flex flex-col justify-center items-center m-auto ">
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2">
                        Title
                    </label>
                    <input name="title" value={input.title} onChange={handleChange}
                        className="form-input shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-lg font-bold mb-2" >
                        Description
                    </label>
                    <textarea name="description" value={input.description} onChange={handleChange} className="form-textarea shadow appearance-none border rounded w-96 h-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />


                </div>
                <div className="flex items-center justify-between">
                    <button disabled={SaveLoading} onClick={() => saveClick()} className="bg-gray-600 text-lg hover:bg-gray-800 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline" type="button">
                        Save {SaveLoading ? (

                            <SpinnerBtn />
                        ) : (
                            <SaveIcon className="text-2xl h-5 w-5" />
                        )}
                    </button>

                </div>
            </div>
        </Modal >
    )

}

interface LinkStateProps {
    editQuizListData: Quiz | any,
    SaveLoading: boolean,
}

interface LinkDispatchProps {
    editQuizAdminModal: (data: object | null) => void;
    saveQuizData: (data: FormData | null) => void;
    updateQuizData: (data: any, id: string) => void;
}

const mapStateToProps = (state: RootState, ownProps: any): LinkStateProps => ({
    editQuizListData: state.quizzes.editQuizDetails,
    SaveLoading: state.quizzes.SaveLoading
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, Action>, ownProps: any): LinkDispatchProps => ({
    editQuizAdminModal: bindActionCreators(editQuizAdminModal, dispatch),
    saveQuizData: bindActionCreators(saveQuizData, dispatch),
    updateQuizData: bindActionCreators(updateQuizData, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizModal)

