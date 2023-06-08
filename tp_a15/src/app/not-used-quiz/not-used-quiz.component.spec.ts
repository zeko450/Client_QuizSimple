import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotUsedQuizComponent } from './not-used-quiz.component';

describe('NotUsedQuizComponent', () => {
  let component: NotUsedQuizComponent;
  let fixture: ComponentFixture<NotUsedQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotUsedQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotUsedQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
