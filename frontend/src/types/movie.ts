import { Genre } from './genre';

export type Movie = {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  date: string;
  genre: Genre[];
};
