import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-prompt',
  standalone: true,
  templateUrl: './question-prompt.html',
  styleUrl: './question-prompt.scss',
})
export class QuestionPrompt {
  @Input() promptText = '';
  @Input() toLang: 'AL' | 'EN' = 'EN';
  @Input() fromLang: 'AL' | 'EN' = 'AL';
}
