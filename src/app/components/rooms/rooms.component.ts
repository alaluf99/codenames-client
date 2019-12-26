import { Component, OnInit } from '@angular/core';
import {Room, RoomStatusEnum} from '../../entities/room';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';

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

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.getRooms();
  }

  getRooms() {
    this.dataService.getRooms().subscribe((res) => {
      this.rooms = res as Room[];
      this.roomsArray = [];
      this.rooms.forEach((room) => {
        this.roomsArray.push({
          name: room.name,
          numberOfPlayers: 2,
          status: room.status
        });
      });
      this.dataSource = this.roomsArray;
    });
  }

  enterRoom() {
    this.router.navigateByUrl('/board');
  }

  addRoom() {
    this.dataService.addRoom(this.roomName).subscribe(() => {
      this.getRooms();
      this.roomName = '';
    });
  }
}
