import {Component, OnInit} from '@angular/core';
import {CardTypeEnum} from '../../entities/card';
import {Board} from '../../entities/board';
import {GroupEnum, Player, PlayerTypeEnum} from '../../entities/player';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.less']
})
export class BoardComponent implements OnInit {

  selectedCard: string;
  board: Board;
  player: Player;
  playerTypeEnum = PlayerTypeEnum;
  constructor() {
    this.board = new Board();
    this.board.id = '1';
    this.board.cards = [];

    for (let i = 0; i < 25; i++) {
      this.board.cards.push(      {
        id: i.toString(),
        type: CardTypeEnum.RED_CARD,
        isExposed: false,
        word: 'css ציון'
      });
    }
    this.player = {
      id: '1',
      userId: '2',
      type: PlayerTypeEnum.SUPER_SPY,
      group: GroupEnum.BLUE
    };
  }

  ngOnInit() {
  }

  select(cardId) {
    if (this.selectedCard === cardId) {
      this.selectedCard = null;
    } else {
      this.selectedCard = cardId;
    }
  }
}
