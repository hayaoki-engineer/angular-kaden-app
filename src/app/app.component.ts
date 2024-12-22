import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/product.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public title = 'angular-project';
  private productService = inject(ProductService);
  public isCardVisible: boolean = false;
  public cartItems: Product[] = [];
  private addToCartSubscription: Subscription = new Subscription();

  constructor() {
    this.addToCartSubscription = this.productService.onAddToCart$.subscribe(
      (res: Product): void => {
        this.cartItems.unshift(res);
      }
    );
  }

  public ngOnDestroy(): void {
    if (this.addToCartSubscription) {
      this.addToCartSubscription.unsubscribe();
    }
  }

  public showCart(): void {
    this.isCardVisible = !this.isCardVisible;
  }

  public trackByIndex(index: number, item: Product): number {
    return index;
  }

  public removeProduct(index: number): void {
    this.cartItems.splice(index, 1);
  }

}
