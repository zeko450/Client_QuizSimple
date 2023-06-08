import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedQuizComponent } from './used-quiz.component';

describe('UsedQuizComponent', () => {
  let component: UsedQuizComponent;
  let fixture: ComponentFixture<UsedQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsedQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsedQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
