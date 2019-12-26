import { Component, OnInit } from '@angular/core';
import {Room, RoomStatusEnum} from '../../entities/room';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';
import {GameService} from "../../services/game.service";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.less']
})
export class RoomsComponent implements OnInit {
  columnsToDisplay = ['name', 'numberOfPlayers', 'status'];
  roomName: string;
  dataSource;
  rooms: Room[];
  columnsInHebrew = {
    name: 'שם חדר',
    status: 'סטטוס',
    numberOfPlayers: 'מספר משתתפים'
  };
  roomsArray = [];

  constructor(private dataService: DataService, private router: Router, private gameService: GameService) { }

  ngOnInit() {
    this.getRooms();
  }

  getRooms() {
    this.dataService.getRooms().subscribe((res) => {
      this.rooms = res as Room[];
      this.roomsArray = [];
      this.rooms.forEach((room) => {
        this.roomsArray.push({
          id: room.id,
          name: room.name,
          numberOfPlayers: 1,
          status: room.status
        });
      });
      this.dataSource = this.roomsArray;
    });
  }

  enterRoom(roomId: string) {
    this.dataService.addUserToRoom(roomId).subscribe((res: any) => {
      this.gameService.currentRoomId = res._id as string;
      this.router.navigateByUrl('/waiting');
    });
  }

  addRoom() {
    this.dataService.addRoom(this.roomName).subscribe(() => {
      this.getRooms();
      this.roomName = '';
    });
  }
}
