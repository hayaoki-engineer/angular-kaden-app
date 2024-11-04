import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public categoryList: string[] = [
    'Fridge',
    'Washer',
    'Kitchen',
    'Vacuum',
    'Climate',
    'TV',
    'Other',
  ];

  public trackByIndex(index: number, item: any): number {
    return index;
  }
}
