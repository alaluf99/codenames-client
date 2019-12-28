import {Component, OnInit} from '@angular/core';
import {CardTypeEnum} from '../../entities/card';
import {Board} from '../../entities/board';
import {TeamEnum, Player, PlayerTypeEnum} from '../../entities/player';
import {GameService} from '../../services/game.service';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.less']
})
export class BoardComponent implements OnInit {

  selectedCard: string;
  board: Board;
  group = TeamEnum;
  users: Player[];
  player: Player;
  playerTypeEnum = PlayerTypeEnum;
  // numOfCards: number;
  numOfCards = 3;
  // word: string;
  word = 'sharon';

  constructor(private gameService: GameService, private authenticationService: AuthenticationService) {
    this.board = new Board();
    this.board.id = '1';
    this.board.cards = [];
    // after getting cards from DB
    // this.board.cards = this.gameService.cards;

    for (let i = 0; i < 25; i++) {
      this.board.cards.push({
        id: i.toString(),
        type: CardTypeEnum.BLUE_CARD,
        isExposed: false,
        word: 'css ציון'
      });
    }
    this.users = this.gameService.users;
    this.player = this.users.find(user => user.user_id === authenticationService.currentUserId);
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

  expose() {
    const card = this.board.cards.find((c) => c.id === this.selectedCard);
    card.isExposed = true;
    this.selectedCard = null;
  }
}
