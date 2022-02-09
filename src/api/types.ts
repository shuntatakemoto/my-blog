import { ParsedUrlQuery } from 'node:querystring';

export type Blog = {
  id: string;
  title: string;
  subTitle: string;
  thumbnail: Thumbnail;
  body: string;
  category: Category;
  createdAt: string | number | Date;
  publishedAt: string | number | Date;
  revisedAt?: string | number | Date;
  updatedAt?: string | number | Date;
  params: Params;
};

export type Thumbnail = {
  url: string;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

// export type Params = {
//   id: string;
// };

export type Category = {
  id: string;
  name: string;
  color: 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink' | undefined;
  params: Params;
  createdAt: string | number | Date;
  publishedAt: string | number | Date;
  revisedAt?: string | number | Date;
  updatedAt?: string | number | Date;
};
