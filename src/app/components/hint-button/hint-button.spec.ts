import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HintButton } from './hint-button';

describe('HintButton', () => {
  let component: HintButton;
  let fixture: ComponentFixture<HintButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HintButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HintButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
