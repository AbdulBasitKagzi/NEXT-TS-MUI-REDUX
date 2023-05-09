import { productProps } from "../product/product.types";

export interface cartProducts {
  id: number;
  product: productProps;
  quantity: number;
  color?: number;
  size?: number;
  total_amount: number;
}

export interface cartSliceState {
  cartProducts: cartProducts[];
  added: boolean;
  subTotal: number;
  message: string;
  isLoading: boolean;
  page: number;
  error: boolean;
}
