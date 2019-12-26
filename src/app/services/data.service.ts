import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RoomStatusEnum} from "../entities/room";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  SERVER_URL = 'http://192.168.43.131:8080';

  constructor(private httpClient: HttpClient) {}

  addRoom(roomName: string) {
    return this.httpClient.post(this.SERVER_URL + '/rooms', {name: roomName, status: RoomStatusEnum.WAITING, cards: [], users: []});
  }

  getRooms() {
    return this.httpClient.get(this.SERVER_URL + '/rooms');
  }
}
