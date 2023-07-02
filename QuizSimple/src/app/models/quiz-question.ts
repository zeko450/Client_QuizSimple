import { QuizQuestionPK } from "./quiz-question-pk";

export class QuizQuestion {
    id: QuizQuestionPK
    selectedOptionId: number

    constructor(id: QuizQuestionPK, selectedOptionId: number) {
        this.id = id
        this.selectedOptionId = selectedOptionId
    }
    
    public set value(v : number) {
        this.selectedOptionId = -1;
    }
    
}

