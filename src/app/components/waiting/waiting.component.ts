import { Component, OnInit } from '@angular/core';
import {GameService} from "../../services/game.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.less']
})
export class WaitingComponent implements OnInit {

  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit() {
  }

  enterToGame() {
    this.gameService.initGame().subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl('/board');
    });
  }

}
