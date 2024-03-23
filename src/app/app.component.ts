import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BillCardComponent } from './bill-card/bill-card.component';
import { HomeTechnicStoreComponent } from './home-technic-store/home-technic-store.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BillCardComponent, HomeTechnicStoreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_lesson';
}
