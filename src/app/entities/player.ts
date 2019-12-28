export class Player {
  id: string;
  // tslint:disable-next-line:variable-name
  user_id: string;
  userType: PlayerTypeEnum;
  team: TeamEnum;
}

export enum TeamEnum {
  BLUE = 'BLUE',
  RED = 'RED'
}

export enum PlayerTypeEnum {
  TEAM_LEADER = 'TEAM_LEADER',
  REGULAR = 'REGULAR',
  SUPER_SPY = 'SUPER_SPY'
}
