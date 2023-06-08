export class Question {

    questionId: number
    enonce: string
    difficulty: string

    constructor(questionId: number, enonce: string, difficulty: string) {
        this.questionId = questionId
        this.enonce = enonce
        this.difficulty = difficulty
    }
}
