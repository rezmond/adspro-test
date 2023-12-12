import { Url } from '@/shared/types';

import { Category } from '../Categories';

type Id = number;
type Rating = {
  rate: number;
  count: number;
};

export type Product = {
  id: Id;
  category: Category;
  description: string;
  image: Url;
  price: number;
  rating: Rating;
  title: string;
};
