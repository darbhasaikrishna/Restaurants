import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Restaurants } from '../models/restaurants';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Restaurants;
  @Output() action = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAction(id: number, text: string) {
    this.action.emit({id:id, action: text});
  }
}
