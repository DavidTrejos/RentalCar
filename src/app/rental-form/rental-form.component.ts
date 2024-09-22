import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CarService } from '../car-service.service';

@Component({
  standalone: true,
  selector: 'app-rental-form',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './rental-form.component.html',
  styleUrls: ['./rental-form.component.css']
})
export class RentalFormComponent implements OnInit {
  cars: any[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe({
      next: (response) => {
        console.log(response);
        this.cars = response.data;
      },
      error: (error) => {
        console.error('Error fetching cars:', error);
      },
      complete: () => {
        console.log('Car fetching completed');
      }
    });
  }
}
