export interface filterQueryTypes {
  gender: string | string[] | undefined;
  brands: Array<number>;
  categories: Array<number>;
  sizes: Array<number> | null;
  priceRange: { min: string; max: string };
  page: number;
}

export interface data {
  id: number;
  value: string;
  slug: string;
}
