import './../productosMock.json'

export interface Card {
  image: string;
  description: string;
  calification: number;
  numComments: number;
  certification: boolean;
  alexa: boolean;
  certificationClimate: boolean;
}

export interface CardsResponse {
  cards: Card[];
}


