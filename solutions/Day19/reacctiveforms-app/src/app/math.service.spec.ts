import { TestBed } from '@angular/core/testing';
import { AddService } from './math.service';

describe('AddService', () => {


  //AUT: Application under Test
  let service: AddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddService);
  });


  it('should add two numbers', () => {
    expect(service.add(5, 3)).toBe(8);
  });
});
