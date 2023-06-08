import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterQuizComponent } from './ajouter-quiz/ajouter-quiz.component';
import { FormsModule } from '@angular/forms';
import { NotUsedQuizComponent } from './not-used-quiz/not-used-quiz.component';
import { UsedQuizComponent } from './used-quiz/used-quiz.component';
import { PasserQuizComponent } from './passer-quiz/passer-quiz.component';
import { CorrigerQuizComponent } from './corriger-quiz/corriger-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterQuizComponent,
    NotUsedQuizComponent,
    UsedQuizComponent,
    PasserQuizComponent,
    CorrigerQuizComponent
  
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
