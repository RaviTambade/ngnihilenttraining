import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyllingComponent } from './stylling.component';

describe('StyllingComponent', () => {
  let component: StyllingComponent;
  let fixture: ComponentFixture<StyllingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyllingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StyllingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
