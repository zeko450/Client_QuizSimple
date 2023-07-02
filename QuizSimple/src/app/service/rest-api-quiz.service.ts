import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from '../models/quiz';
import { Question } from '../models/question';
import { Options } from '../models/options';
import { QuizQuestion } from '../models/quiz-question';


@Injectable({
  providedIn: 'root'
})
export class RestApiQuizService {
  URL: string = "http://localhost:8080/TPRestAPI_war_exploded/api/system/";

  constructor(private http: HttpClient) { }

  // Générer un nouveau Quiz 
  addNewQuiz(title: string): Observable<Quiz> {
    return this.http.post<Quiz>(this.URL + 'quiz/' + title, { title });
  }

  // Ajouter question pour un Quiz
  addRandomQuestionsForQuiz(quizId: number, N: number, difficulty: string): Observable<Question[]> {
    return this.http.post<Question[]>(this.URL + 'quiz/' + quizId + '/questions/' + N + '/' + difficulty, { quizId, N, difficulty });
  }

  // GET Quiz non utilisée
  getNotUsedQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.URL + "notusedquizzes");
  }

  // GET Quiz utilisée
  getUsedQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.URL + "usedquizes");
  }

  // Get question for Quiz  
  getQuestionsForQuiz(id:number): Observable<Question[]>{
    return this.http.get<Question[]>(this.URL + "quiz/" +id+ "/questions");
  }

  // Get options for question
  getOptionsForQuestion(id:number): Observable<Options[]>{
    return this.http.get<Options[]>(this.URL + "questions/" + id + "/options");
  }

  // Sauvegarder les reponses du quiz 
  updateQuizQuestion(quizId:number, questionId:number, selectedOptionId:number): Observable<QuizQuestion> {
    return this.http.put<QuizQuestion>(this.URL + "quiz/"+quizId + "/question/" + questionId +"/answer/" + selectedOptionId, {quizId, questionId, selectedOptionId})
  }

  // Recuper les informations sauvegardé d'une question 
  getQuizQuestion(quizId:number, questionId:number): Observable<QuizQuestion> {
    return this.http.get<QuizQuestion>(this.URL + "quiz/" +quizId + "/question/"+ questionId);
  }  

  // Corrigé le quiz avec les bonnes réponses
  rightOptionsForQuestion(questionId:number): Observable<Options> {
    return this.http.get<Options>(this.URL + "questions/" + questionId + "/rightanswer");
  }
}
