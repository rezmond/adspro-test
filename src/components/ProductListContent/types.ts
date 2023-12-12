import { type SWRResponse } from 'swr';

import { Product } from '../Product';

export interface ProductListService {
  products: SWRResponse<Product[], unknown, unknown>;
}
