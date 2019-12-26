import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RoomStatusEnum} from "../entities/room";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  SERVER_URL = 'http://192.168.43.131:8080';

  constructor(private httpClient: HttpClient) {}

  addRoom() {
    return this.httpClient.post(this.SERVER_URL + '/rooms', {name: 'חדר gdf', status: RoomStatusEnum.ACTIVE, cards: [], users: []});
  }

  getRooms() {
    return this.httpClient.get(this.SERVER_URL + '/rooms');
  }
}
