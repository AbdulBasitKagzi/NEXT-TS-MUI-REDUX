export const backend_routes = {
  user: {
    login: process.env.NEXT_PUBLIC_URL + "/api/login",
    set_user_delivery_detail:
      process.env.NEXT_PUBLIC_URL + "/api/shipping-detail",
    set_user_payment_detail:
      process.env.NEXT_PUBLIC_URL + "/api/payment-detail",
    place_order: process.env.NEXT_PUBLIC_URL + "/api/order",
    user_like_product: process.env.NEXT_PUBLIC_URL + "/api/product-like",
  },

  product: {
    get_all_products: process.env.NEXT_PUBLIC_URL + "/api/products",
    get_product: process.env.NEXT_PUBLIC_URL + "/api/product",
    get_filtered_products: process.env.NEXT_PUBLIC_URL + "/api/filter/product",
  },

  cart: {
    cart_add_update: process.env.NEXT_PUBLIC_URL + "/api/cart",
    get_user_cart: process.env.NEXT_PUBLIC_URL + "/api/cart",
    cart_update: process.env.NEXT_PUBLIC_URL + "/api/cart",
    increment_decrement_cartProduct:
      process.env.NEXT_PUBLIC_URL + "/api/cart-increment-decrement",
  },
};
