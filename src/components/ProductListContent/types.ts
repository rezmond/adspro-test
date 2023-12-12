import { type SWRResponse } from 'swr';

import { Product } from '../Product';
import { type Filter } from '../Filters';

export interface ProductListService {
  products: SWRResponse<Product[], unknown, unknown>;
  filter: Filter;
  priceConfig: {
    min: number;
    max: number;
  };
  setFilter: (filter: Filter) => void;
}
