export class Player {
  id: string;
  userId: string;
  type: PlayerTypeEnum;
  group: GroupEnum;
}

export enum GroupEnum {
  BLUE,
  RED
}

export enum PlayerTypeEnum {
  TEAM_LEADER,
  REGULAR,
  SUPER_SPY
}
