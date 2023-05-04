export const backend_routes = {
  login: process.env.NEXT_PUBLIC_URL + "/api/login",
  get_all_products: process.env.NEXT_PUBLIC_URL + "/api/products",
  get_product: process.env.NEXT_PUBLIC_URL + "/api/product",

  cart: {
    cart_add_update: process.env.NEXT_PUBLIC_URL + "/api/cart",
    get_user_cart: process.env.NEXT_PUBLIC_URL + "/api/cart",
    cart_update: process.env.NEXT_PUBLIC_URL + "/api/cart",
  },

  increment_decrement_cartProduct:
    process.env.NEXT_PUBLIC_URL + "/api/cart-increment-decrement",
};
