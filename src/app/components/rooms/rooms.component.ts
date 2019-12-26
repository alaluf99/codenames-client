import { Component, OnInit } from '@angular/core';
import {Room, RoomStatusEnum} from "../../entities/room";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.less']
})
export class RoomsComponent implements OnInit {
  columnsToDisplay = ['name', 'numberOfPlayers', 'status', 'position'];
  dataSource;
  columnsInHebrew = {
    name: 'שם חדר',
    status: 'סטטוס',
    numberOfPlayers: 'מספר משתתפים'
  };

  ELEMENT_DATA: Room []  = [
    {
      name: 'חדר מלך',
      numberOfPlayers: 4,
      status: RoomStatusEnum.STARTED
    },
    {
      name: 'חדר מלך',
      numberOfPlayers: 4,
      status: RoomStatusEnum.STARTED
    },
    {
      name: 'חדר מלך',
      numberOfPlayers: 4,
      status: RoomStatusEnum.STARTED
    },
    {
      name: 'חדר מלך',
      numberOfPlayers: 4,
      status: RoomStatusEnum.STARTED
    },
    {
      name: 'חדר מלך',
      numberOfPlayers: 4,
      status: RoomStatusEnum.STARTED
    },
    {
      name: 'חדר מלך',
      numberOfPlayers: 4,
      status: RoomStatusEnum.STARTED
    }
  ]

  constructor() { }

  ngOnInit() {
    this.dataSource = this.ELEMENT_DATA;
  }

  enterRoom() {

  }

  addRoom() {
    console.log('hi');
  }
}
