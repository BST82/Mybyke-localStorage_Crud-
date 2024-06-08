import { Component, OnInit } from '@angular/core';
import { Bike } from '../../model/bike';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bike-list',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './bike-list.component.html',
  styleUrl: './bike-list.component.css'
})
export class BikeListComponent implements OnInit{
  bikeObj:Bike =new Bike();
  bikeList: Bike[]=[];
  localKeyName: string = 'rentalBike';
  sidePanelVisibility:boolean=false;  


  ngOnInit(): void {
    
      const localData = localStorage.getItem(this.localKeyName);
      if (localData != null) {
        this.bikeList = JSON.parse(localData);
      }
    
  }

  onSaveBike() {
    console.log('Bike Object before save:', this.bikeObj);
    if(this.bikeObj.bikeId ==0) {
      this.bikeObj.bikeId=this.bikeList.length + 1;
      this.bikeList.unshift(this.bikeObj);
      localStorage.setItem(this.localKeyName,JSON.stringify(this.bikeList));

      this.onResetbike();
    }
  
  }
  onResetbike(){
    this.bikeObj= new Bike();
  }
  
}
