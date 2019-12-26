import { Component, OnInit } from '@angular/core';
import {Room, RoomStatusEnum} from '../../entities/room';
import {DataService} from "../../services/data.service";
import {Router} from "@angular/router";

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
      status: RoomStatusEnum.ACTIVE
    },
    {
      name: 'חדר מלך',
      numberOfPlayers: 4,
      status: RoomStatusEnum.ACTIVE
    },
    {
      name: 'חדר מלך',
      numberOfPlayers: 4,
      status: RoomStatusEnum.ACTIVE
    },
    {
      name: 'חדר מלך',
      numberOfPlayers: 4,
      status: RoomStatusEnum.ACTIVE
    },
    {
      name: 'חדר מלך',
      numberOfPlayers: 4,
      status: RoomStatusEnum.ACTIVE
    },
    {
      name: 'חדר מלך',
      numberOfPlayers: 4,
      status: RoomStatusEnum.ACTIVE
    }
  ];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataSource = this.ELEMENT_DATA;
  }

  enterRoom() {
    this.router.navigateByUrl('/board');
  }

  addRoom() {
    this.dataService.addRoom().subscribe((res) => {
      console.log(res);
    });
  }
}
