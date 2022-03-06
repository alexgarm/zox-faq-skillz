import React, { useState } from "react";
import {ISubject} from '../types/types'
import quesion from "./dist/quesion";
import Question from "./Question";

type Subject  = {
  subject: ISubject
};

type Props = {
  subject?: ISubject;
};

const Subject = ({ subject }: Props) => {
 return(
     <div>
         {subject?.title}
         <div>
             {
                 subject?.questions.map(question => {
                     return <Question question = {question}/>
                 })
             }
             
         </div>
     </div>
    
 )
};

export default Subject;