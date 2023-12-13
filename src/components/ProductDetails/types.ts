import { type SWRResponse } from 'swr';

import { Url } from '@/shared/types';

import { Category } from '../Categories';

type Id = number;
export type Rating = {
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

export interface ProductService {
  product: SWRResponse<Product, unknown, unknown>;
}
