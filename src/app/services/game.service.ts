import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Player} from '../entities/player';
import {Card} from '../entities/card';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  SERVER_URL = 'http://localhost:8080';
  currentRoomId: string;
  // tslint:disable-next-line:variable-name
  private _users: Player[];
  // tslint:disable-next-line:variable-name
  private _cards: Card[];

  constructor(private httpClient: HttpClient) { }

  initGame() {
    return this.httpClient.post(this.SERVER_URL + '/rooms/init', {roomId: this.currentRoomId});
  }

  get users(): Player[] {
    return this._users;
  }

  set users(value: Player[]) {
    this._users = value;
  }

  get cards(): Card[] {
    return this._cards;
  }

  set cards(value: Card[]) {
    this._cards = value;
  }
}
