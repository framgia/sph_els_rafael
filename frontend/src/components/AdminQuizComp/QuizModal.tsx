import { FC } from 'react';
import Modal from '@components/UI/Modal/Modal';

interface Props {
    modalIsclose: boolean;
    onClose: () => void;
}

const QuizModal: FC<Props> = ({ modalIsclose, onClose }) => {

    return (
        <Modal
            isOpen={modalIsclose}
            title="Add New Quiz"
            onClose={onClose}>
            <div>
                wew
            </div>

        </Modal>
    )

}

export default QuizModal;