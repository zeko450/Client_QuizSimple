export class QuizQuestionPK {
    quizId: number
    questionId: number
   
    constructor(quizId: number, questionId: number) {
        this.quizId = quizId
        this.questionId = questionId
    }
}
