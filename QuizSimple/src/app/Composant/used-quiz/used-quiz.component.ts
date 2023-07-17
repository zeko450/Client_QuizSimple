import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from '../../models/quiz';
import { RestApiQuizService } from '../../service/rest-api-quiz.service';

@Component({
  selector: 'app-used-quiz',
  templateUrl: './used-quiz.component.html',
  styleUrls: ['./used-quiz.component.css']
})
export class UsedQuizComponent implements OnInit {
  
  usedQuizs : Quiz[] = [];
  constructor(private restApi: RestApiQuizService, private router : Router) { 
    this.restApi.getUsedQuizzes().subscribe((res) => {
      this.usedQuizs = res;
    })
  }
  ngOnInit(): void {
  }

}
