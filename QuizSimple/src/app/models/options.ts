export class Options {
    optionId: number
    texte: string
    estVrai: boolean
    questionId: number

    constructor(
        optionId: number,
        texte: string,
       estVrai: boolean,
        questionId: number
    ) {
        this.optionId = optionId
        this.texte = texte
        this.estVrai = estVrai
        this.questionId = questionId
    }

}
