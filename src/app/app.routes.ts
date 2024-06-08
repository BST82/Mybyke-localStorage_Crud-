import { Routes } from '@angular/router';
import { BikeListComponent } from './components/bike-list/bike-list.component';
import { BikeBookingComponent } from './components/bike-booking/bike-booking.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'booking',
        pathMatch:'full'
    },
    {
        path:"bike",
        component:BikeListComponent
    },
    {
        path:"booking",
        component:BikeBookingComponent
    }
];
