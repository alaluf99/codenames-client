import {Player} from './player';
import {Board} from './board';

export class Room {
  id?: string;
  name: string;
  users: Player[];
  status: RoomStatusEnum;
  board?: Board;
}

export enum RoomStatusEnum {
  WAITING = 'WAITING',
  ACTIVE = 'ACTIVE'
}
