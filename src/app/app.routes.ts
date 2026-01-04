import { Routes } from '@angular/router';
import {Layout} from './core/layout/layout';
import {QuizHome} from './features/quiz/pages/quiz-home/quiz-home';
import {QuizPlay} from './features/quiz/pages/quiz-play/quiz-play';
import {QuizResult} from './features/quiz/pages/quiz-result/quiz-result';
import { QuizRules } from './features/quiz/pages/quiz-rules/quiz-rules';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: QuizHome },
      { path: 'play', component: QuizPlay },
      { path: 'rules', component: QuizRules },
      { path: 'result', component: QuizResult }
    ]
  }
];
