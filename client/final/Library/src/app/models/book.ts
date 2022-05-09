import { Author } from "./author";

export interface Book {
  cover_i: string;
  title: string;
  title_suggest: string;
  author_name: string;
  first_publish_year: number;
  subject: string[];
  key: string;
  type:string;
  author_key: string[];
  subject_key: string;
  publisher: string;
  img_url: string;
  language: string;
}


export const books = [{} as Book];
