import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { QuizCard } from "../../../../shared/ui/quiz-card/quiz-card";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-quiz-rules',
  imports: [QuizCard, MatButtonModule],
  templateUrl: './quiz-rules.html',
  styleUrl: './quiz-rules.scss',
})
export class QuizRules {
    constructor(private router: Router) {}

    startQuiz() {
    this.router.navigate(['/play']);
  }
}
