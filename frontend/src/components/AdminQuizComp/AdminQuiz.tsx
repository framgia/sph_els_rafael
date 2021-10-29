import { useState } from 'react'
import QuizList from './QuizList'
import QuizModal from './QuizModal'


const AdminQuiz = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => setModalOpen(!isModalOpen);

    return (
        <>
            <QuizList action={toggleModal} />
            <QuizModal
                modalIsclose={isModalOpen}
                onClose={toggleModal} />
        </>
    )
}

export default AdminQuiz
