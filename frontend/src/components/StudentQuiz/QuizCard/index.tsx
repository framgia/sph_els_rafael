import { FC, useState } from 'react'
import Quiz from '@model/quizModels'
import TextTruncate from 'react-text-truncate';
import classes from './QuizCard.module.css';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router';

interface Props {
  quizData: Quiz | null;
}

const QuizCard: FC<Props> = ({ quizData }) => {
  const history = useHistory();
  const [DescriptionTruncate, setDescriptionTruncate] = useState(true);

  const descriptionTransform = () => {
    setDescriptionTruncate(DescriptionTruncate => !DescriptionTruncate);
  }


  const alertQuiz = (id: number | undefined): void => {
    Swal.fire({
      title: `Do you want to start this ${quizData?.title}?`,
      showDenyButton: true,
      confirmButtonText: 'Confirm',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        history.push(`/student/quiz/${id}`);
      }
    })
  }

  return (
    <div className={classes.card}>
      <div>
        <h2 className={classes.cardTitle}>{quizData?.title}</h2>
        {DescriptionTruncate ? (
          <TextTruncate
            line={4}
            containerClassName={classes.cardDescritpion}
            element="p"
            truncateText="......"
            text={(quizData && quizData.description) || ""}
            textTruncateChild={<button className={classes.cardReadMore}
              onClick={() => descriptionTransform()}>Read more</button>}
          />
        ) :
          (<>
            <p className={classes.cardDescritpion}>{(quizData && quizData.description) || ""}</p>
            <button className={classes.cardReadMore}
              onClick={() => descriptionTransform()}>Show Less</button>
          </>
          )
        }
      </div>
      <div className="flex justify-end mt-4">
        <button onClick={() => alertQuiz(quizData?.id)} className={classes.cardAction}>
          start now
        </button>
      </div>
    </div>
  )
}

export default QuizCard;
