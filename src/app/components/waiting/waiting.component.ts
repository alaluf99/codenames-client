import {Component, OnInit} from '@angular/core';
import {GameService} from '../../services/game.service';
import {Router} from '@angular/router';
import {Room} from '../../entities/room';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.less']
})
export class WaitingComponent implements OnInit {

  constructor(private gameService: GameService, private router: Router) {
  }

  ngOnInit() {
  }

  enterToGame() {
    this.gameService.initGame().subscribe((res: Room) => {
      // console.log(res);
      this.gameService.users = res.users;
      // after getting cards from DB
      // this.gameService.cards = res.board.cards;
      console.log(this.gameService.users);
      // console.log(this.gameService.cards);
      this.router.navigateByUrl('/board');
    });
  }

}
