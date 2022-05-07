export interface Book {
  cover_i: string;
  title: string;
  author_name: string;
  first_publish_year: number;
  key: string;
  author_key: string;
  publisher: string;
  img_url: string;
}


export const books = [{} as Book];
