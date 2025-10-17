import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSClassComponent } from './cssclass.component';

describe('CSSClassComponent', () => {
  let component: CSSClassComponent;
  let fixture: ComponentFixture<CSSClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSSClassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CSSClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
