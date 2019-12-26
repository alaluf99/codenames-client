import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  SERVER_URL = 'http://192.168.43.131:8080';

  constructor(private httpClient: HttpClient) { }

  initGame(roomId: string) {
    this.httpClient.post(this.SERVER_URL + '/rooms/init', {roomId});
  }
}
