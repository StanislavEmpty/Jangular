import { Component } from '@angular/core';
import { Products, Product } from '../models/items';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-technic-store',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-technic-store.component.html',
  styleUrl: './home-technic-store.component.css'
})
export class HomeTechnicStoreComponent {
  Products: Product[] = Products;
}
