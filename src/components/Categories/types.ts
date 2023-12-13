import { type SWRResponse } from 'swr';

export type Category = string;
export type SetCategory = (category: Category) => void;

export interface CategoryService {
  active: Category | null;
  available: SWRResponse<Category[], Error, unknown>;
  setActive: SetCategory;
}
