export class Player {
  id: string;
  userId: string;
  type: TypeEnum;
  group: GroupEnum;
}

export enum GroupEnum {
  BLUE,
  RED
}

export enum TypeEnum {
  GROUP_MANAGER,
  REGULAR,
  SPY
}
