import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Bike, BikeBooking } from '../../model/bike';

@Component({
  selector: 'app-bike-booking',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bike-booking.component.html',
  styleUrl: './bike-booking.component.css'
})
export class BikeBookingComponent implements OnInit{
  isSidePanelVisible: boolean = false;
  BikeList: Bike[] = [];  
  localKeyName: string = 'rentalBike';
  bookingObj: BikeBooking = new BikeBooking();
  bookingList: BikeBooking[]= [];

  ngOnInit(): void {
    
    const localData = localStorage.getItem(this.localKeyName);
    if(localData != null) {
      this.BikeList = JSON.parse(localData);
    }
    const localBookingData = localStorage.getItem('rentalBooking');
    if(localBookingData != null) {
      this.bookingList = JSON.parse(localBookingData);
    }
  }

  onBookingSave() {
   
    if(this.bookingObj.bookingId ==0) {
      const BikeData=  this.BikeList.find(m=>m.bikeId == this.bookingObj.bikeId);
      if(BikeData != undefined) {
        this.bookingObj.bikeName = BikeData?.bikeName;
      } 
      this.bookingList.unshift(this.bookingObj);
      localStorage.setItem('rentalBooking',JSON.stringify(this.bookingList))
    }
  }
  onReset() {
    this.bookingObj =  new BikeBooking();
  }
}
