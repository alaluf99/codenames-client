import {Player} from './player';
import {Board} from './board';

export class Room {
  id?: string;
  name: string;
  user: Player;
  status: RoomStatusEnum;
  board?: Board;
}

export enum RoomStatusEnum {
  WAITING = 'WAITING',
  INITIALIZING = 'INITIALIZING',
  ACTIVE = 'ACTIVE'
}
