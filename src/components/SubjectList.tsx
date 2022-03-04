import React, {FC}  from "react";
import { ISubject } from "../types/types";
import Subject from "./Subject";
import data from '../data/data'

type Props = {
    data: any
}

const SubjectList =({data}: Props)=> {
    
    return(
        <div>
             {data.map((item: ISubject | undefined) => {
            return <Subject subject = {item}/>
        })}
        </div>
       
     

    )

}

export default SubjectList