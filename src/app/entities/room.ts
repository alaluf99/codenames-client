import {Player} from './player';
import {Board} from './board';

export class Room {
  id?: string;
  name: string;
  numberOfPlayers: number;
  status: RoomStatusEnum;
  board?: Board;
}

export enum RoomStatusEnum {
  WAITING,
  INITIALIZING,
  STARTED
}
