import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrigerQuizComponent } from './corriger-quiz.component';

describe('CorrigerQuizComponent', () => {
  let component: CorrigerQuizComponent;
  let fixture: ComponentFixture<CorrigerQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrigerQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrigerQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
