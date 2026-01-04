import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {QuizCard} from '../../../../shared/ui/quiz-card/quiz-card';

@Component({
  selector: 'app-quiz-home',
  imports: [MatButtonModule, QuizCard],
  templateUrl: './quiz-home.html',
  styleUrl: './quiz-home.scss',
})
export class QuizHome {

  constructor(private router: Router) {}

  startQuiz() {
    this.router.navigate(['/rules']);
  }
}
