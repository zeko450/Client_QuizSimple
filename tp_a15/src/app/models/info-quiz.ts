export class InfoQuiz {

    titre: string
    nbFacile: number
    nbMoyen: number
    nbDifficile: number

    constructor(
        titre: string,
        nbFacile: number,
        nbMoyen: number,
        nbDifficile: number
    ) {
        this.titre = titre
        this.nbFacile = nbFacile
        this.nbMoyen = nbMoyen
        this.nbDifficile = nbDifficile
    }


}
