import { useState, useEffect, FC } from 'react'
import QuizList from './QuizList'
import QuizModal from './QuizModal'
import QuizDataService from '../../services/quiz.service';
import IQuizData from 'types/quiz.type';


interface IState {
    quizzes: IQuizData[];
}

const AdminQuiz: FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [quiz, setQuiz] = useState<IState["quizzes"]>([])

    useEffect(() => {
        const fetchDataAsync = async () => {
            await fetchData();
        }
        fetchDataAsync()
    }, []);


    async function fetchData() {
        try {
            setIsLoading(true);
            let response = await QuizDataService.getAll();

            setQuiz(response.data);
            console.table(response.data);
            setIsLoading(false);
        } catch (e) {
            console.log(e);
        }
    }

    const toggleModal = () => setModalOpen(!isModalOpen);

    return (
        <>
            <QuizList loading={isLoading} data={quiz} action={toggleModal} />
            {isModalOpen && (
                <QuizModal
                    refresh={fetchData}
                    modalIsclose={isModalOpen}
                    onClose={toggleModal} />
            )}
        </>
    )
}

export default AdminQuiz
