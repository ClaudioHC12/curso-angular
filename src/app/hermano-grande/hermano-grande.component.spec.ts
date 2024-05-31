import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HermanoGrandeComponent } from './hermano-grande.component';

describe('HermanoGrandeComponent', () => {
  let component: HermanoGrandeComponent;
  let fixture: ComponentFixture<HermanoGrandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HermanoGrandeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HermanoGrandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
