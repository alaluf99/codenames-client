import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  SERVER_URL = 'http://192.168.43.131:8080';
  currentRoomId: string;

  constructor(private httpClient: HttpClient) { }

  initGame() {
    return this.httpClient.post(this.SERVER_URL + '/rooms/init', {roomId: this.currentRoomId});
  }
}
