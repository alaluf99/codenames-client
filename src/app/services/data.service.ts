import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RoomStatusEnum} from "../entities/room";
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  SERVER_URL = 'http://192.168.43.131:8080';

  constructor(private httpClient: HttpClient, private authenticationService: AuthenticationService) {}

  addRoom(roomName: string) {
    return this.httpClient.post(this.SERVER_URL + '/rooms', {name: roomName, status: RoomStatusEnum.WAITING, user: this.authenticationService.currentUserId});
  }

  addUserToRoom(roomId: string) {
    return this.httpClient.post(this.SERVER_URL + '/rooms/user', {roomId, 'userId': this.authenticationService.currentUserId})
  }

  getRooms() {
    return this.httpClient.get(this.SERVER_URL + '/rooms');
  }

  signIn({username, password}) {
    return this.httpClient.post(this.SERVER_URL + '/users/signIn', {'name': username, password});
  }

  signUp({username, password}) {
    return this.httpClient.post(this.SERVER_URL + '/users/signUp', {'name': username, password});
  }
}
