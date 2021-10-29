import React, { ChangeEvent, ChangeEventHandler, FC, useState } from 'react';
import Modal from '@components/UI/Modal/Modal';
import {
    PlusCircleIcon, SaveIcon
} from "@heroicons/react/solid";
import QuizDataService from "../../services/quiz.service";
// import IQuizData from '../../types/quiz.type';


interface Props {
    modalIsclose: boolean;
    onClose: () => void;
}

const QuizModal: FC<Props> = ({ modalIsclose, onClose }) => {
    const [input, setInput] = useState({
        title: "",
        description: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const saveClick = () => {
        if (!input.title || !input.description) {
            return
        }

        const formData = new FormData();
        formData.set('title', input.title);
        formData.set('description', input.description);

        postData(formData);
    }



    async function postData(data: any) {
        try {
            let response = await QuizDataService.create(data);

            console.log(response.data);
            setInput({
                title: "",
                description: "",
            });
            onClose();
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <Modal
            isOpen={modalIsclose}
            title={
                <span>
                    <PlusCircleIcon className="w-5 h-5" />&nbsp;Add Quiz
                </span>
            }
            onClose={onClose}>
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
                    <button onClick={() => saveClick()} className="bg-gray-600 text-lg hover:bg-gray-800 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline" type="button">
                        Save{" "} <SaveIcon className="text-2xl h-5 w-5" />
                    </button>

                </div>
            </div>
        </Modal >
    )

}

export default QuizModal;

