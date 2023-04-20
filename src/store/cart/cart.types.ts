export interface cartProducts {
  id: number;
  product_id: string;
  productName: string;
  productImages: { id: number; productImage: string | undefined }[];
  productDescription: Array<string>;
  productOriginalPrice: number;
  productCurrentPrice: number;
  gender: number;
  human: number;
  category: number;
  brand: number;
  size: Array<number>;
  color: Array<number>;
  reviewRate: number;
  slug: string;
  quantity: number;
  selectedSize?: number;
  selectedColor?: number;
}

export interface cartSliceState {
  cartProducts: cartProducts[];
  added: boolean;
  subTotal: number;
}
