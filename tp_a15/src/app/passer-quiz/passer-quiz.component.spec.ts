import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasserQuizComponent } from './passer-quiz.component';

describe('PasserQuizComponent', () => {
  let component: PasserQuizComponent;
  let fixture: ComponentFixture<PasserQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasserQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasserQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
