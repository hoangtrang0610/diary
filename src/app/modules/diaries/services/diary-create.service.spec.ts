import { TestBed } from '@angular/core/testing';

import { DiaryCreateService } from './diary-create.service';

describe('DiaryCreateService', () => {
  let service: DiaryCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiaryCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
