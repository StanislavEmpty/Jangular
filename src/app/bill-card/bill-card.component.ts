import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bill-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bill-card.component.html',
  styleUrl: './bill-card.component.css'
})
export class BillCardComponent {
  autor : string = "Bill";
  private text: string = "Patience is a key element of successs";

  getText(): string {
    return this.text;
  }

  setText(text: string): void {
    this.text = text;
  }

  items: string[] = [
    "If you think your teacher is tough, wait till you get a boss",
    "Life is not fair — get used to it!",
    "Success is a lousy teacher. It seduces smart people into thinking they can’t lose",
    "Be nice to nerds. Chances are you’ll end up working for one"
  ]

  links: string[] = [
    "https://en.wikipedia.org/wiki/Bill_Gates",
    "https://www.gatesfoundation.org/",
    "https://www.gatesnotes.com/"
  ]

  linkToPhoto:string="https://www.10000h.ru/wp-content/uploads/2017/04/bill-gates-jpg.jpg"
}
