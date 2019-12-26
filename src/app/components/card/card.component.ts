import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card, TypesEnum} from '../../entities/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  typesEnum = TypesEnum;
  @Output() selectCard = new EventEmitter();
  @Input() selectedCard: string;
  @Input() card: Card;

  constructor() {
  }

  ngOnInit() {
  }

  select() {
    if (!this.card.isExposed) {
      this.selectCard.emit(this.card.id);
    }
  }
}
