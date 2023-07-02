import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';
import { Options } from '../models/options';
import { RestApiQuizService } from '../service/rest-api-quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizQuestion } from '../models/quiz-question';
import { QuizQuestionPK } from '../models/quiz-question-pk';

@Component({
  selector: 'app-passer-quiz',
  templateUrl: './passer-quiz.component.html',
  styleUrls: ['./passer-quiz.component.css']
})
export class PasserQuizComponent implements OnInit {

  ListeQuestion: Question[] = [];
  ListeOption: Options[] = [];
  ListeQuizQuestion: QuizQuestion[] = [];
  quizQuestionPK : QuizQuestionPK = new QuizQuestionPK(0,0);
  quizQuestion : QuizQuestion = new QuizQuestion(this.quizQuestionPK,0);
  choix: string = ""
  id = 0;

  constructor(private restApi: RestApiQuizService, private router: ActivatedRoute) {
    var quizId = this.router.snapshot.paramMap.get("id");

      //Recupere les questions d'un quiz
    if (quizId != null) {
      this.id = parseInt(quizId);
      this.restApi.getQuestionsForQuiz(this.id).subscribe((res) => {
        this.ListeQuestion = res;

      //Recupere les options d'une question donnée
        for (var tmp of this.ListeQuestion) {
          this.restApi.getOptionsForQuestion(tmp.questionId).subscribe((res) => {
            for (var tmp2 of res) {
              this.ListeOption.push(tmp2);
            }
          })
        }
      })
    }

  }

  ngOnInit(): void {
  }

  /*  getOption(event: any) {
     let choix = event.target.value;
     return choix
   } */

  updateQuiz() {
  //Recupere l'index de l'option selectionné pour chaque question
    for (var tmp of this.ListeQuestion) {
      const radioButtons = document.querySelectorAll<HTMLInputElement>('input[name="'+ tmp.questionId +'"]');
      let selectedIndex = -1;
      radioButtons.forEach((radioButton, index) => {
        if (radioButton.checked) {
          selectedIndex = index + 1 ;
        }
      });
    
      //Sauvegarde les réponses dans la base de donnée
      console.log("id:" + this.id)
      console.log("question id : "+ tmp.questionId);
      console.log("index" +  selectedIndex);

      this.restApi.updateQuizQuestion(this.id, tmp.questionId, selectedIndex).subscribe((res) => {
          this.quizQuestion = res;
       })
    }
  }
}
