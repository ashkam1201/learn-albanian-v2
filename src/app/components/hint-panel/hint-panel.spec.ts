import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HintPanel } from './hint-panel';

describe('HintPanel', () => {
  let component: HintPanel;
  let fixture: ComponentFixture<HintPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HintPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HintPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
