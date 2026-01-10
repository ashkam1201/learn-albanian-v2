import { Routes } from '@angular/router';
import {Layout} from './core/layout/layout';
import {QuizHome} from './features/quiz/pages/quiz-home/quiz-home';
import {QuizPlay} from './features/quiz/pages/quiz-play/quiz-play';
import {QuizProfile} from './features/quiz/pages/quiz-profile/quiz-profile';
import {QuizResult} from './features/quiz/pages/quiz-result/quiz-result';
import { QuizRules } from './features/quiz/pages/quiz-rules/quiz-rules';
import { QuizSettings } from './features/quiz/pages/quiz-settings/quiz-settings';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: QuizHome, data: { animation: 'home' } },
      { path: 'play', component: QuizPlay, data: { animation: 'play' } },
      { path: 'rules', component: QuizRules, data: { animation: 'rules' } },
      { path: 'settings', component: QuizSettings, data: { animation: 'settings' } },
      { path: 'profile', component: QuizProfile, data: { animation: 'profile' } },
      { path: 'result', component: QuizResult, data: { animation: 'result' } }
    ]
  }
];
