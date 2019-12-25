export class Card {
  id: string;
  word: string;
  type: TypesEnum;
  isShown: boolean;
}

export enum TypesEnum {
  WORD_CARD,
  GREY_CARD,
  BLUE_CARD,
  RED_CARD,
  BLACK_CARD,
}
