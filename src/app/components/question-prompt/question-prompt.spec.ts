import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPrompt } from './question-prompt';

describe('QuestionPrompt', () => {
  let component: QuestionPrompt;
  let fixture: ComponentFixture<QuestionPrompt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionPrompt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionPrompt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
