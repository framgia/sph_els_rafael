import { FC, useState } from 'react';
import Quiz from '@model/quizModels'
import QuizCard from './QuizCard';

const StudentQuiz: FC = () => {
  const [quizList, setQuizList] = useState<Quiz[]>([
    {
      title: "Quiz 1", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, iste ratione! Eum doloribus inventore nobis totam similique, ad laborum explicabo?"
    },
    { title: "Quiz 2", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores explicabo cupiditate autem eveniet illum vitae quas repellat facere reprehenderit fuga, culpa fugit exercitationem. Ipsam voluptas corrupti numquam, voluptatum minima repudiandae. Et illo doloremque aliquam debitis nulla, atque sapiente non impedit quae possimus voluptatum expedita, harum esse a laboriosam officia. Eum at sapiente, hic ex accusamus obcaecati facilis aliquam amet? Reprehenderit culpa animi maiores debitis asperiores eaque suscipit! Optio maxime voluptas itaque, nobis, ullam nesciunt sint doloribus voluptatum, nulla atque similique ipsa ut aliquam facere quis consequuntur voluptatibus distinctio animi? Hic quo ipsum quisquam voluptas. Error, sapiente laudantium! Ea vero ex ad hic eveniet provident, inventore incidunt ab deleniti magni quis dicta eius culpa itaque fuga quisquam, eligendi, maxime accusamus dolores?" },
    { title: "Quiz 3", description: "description 2" },
    { title: "Quiz 4", description: "description 2" },
    { title: "Quiz 5", description: "description 2" },
    { title: "Quiz 6", description: "description 2" },
    { title: "Quiz 7", description: "description 2" },
    { title: "Quiz 8", description: "description 2" },
  ])

  return (
    <div className="flex flex-col m-10">
      <h2 className="text-white text-4xl mb-5">
        Quizzes
      </h2>
      <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {quizList.map((quiz, key: number) => (
          <QuizCard key={key} quizData={quiz} />
        ))}
      </div>
    </div>
  )
}

export default StudentQuiz;
