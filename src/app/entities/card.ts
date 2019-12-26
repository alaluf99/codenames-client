export class Card {
  id: string;
  word: string;
  type: TypesEnum;
  isExposed: boolean;
}

export enum TypesEnum {
  GREY_CARD,
  BLUE_CARD,
  RED_CARD,
  BLACK_CARD,
}
