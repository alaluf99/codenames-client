export class Card {
  id: string;
  word: string;
  type: CardTypeEnum;
  isExposed: boolean;
}

export enum CardTypeEnum {
  GREY_CARD,
  BLUE_CARD,
  RED_CARD,
  BLACK_CARD,
}
