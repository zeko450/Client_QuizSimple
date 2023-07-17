import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';
import { AppComponent } from '../../app.component';
import { InfoQuiz } from '../../models/info-quiz';
import { Question } from '../../models/question';
import { Quiz } from '../../models/quiz';
import { RestApiQuizService } from '../../service/rest-api-quiz.service'

@Component({
  selector: 'app-ajouter-quiz',
  templateUrl: './ajouter-quiz.component.html',
  styleUrls: ['./ajouter-quiz.component.css']
})
export class AjouterQuizComponent implements OnInit {

  infoQuiz: InfoQuiz = new InfoQuiz("", 0, 0, 0);
  quiz: Quiz = new Quiz(0, "");
  listeQuestion: Question[] = [];


  constructor(private restApi: RestApiQuizService, private router: ActivatedRoute, private redirect: Router) { }


  ngOnInit(): void {
  }


  genererQuiz() {

    this.restApi.addNewQuiz(this.infoQuiz.titre).subscribe((res) => {
      this.quiz = res;
      this.peuplerQuizFacile();
      this.peuplerQuizMoyen();
      this.peuplerQuizDifficile();
      this.rediriger();
    })

  }
  peuplerQuizFacile() {
    if (this.infoQuiz.nbFacile > 0) {
      this.restApi.addRandomQuestionsForQuiz(this.quiz.quizId, this.infoQuiz.nbFacile, 'Facile').subscribe((res) => {
        this.listeQuestion = res;
      })
    }
  }
  peuplerQuizMoyen() {
    if (this.infoQuiz.nbMoyen > 0) {
      this.restApi.addRandomQuestionsForQuiz(this.quiz.quizId, this.infoQuiz.nbMoyen, 'Moyen').subscribe((res) => {
        this.listeQuestion = res;
      })
    }
  }
  peuplerQuizDifficile() {
    if (this.infoQuiz.nbDifficile > 0) {
      this.restApi.addRandomQuestionsForQuiz(this.quiz.quizId, this.infoQuiz.nbDifficile, 'Difficile').subscribe((res) => {
        this.listeQuestion = res;
      })
    }
  }

  rediriger() {
    this.redirect.navigate(['listerQuizNU'])
  }

}

