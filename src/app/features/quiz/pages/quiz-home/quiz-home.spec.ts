import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizHome } from './quiz-home';

describe('QuizHome', () => {
  let component: QuizHome;
  let fixture: ComponentFixture<QuizHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
