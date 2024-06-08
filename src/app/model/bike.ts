export class Bike{
    bikeId:number;
    bikeName:string;
    ratePerHour:number;
    ratePerDay:number;
    bikeImage:string;

    constructor(){
        this.bikeId=0
        this.bikeName='';
        this.ratePerHour=0;
        this.ratePerDay=0;
        this.bikeImage='';
    }
}


export class BikeBooking{
    bookingId:number;
    customerName:string;
    mobileNumber:number;
    bikeId:number;
    bikeName:string;
    bookingDate:Date;
    rentType:string;
    rentDuration:number;
    numberOfBike:number;

    constructor(){
        this.bookingId=0;
        this.customerName='';
        this.mobileNumber=0;
        this.bikeId=0;
        this.bikeName='';
        this.bookingDate=new Date();
        this.rentType='';
        this.rentDuration=0;
        this.numberOfBike=0;
       
    }
}