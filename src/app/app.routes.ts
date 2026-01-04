import { Routes } from '@angular/router';
import {Layout} from './core/layout/layout';
import {QuizHome} from './features/quiz/pages/quiz-home/quiz-home';
import {QuizPlay} from './features/quiz/pages/quiz-play/quiz-play';
import {QuizResult} from './features/quiz/pages/quiz-result/quiz-result';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: QuizHome },
      { path: 'play', component: QuizPlay },
      { path: 'result', component: QuizResult }
    ]
  }
];
