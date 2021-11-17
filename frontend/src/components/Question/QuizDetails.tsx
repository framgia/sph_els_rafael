import { FC, useEffect, useState } from 'react';
import TextTruncate from 'react-text-truncate';
import Spinner from '@components/UI/Spinner/Spinner';
import Quiz from '@model/quizModels'

interface Props {
  quizData: Quiz | null;
  loading: boolean;
}

const QuizDetails: FC<Props> = ({ quizData, loading }) => {

  const [titleTruncate, setTitleTruncate] = useState(true);
  const [DescriptionTruncate, setDescriptionTruncate] = useState(true);
  const [quizState, setQuizState] = useState<Quiz>({ title: "", description: "" });

  useEffect(() => {
    quizData && setQuizState(quizData && quizData);
  }, [quizData])

  const titleTransform = () => {
    setTitleTruncate(titleTruncate => !titleTruncate);
  }

  const descriptionTransform = () => {
    setDescriptionTruncate(DescriptionTruncate => !DescriptionTruncate);
  }


  return loading ? (
    <Spinner />
  ) : (
    <>
      <span className="block bg-gray-800 mb-5 text-xl font-sans font-bold text-white p-5">Quiz Title:
        <span className="ml-2 font-normal">
          {titleTruncate ? (
            <TextTruncate
              line={2}
              element="span"
              truncateText="…"
              text={(quizState && quizState.title) || ""}
              textTruncateChild={<button className="mt-2 font-sm px-5 py-2 border-0 ring-0 rounded-xl" onClick={() => titleTransform()}>Read more</button>}
            />
          ) : (<>
            <span className="mr-2">{(quizState && quizState.title) || ""}</span>
            <button className="mt-2 font-sm px-5 py-2 border-0 ring-0 rounded-xl" onClick={() => titleTransform()}>Show Less</button>
          </>
          )
          }
        </span>
      </span>
      <span className="block text-xl font-bold font-sans text-white p-5">Quiz Description:
        <span className="ml-2 font-normal">
          {DescriptionTruncate ? (
            <TextTruncate
              line={12}
              element="span"
              truncateText="......"
              text={(quizState && quizState.description) || ""}
              textTruncateChild={<button className="mt-2 font-sm px-5 py-2 border-0 ring-0 rounded-xl" onClick={() => descriptionTransform()}>Read more</button>}
            />
          ) : (<>
            <span className="mr-2">{(quizState && quizState.description) || ""}</span>
            <button className="mt-2 font-sm px-5 py-2 border-0 ring-0 rounded-xl" onClick={() => descriptionTransform()}>Show Less</button>
          </>
          )
          }
        </span>
      </span>
    </>
  )
}

export default QuizDetails;
