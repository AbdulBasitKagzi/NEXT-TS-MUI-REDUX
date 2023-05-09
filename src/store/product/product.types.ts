export interface SelectedProductProps {
  id: number;
  productName: string;
  productImages: { id: number; productImage: string | undefined }[];
  productDescription: string[];
  productOriginalPrice: number;
  productCurrentPrice: number;
  gender: genderProps;
  category: categoryProps;
  brand: brandProps;

  sizes: sizes[];
  colors: colors[];
  reviewRate: number;
  slug: string;
  selectedSize?: number;
  selectedColor?: number;
  remainingStars?: number;
}

export interface sizes {
  id: number;
  value: string;
  slug: string;
}

export interface colors {
  id: number;
  name: string;
  hax_value: string;
}
export interface productProps {
  id: number;
  productName: string;
  productImages: { id: number; productImage: string | undefined }[];
  productDescription: string[];
  productOriginalPrice: number;
  productCurrentPrice: number;
  gender: genderProps;
  category: categoryProps;
  brand: brandProps;

  sizes: sizes[];
  colors: colors[];
  selectedSize?: number;
  selectedColor?: number;
  reviewRate: number;
  slug: string;
}
export interface product {
  id: string;
  type: string;
  category: string;
  image: string | undefined;
  productName: string;
  price: string;
  cancelPrice: string;
}
export interface genderProps {
  id: number;
  value: string;
  slug: string;
}
export interface brandProps {
  id: number;
  value: string;
  slug: string;
}
export interface categoryProps {
  id: number;
  value: string;
  slug: string;
}

export interface ProductSliceType {
  Products: product[];
  ProductsList: productProps[];
  filteredProducts: productProps[];
  selectedProduct: SelectedProductProps | null | undefined;
  isLoading: boolean;
  totalProduct: number;
}
