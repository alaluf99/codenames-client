import {Component, OnInit} from '@angular/core';
import {TypesEnum} from '../../entities/card';
import {Board} from '../../entities/board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.less']
})
export class BoardComponent implements OnInit {

  selectedCard: string;
  board: Board;

  constructor() {
    this.board = new Board();
    this.board.id = '1';
    this.board.cards = [
      {
        id: '1',
        type: TypesEnum.RED_CARD,
        isExposed: false,
        word: 'ציון האפס'
      }
    ];
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
