import { FC, useState } from 'react';
import TextTruncate from 'react-text-truncate';

const QuizDetails: FC = () => {
  const [titleTruncate, setTitleTruncate] = useState(true);
  const [DescriptionTruncate, setDescriptionTruncate] = useState(true);

  const titleTransform = () => {
    setTitleTruncate(titleTruncate => !titleTruncate);
  }

  const descriptionTransform = () => {
    setDescriptionTruncate(DescriptionTruncate => !DescriptionTruncate);
  }

  return (
    <>
      <span className="block bg-gray-800 mb-5 text-xl font-sans font-bold text-white p-5">Quiz Title:
        <span className="ml-2 font-normal">
          {titleTruncate ? (
            <TextTruncate
              line={1}
              element="span"
              truncateText="…"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              textTruncateChild={<button className="mt-2 font-sm px-5 py-2 border-0 ring-0 rounded-xl" onClick={() => titleTransform()}>Read more</button>}
            />
          ) : (<>
            <span className="mr-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
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
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repudiandae cupiditate consequuntur iure quod, ullam sed harum officia aperiam vero accusamus dolorem placeat officiis reiciendis numquam explicabo assumenda eius maxime unde et voluptas vitae hic natus. Illum eos tenetur magni nihil necessitatibus fugit consequatur molestias, optio dicta officia quam veniam fugiat? Hic tempore quos maiores inventore, optio fugit numquam odio. Reiciendis aperiam possimus expedita nesciunt quia veniam fugiat. Ad optio molestiae consectetur quaerat, iste eveniet iusto necessitatibus recusandae eum fugit labore voluptatem corrupti, laboriosam provident alias tempore accusantium magnam odit. Laborum dolore sapiente ullam ducimus facilis sunt velit dolorem assumenda."
              textTruncateChild={<button className="mt-2 font-sm px-5 py-2 border-0 ring-0 rounded-xl" onClick={() => descriptionTransform()}>Read more</button>}
            />
          ) : (<>
            <span className="mr-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repudiandae cupiditate consequuntur iure quod, ullam sed harum officia aperiam vero accusamus dolorem placeat officiis reiciendis numquam explicabo assumenda eius maxime unde et voluptas vitae hic natus. Illum eos tenetur magni nihil necessitatibus fugit consequatur molestias, optio dicta officia quam veniam fugiat? Hic tempore quos maiores inventore, optio fugit numquam odio. Reiciendis aperiam possimus expedita nesciunt quia veniam fugiat. Ad optio molestiae consectetur quaerat, iste eveniet iusto necessitatibus recusandae eum fugit labore voluptatem corrupti, laboriosam provident alias tempore accusantium magnam odit. Laborum dolore sapiente ullam ducimus facilis sunt velit dolorem assumenda.</span>
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
