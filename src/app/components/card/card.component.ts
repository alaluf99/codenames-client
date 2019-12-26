import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card, CardTypeEnum} from '../../entities/card';
import {PlayerTypeEnum} from '../../entities/player';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  playerTypeEnum = PlayerTypeEnum;
  cardTypeEnum = CardTypeEnum;
  @Output() selectCard = new EventEmitter();
  @Input() selectedCard: string;
  @Input() card: Card;
  @Input() playerType: PlayerTypeEnum;

  constructor() {
  }

  ngOnInit() {
  }

  select() {
    if (!this.card.isExposed && this.playerType !== this.playerTypeEnum.SUPER_SPY) {
      this.selectCard.emit(this.card.id);
    }
  }
}
