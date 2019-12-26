import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RoomStatusEnum} from "../entities/room";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  SERVER_URL = 'http://192.168.43.218:8080';

  constructor(private httpClient: HttpClient) {}

  addRoom() {
    this.httpClient.post('/rooms', {name: 'חדר מלך', status: RoomStatusEnum.WAITING, cards: [], users: []});
  }
}
