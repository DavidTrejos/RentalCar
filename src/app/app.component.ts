import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { CarListComponent } from './car-list/car-list.component';
import { RentalFormComponent } from './rental-form/rental-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    NavbarComponent,
    CarListComponent,
    RentalFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
