import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterQuizComponent } from './ajouter-quiz/ajouter-quiz.component';
import { AppComponent } from './app.component';
import { NotUsedQuizComponent } from './not-used-quiz/not-used-quiz.component';
import { UsedQuizComponent } from './used-quiz/used-quiz.component';
import { PasserQuizComponent } from './passer-quiz/passer-quiz.component';
import { CorrigerQuizComponent } from './corriger-quiz/corriger-quiz.component';

const routes: Routes = [
  {path:'home', component: AppComponent},
  {path:'ajouterQuiz', component: AjouterQuizComponent},
  {path:'listerQuizNU', component: NotUsedQuizComponent},
  {path:'listerQuizU', component: UsedQuizComponent},
  {path:'passerQuiz/:id', component: PasserQuizComponent},
  {path:'corrigerQuiz/:id', component: CorrigerQuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
