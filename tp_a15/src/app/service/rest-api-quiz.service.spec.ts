import { TestBed } from '@angular/core/testing';

import { RestApiQuizService } from './rest-api-quiz.service';

describe('RestApiQuizService', () => {
  let service: RestApiQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestApiQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
