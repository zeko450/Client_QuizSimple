import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterQuizComponent } from './Composant/ajouter-quiz/ajouter-quiz.component';
import { FormsModule } from '@angular/forms';
import { NotUsedQuizComponent } from './Composant/not-used-quiz/not-used-quiz.component';
import { UsedQuizComponent } from './Composant/used-quiz/used-quiz.component';
import { PasserQuizComponent } from './Composant/passer-quiz/passer-quiz.component';
import { CorrigerQuizComponent } from './Composant/corriger-quiz/corriger-quiz.component';
import { HomeComponent } from './composant/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterQuizComponent,
    NotUsedQuizComponent,
    UsedQuizComponent,
    PasserQuizComponent,
    CorrigerQuizComponent,
    HomeComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
