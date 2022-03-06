import React, {FC, useState}  from "react";
import { IQuestion } from "../types/types";

type Props = {
    question: IQuestion
}

const Question =({question}: Props)=> {
    const [opened, setOpened] = useState(false);
    return (
      <div>
        <button className="open_btn" onClick={() => setOpened(!opened)}>
          {question?.title}
        </button>
        
        {opened && (
          <div className="answer_section">
           {question?.answer}
          </div>
        )}
      </div>
    );

}

export default Question