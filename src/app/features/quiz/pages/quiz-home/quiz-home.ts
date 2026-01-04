import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-quiz-home',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './quiz-home.html',
  styleUrl: './quiz-home.scss',
})
export class QuizHome {

  constructor(private router: Router) {}

  startQuiz() {
    this.router.navigate(['/play']);
  }
}
