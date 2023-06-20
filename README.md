
## QuizSimple
QuizSimple. A fun application used to take quizzes on general knowledge.  
You can make your own quiz and choose how many questions there will be.  
You can also choose the difficulty (Easy, Medium, Hard) for each question.  
At the end, you can check your grade, your mistake and the correct answer.  

## Prerequisite 
1) QuizSimple service executed. https://github.com/zeko450/QuizSimple  
2) Download Client_QuizSimple.zip

## Execute QuizSimple Client
1) **Unzip** Client_QuizSimple-master
2) **Open** the folder **tp_a15** with your favorite editor.   I recommend visual studio code.  
3) **Open** the **terminal** by clicking on View (Top Menu Bar) and selecting **terminal**.  
4) **Write** the following command in the **terminal** to move inside the repository to be executed: **cd tp_a15** .  
5) Run **ng serve** .  

After a few seconds, if the QuizSimple Service is executed and you executed the client, you should land on the home page.

***Enjoy !***

## What's in it
### Components
1- **AddQuiz** : Displays the form for the user to write information about a quiz and once submitted calls the method addNewQuiz and addRandomQuestionsForQuiz.  

2- **UnusedQuiz** : On loading, the method getNotUsedQuizzes is called to display the list of unused quizzes.  

3- **PassQuiz** : On loading, the method getQuestionsForQuiz and getQuizOptionsForQuestion are called and the quiz is displayed.  
Once the quiz has been submitted, the method upgradeQuizQuestion is called to note the input so that we can save the quiz results.  

4- **UsedQuiz** : On loading, the method getUsedQuizzes is called to display the list of quizzes.  

5- **CorrectQuiz** : On loading, the service getQuestionsForQuiz and getOptionsForQuiz are called to display the quiz with the results the user submitted 
and then the correction is made with validation using *ngIf in the html file. The correct answer turns green.

### Credits 
[Mohamed Kachach](https://github.com/zeko450/)  
[Ayoub Guissouss](https://github.com/AyoubGuissouss/)  
[Menad Maouchi](https://github.com/menadAPM/)  

