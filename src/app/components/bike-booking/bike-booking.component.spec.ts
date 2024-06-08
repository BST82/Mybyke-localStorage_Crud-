import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeBookingComponent } from './bike-booking.component';

describe('BikeBookingComponent', () => {
  let component: BikeBookingComponent;
  let fixture: ComponentFixture<BikeBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeBookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
