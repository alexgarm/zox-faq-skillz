import React, { useState } from "react";
import {ISubject} from '../types/types'
import quesion from "./dist/quesion";
import Quesion from "./dist/quesion";

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
                 subject?.questions.map(quesion => {
                     return <Quesion quesion/>
                 }) 
             }
             
         </div>
     </div>
    
 )
};

export default Subject;