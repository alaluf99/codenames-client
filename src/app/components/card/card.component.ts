import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card, CardTypeEnum} from '../../entities/card';
import {TeamEnum, Player, PlayerTypeEnum} from '../../entities/player';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  group = TeamEnum;
  playerTypeEnum = PlayerTypeEnum;
  cardTypeEnum = CardTypeEnum;
  @Output() selectCard = new EventEmitter();
  @Input() selectedCard: string;
  @Input() card: Card;
  @Input() player: Player;

  constructor() {
  }

  ngOnInit() {
  }

  select() {
    if (!this.card.isExposed && this.player.userType === this.playerTypeEnum.TEAM_LEADER) {
      this.selectCard.emit(this.card.id);
    }
  }
}
