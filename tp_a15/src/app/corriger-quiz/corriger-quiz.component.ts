import { Component, OnInit } from '@angular/core';
import { RestApiQuizService } from '../service/rest-api-quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../models/question';
import { Options } from '../models/options';
import { QuizQuestionPK } from '../models/quiz-question-pk';
import { QuizQuestion } from '../models/quiz-question';
import { SelectedOptionID } from '../models/selected-option-id';

@Component({
  selector: 'app-corriger-quiz',
  templateUrl: './corriger-quiz.component.html',
  styleUrls: ['./corriger-quiz.component.css']
})
export class CorrigerQuizComponent implements OnInit {

  ListeQuestion: Question[] = [];
  ListeOption: Options[] = [];
  json: any = {}
  selectedOptionID: SelectedOptionID = new SelectedOptionID(this.json);
  id = 0;


  constructor(private restApi: RestApiQuizService, private router: ActivatedRoute) {
    var quizId = this.router.snapshot.paramMap.get('id');

    if (quizId != null) {
      this.id = parseInt(quizId);

      //Recupere les questions d'un quiz
      this.restApi.getQuestionsForQuiz(this.id).subscribe((res) => {
        this.ListeQuestion = res;

        // Recupere les options d'une questions  
        for (var tmp of this.ListeQuestion) {
          this.restApi.getOptionsForQuestion(tmp.questionId).subscribe((res) => {
            for (var tmp2 of res) {
              this.ListeOption.push(tmp2);
            }
          });
        }
      })

      //Recupere la reponse sauvegardée d'une question
      this.restApi.getQuestionsForQuiz(this.id).subscribe((res) => {
        this.ListeQuestion = res;
      
        for (var tmp of this.ListeQuestion) {
          ((questionId) => {
            this.restApi.getQuizQuestion(this.id, questionId).subscribe((res) => {
              this.json = res;
              console.log("option choisi: " + this.json.selectedOptionID);
      
              var radioGroup = document.querySelectorAll<HTMLInputElement>('input[name="' + questionId + '"]');
              radioGroup.forEach((radioButton, index) => {
                radioButton.setAttribute('disabled',"");
                if (this.json.selectedOptionID == index + 1) {
                  radioButton.checked = true;
                }
              });
            });
          })(tmp.questionId);
        }
      });
    }      





  }
  //Recupere la reponse soumise par l'utilisateur pour une question
  /*this.restApi.getQuizQuestion(this.id, tmp.questionId).subscribe((res) => {
    this.quizQuestion.selectedOptionId = res.selectedOptionId;
    console.log(this.quizQuestion.selectedOptionId);
     //console.log("option choisi : " + this.quizQuestion.selectedOptionId);
    var radioGroup = document.querySelectorAll<HTMLInputElement>('input[name="' + tmp.questionId + '"]');
    radioGroup.forEach((radioButton, index) => {
      if (this.quizQuestion.selectedOptionId == index + 1)
        radioButton.setAttribute('checked', 'true'); */
  //  })

  //Recupere les options d'une question donnée









  ngOnInit(): void {
  }


}

