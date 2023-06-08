import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from '../models/quiz';
import { RestApiQuizService } from '../service/rest-api-quiz.service';

@Component({
  selector: 'app-not-used-quiz',
  templateUrl: './not-used-quiz.component.html',
  styleUrls: ['./not-used-quiz.component.css']
})
export class NotUsedQuizComponent implements OnInit {

  quizs : Quiz[] = [];
  constructor(private restApi: RestApiQuizService, private router : Router) { 
    this.restApi.getNotUsedQuizzes().subscribe((res) => {
      this.quizs = res;
    })
  }


  ngOnInit(): void {
  }

}
