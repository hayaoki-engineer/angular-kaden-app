import { Component, Input, inject } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;

  // サービスをインジェクト
  private productService = inject(ProductService);

  // カートに商品を追加するメソッド
  public addToCart(addedProduct: Product): void {
    this.productService.onAddToCart$.next(addedProduct);
  }

}
