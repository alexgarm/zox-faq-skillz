import { NoSubstitutionTemplateLiteral } from "typescript"

export interface IQuestion{
    id: number,
    title: string,
    answer: string


}

export interface ISubject{
    id: number,
    title: string,
    questions: IQuestion[] 
}