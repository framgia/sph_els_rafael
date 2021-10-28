import { FC } from 'react';
import Modal from '@components/UI/Modal/Modal';
import {
    PlusCircleIcon, SaveIcon
} from "@heroicons/react/solid";

interface Props {
    modalIsclose: boolean;
    onClose: () => void;
}

const QuizModal: FC<Props> = ({ modalIsclose, onClose }) => {

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
                    <input className="form-input shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-lg font-bold mb-2" >
                        Description
                    </label>
                    <textarea className="form-textarea shadow appearance-none border rounded w-96 h-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">

                    </textarea>

                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-gray-600 text-lg hover:bg-gray-800 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline" type="button">
                        Save{" "} <SaveIcon className="text-2xl h-5 w-5" />
                    </button>

                </div>
            </div>
        </Modal >
    )

}

export default QuizModal;

