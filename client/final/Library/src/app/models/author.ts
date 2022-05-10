import { Book } from './book';

export interface Author {
  photos: string;
  wikipedia: string;
  name: string;
  key: string;
  birth_date: string;
  author_key: string;
  bio: string;
  img_url: string;
}


export const authors = [{} as Author];
