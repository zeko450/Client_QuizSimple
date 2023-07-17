import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterQuizComponent } from './Composant/ajouter-quiz/ajouter-quiz.component';
import { NotUsedQuizComponent } from './Composant/not-used-quiz/not-used-quiz.component';
import { UsedQuizComponent } from './Composant/used-quiz/used-quiz.component';
import { PasserQuizComponent } from './Composant/passer-quiz/passer-quiz.component';
import { CorrigerQuizComponent } from './Composant/corriger-quiz/corriger-quiz.component';
import { HomeComponent } from './composant/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
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
