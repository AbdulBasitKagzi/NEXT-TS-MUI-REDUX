import { assets } from "../assets";
import { productProps } from "../store/product/product.types";

// export const productLists: Array<productProps> = [
//   {
//     id: 1,
//     productName: 'Louis Vouiton active wear',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.louisactivewear
//       },
//       {
//         id: 2,
//         productImage: assets.images.louisactivewear
//       },
//       {
//         id: 3,
//         productImage: assets.images.louisactivewear
//       },
//       {
//         id: 4,
//         productImage: assets.images.louisactivewear
//       },
//       {
//         id: 5,
//         productImage: assets.images.louisactivewear
//       },
//       {
//         id: 6,
//         productImage: assets.images.louisactivewear
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 1,
//     category: 4,
//     brand: 4,
//     size: [2, 4],
//     color: [1, 3, 5],
//     reviewRate: 3,
//     slug: 'louisvouitonactivewear'
//   },
//   {
//     id: 2,
//     productName: 'Ocean Blue Ring',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.weddingRing
//       },
//       {
//         id: 2,
//         productImage: assets.images.weddingRing
//       },
//       {
//         id: 3,
//         productImage: assets.images.weddingRing
//       },
//       {
//         id: 4,
//         productImage: assets.images.weddingRing
//       },
//       {
//         id: 5,
//         productImage: assets.images.weddingRing
//       },
//       {
//         id: 6,
//         productImage: assets.images.weddingRing
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 1,
//     category: 3,
//     brand: 3,
//     size: [2, 3],
//     color: [2, 5],
//     reviewRate: 3,
//     slug: 'oceanbluering'
//   },
//   {
//     id: 3,
//     productName: 'Brown Leathered Wallet',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.wallet
//       },
//       {
//         id: 2,
//         productImage: assets.images.wallet
//       },
//       {
//         id: 3,
//         productImage: assets.images.wallet
//       },
//       {
//         id: 4,
//         productImage: assets.images.wallet
//       },
//       {
//         id: 5,
//         productImage: assets.images.wallet
//       },
//       {
//         id: 6,
//         productImage: assets.images.wallet
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 350,
//     productCurrentPrice: 270,
//     gender: 2,
//     human: 3,
//     category: 2,
//     brand: 2,
//     size: [2, 3, 4],
//     color: [2, 5],
//     reviewRate: 3,
//     slug: 'brownleatheredwallet'
//   },
//   {
//     id: 4,
//     productName: 'Brown Leathered Wallet',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.wallet
//       },
//       {
//         id: 2,
//         productImage: assets.images.wallet
//       },
//       {
//         id: 3,
//         productImage: assets.images.wallet
//       },
//       {
//         id: 4,
//         productImage: assets.images.wallet
//       },
//       {
//         id: 5,
//         productImage: assets.images.wallet
//       },
//       {
//         id: 6,
//         productImage: assets.images.wallet
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 590,
//     productCurrentPrice: 420,
//     gender: 2,
//     human: 3,
//     category: 2,
//     brand: 10,
//     size: [2, 4],
//     color: [2, 3],
//     reviewRate: 3,
//     slug: 'brownleatheredwallet'
//   },
//   {
//     id: 5,
//     productName: 'Brown Leathered Wallet',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.wallet
//       },
//       {
//         id: 2,
//         productImage: assets.images.wallet
//       },
//       {
//         id: 3,
//         productImage: assets.images.wallet
//       },
//       {
//         id: 4,
//         productImage: assets.images.wallet
//       },
//       {
//         id: 5,
//         productImage: assets.images.wallet
//       },
//       {
//         id: 6,
//         productImage: assets.images.wallet
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 350,
//     productCurrentPrice: 270,
//     gender: 2,
//     human: 4,
//     category: 2,
//     brand: 2,
//     size: [2, 3, 4],
//     color: [2, 5],
//     reviewRate: 3,
//     slug: 'brownleatheredwallet'
//   },
//   {
//     id: 6,
//     productName: 'Marie Claire Handbag',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.handBag
//       },
//       {
//         id: 2,
//         productImage: assets.images.handBag
//       },
//       {
//         id: 3,
//         productImage: assets.images.handBag
//       },
//       {
//         id: 4,
//         productImage: assets.images.handBag
//       },
//       {
//         id: 5,
//         productImage: assets.images.handBag
//       },
//       {
//         id: 6,
//         productImage: assets.images.handBag
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 2,
//     human: 2,
//     category: 2,
//     brand: 2,
//     size: [2, 4, 5],
//     color: [3, 5],
//     reviewRate: 3,
//     slug: 'marieclairehandbag'
//   },
//   {
//     id: 7,
//     productName: 'Red Gem earrings',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.earring
//       },
//       {
//         id: 2,
//         productImage: assets.images.earring
//       },
//       {
//         id: 3,
//         productImage: assets.images.earring
//       },
//       {
//         id: 4,
//         productImage: assets.images.earring
//       },
//       {
//         id: 5,
//         productImage: assets.images.earring
//       },
//       {
//         id: 6,
//         productImage: assets.images.earring
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 4,
//     category: 3,
//     brand: 3,
//     size: [2, 3],
//     color: [2, 5],
//     reviewRate: 3,
//     slug: 'redgemearrings'
//   },
//   {
//     id: 8,
//     productName: 'Brown Wallet',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.wallet
//       },
//       {
//         id: 2,
//         productImage: assets.images.wallet
//       },
//       {
//         id: 3,
//         productImage: assets.images.wallet
//       },
//       {
//         id: 4,
//         productImage: assets.images.wallet
//       },
//       {
//         id: 5,
//         productImage: assets.images.wallet
//       },
//       {
//         id: 6,
//         productImage: assets.images.wallet
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 350,
//     productCurrentPrice: 270,
//     gender: 2,
//     human: 3,
//     category: 2,
//     brand: 10,
//     size: [3, 4],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'brownleatheredwallet'
//   },
//   {
//     id: 9,
//     productName: 'earring',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.earring
//       },
//       {
//         id: 2,
//         productImage: assets.images.earring
//       },
//       {
//         id: 3,
//         productImage: assets.images.earring
//       },
//       {
//         id: 4,
//         productImage: assets.images.earring
//       },
//       {
//         id: 5,
//         productImage: assets.images.earring
//       },
//       {
//         id: 6,
//         productImage: assets.images.earring
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 590,
//     productCurrentPrice: 420,
//     gender: 1,
//     human: 3,
//     category: 3,
//     brand: 3,
//     size: [2, 5],
//     color: [3, 4],
//     reviewRate: 2,
//     slug: 'earning'
//   },
//   {
//     id: 10,
//     productName: 'Red Gem earrings',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.earring
//       },
//       {
//         id: 2,
//         productImage: assets.images.earring
//       },
//       {
//         id: 3,
//         productImage: assets.images.earring
//       },
//       {
//         id: 4,
//         productImage: assets.images.earring
//       },
//       {
//         id: 5,
//         productImage: assets.images.earring
//       },
//       {
//         id: 6,
//         productImage: assets.images.earring
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 4,
//     category: 3,
//     brand: 3,
//     size: [2, 3],
//     color: [2, 5],
//     reviewRate: 3,
//     slug: 'redgemearrings'
//   },
//   {
//     id: 11,
//     productName: 'Red Gem earrings',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.earring
//       },
//       {
//         id: 2,
//         productImage: assets.images.earring
//       },
//       {
//         id: 3,
//         productImage: assets.images.earring
//       },
//       {
//         id: 4,
//         productImage: assets.images.earring
//       },
//       {
//         id: 5,
//         productImage: assets.images.earring
//       },
//       {
//         id: 6,
//         productImage: assets.images.earring
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 4,
//     category: 2,
//     brand: 0,
//     size: [2, 3],
//     color: [2, 5],
//     reviewRate: 3,
//     slug: 'redgemearrings'
//   },
//   {
//     id: 12,
//     productName: 'Red Gem earrings',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.earring
//       },
//       {
//         id: 2,
//         productImage: assets.images.earring
//       },
//       {
//         id: 3,
//         productImage: assets.images.earring
//       },
//       {
//         id: 4,
//         productImage: assets.images.earring
//       },
//       {
//         id: 5,
//         productImage: assets.images.earring
//       },
//       {
//         id: 6,
//         productImage: assets.images.earring
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 2,
//     category: 2,
//     brand: 0,
//     size: [2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'redgemearrings'
//   },
//   {
//     id: 13,
//     productName: 'Red Gem earrings',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.earring
//       },
//       {
//         id: 2,
//         productImage: assets.images.earring
//       },
//       {
//         id: 3,
//         productImage: assets.images.earring
//       },
//       {
//         id: 4,
//         productImage: assets.images.earring
//       },
//       {
//         id: 5,
//         productImage: assets.images.earring
//       },
//       {
//         id: 6,
//         productImage: assets.images.earring
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 1,
//     category: 2,
//     brand: 0,
//     size: [2],
//     color: [5],
//     reviewRate: 4,
//     slug: 'redgemearrings'
//   },
//   {
//     id: 14,
//     productName: 'Red Gem earrings',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.earring
//       },
//       {
//         id: 2,
//         productImage: assets.images.earring
//       },
//       {
//         id: 3,
//         productImage: assets.images.earring
//       },
//       {
//         id: 4,
//         productImage: assets.images.earring
//       },
//       {
//         id: 5,
//         productImage: assets.images.earring
//       },
//       {
//         id: 6,
//         productImage: assets.images.earring
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 4,
//     category: 2,
//     brand: 0,
//     size: [2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'redgemearrings'
//   },
//   {
//     id: 15,
//     productName: 'Santiago Blood White',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.shoes_1
//       },
//       {
//         id: 2,
//         productImage: assets.images.shoes_1
//       },
//       {
//         id: 3,
//         productImage: assets.images.shoes_1
//       },
//       {
//         id: 4,
//         productImage: assets.images.shoes_1
//       },
//       {
//         id: 5,
//         productImage: assets.images.shoes_1
//       },
//       {
//         id: 6,
//         productImage: assets.images.shoes_1
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 2,
//     human: 4,
//     category: 4,
//     brand: 1,
//     size: [1, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'santiagobloodwhite'
//   },
//   {
//     id: 16,
//     productName: 'Salomon Lightning Blue',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.shoes_2
//       },
//       {
//         id: 2,
//         productImage: assets.images.shoes_2
//       },
//       {
//         id: 3,
//         productImage: assets.images.shoes_2
//       },
//       {
//         id: 4,
//         productImage: assets.images.shoes_2
//       },
//       {
//         id: 5,
//         productImage: assets.images.shoes_2
//       },
//       {
//         id: 6,
//         productImage: assets.images.shoes_2
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 2,
//     human: 1,
//     category: 4,
//     brand: 4,
//     size: [1, 2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'salomonlightning-blue'
//   },
//   {
//     id: 17,
//     productName: 'Salomon Lightning Blue',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.shoes_2
//       },
//       {
//         id: 2,
//         productImage: assets.images.shoes_2
//       },
//       {
//         id: 3,
//         productImage: assets.images.shoes_2
//       },
//       {
//         id: 4,
//         productImage: assets.images.shoes_2
//       },
//       {
//         id: 5,
//         productImage: assets.images.shoes_2
//       },
//       {
//         id: 6,
//         productImage: assets.images.shoes_2
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 2,
//     human: 1,
//     category: 4,
//     brand: 4,
//     size: [1, 2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'salomonlightning-blue'
//   },
//   {
//     id: 18,
//     productName: 'Salomon Lightning Blue',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.shoes_2
//       },
//       {
//         id: 2,
//         productImage: assets.images.shoes_2
//       },
//       {
//         id: 3,
//         productImage: assets.images.shoes_2
//       },
//       {
//         id: 4,
//         productImage: assets.images.shoes_2
//       },
//       {
//         id: 5,
//         productImage: assets.images.shoes_2
//       },
//       {
//         id: 6,
//         productImage: assets.images.shoes_2
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 2,
//     human: 1,
//     category: 3,
//     brand: 4,
//     size: [1, 2],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'salomonlightning-blue'
//   },
//   {
//     id: 19,
//     productName: 'Salomon Lightning Blue',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.shoes_2
//       },
//       {
//         id: 2,
//         productImage: assets.images.shoes_2
//       },
//       {
//         id: 3,
//         productImage: assets.images.shoes_2
//       },
//       {
//         id: 4,
//         productImage: assets.images.shoes_2
//       },
//       {
//         id: 5,
//         productImage: assets.images.shoes_2
//       },
//       {
//         id: 6,
//         productImage: assets.images.shoes_2
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 2,
//     human: 3,
//     category: 3,
//     brand: 4,
//     size: [4, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'salomonlightning-blue'
//   },
//   {
//     id: 20,
//     productName: 'Flat Hill Slingback',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 2,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 3,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 4,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 5,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 6,
//         productImage: assets.images.womenShoeBlue
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 1,
//     category: 3,
//     brand: 9,
//     size: [1, 2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'flat-hill-slingback'
//   },
//   {
//     id: 21,
//     productName: 'Flat Hill Slingback',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 2,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 3,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 4,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 5,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 6,
//         productImage: assets.images.womenShoeBlue
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 2,
//     category: 3,
//     brand: 9,
//     size: [1, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'flat-hill-slingback'
//   },
//   {
//     id: 22,
//     productName: 'Flat Hill Slingback',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 2,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 3,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 4,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 5,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 6,
//         productImage: assets.images.womenShoeBlue
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 3,
//     category: 3,
//     brand: 5,
//     size: [1, 2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'flat-hill-slingback'
//   },
//   {
//     id: 23,
//     productName: 'Flat Hill Slingback',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 2,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 3,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 4,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 5,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 6,
//         productImage: assets.images.womenShoeYellow
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 4,
//     category: 3,
//     brand: 9,
//     size: [1, 2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'flat-hill-slingback'
//   },
//   {
//     id: 24,
//     productName: 'Flat Hill Slingback',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 2,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 3,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 4,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 5,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 6,
//         productImage: assets.images.womenShoeYellow
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 1,
//     category: 3,
//     brand: 4,
//     size: [1, 2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'flat-hill-slingback'
//   },
//   {
//     id: 25,
//     productName: 'Flat Hill Slingback',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 2,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 3,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 4,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 5,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 6,
//         productImage: assets.images.womenShoeYellow
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 1,
//     category: 3,
//     brand: 8,
//     size: [1, 2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'flat-hill-slingback'
//   },
//   {
//     id: 26,
//     productName: 'Flat Hill Slingback',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 2,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 3,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 4,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 5,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 6,
//         productImage: assets.images.womenShoeYellow
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 4,
//     category: 3,
//     brand: 8,
//     size: [1, 2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'flat-hill-slingback'
//   },
//   {
//     id: 27,
//     productName: 'Flat Hill Slingback',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 2,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 3,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 4,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 5,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 6,
//         productImage: assets.images.womenShoeYellow
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 4,
//     category: 3,
//     brand: 5,
//     size: [1, 2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'flat-hill-slingback'
//   },
//   {
//     id: 28,
//     productName: 'Flat Hill Slingback',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 2,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 3,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 4,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 5,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 6,
//         productImage: assets.images.womenShoeYellow
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 4,
//     category: 3,
//     brand: 5,
//     size: [1, 2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'flat-hill-slingback'
//   },
//   {
//     id: 29,
//     productName: 'Flat Hill Slingback',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 2,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 3,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 4,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 5,
//         productImage: assets.images.womenShoeYellow
//       },
//       {
//         id: 6,
//         productImage: assets.images.womenShoeYellow
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 3,
//     category: 3,
//     brand: 8,
//     size: [1, 2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'flat-hill-slingback'
//   },
//   {
//     id: 30,
//     productName: 'Flat Hill Slingback',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 2,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 3,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 4,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 5,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 6,
//         productImage: assets.images.womenShoeBlue
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 2,
//     human: 2,
//     category: 2,
//     brand: 2,
//     size: [1, 2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'flat-hill-slingback'
//   },
//   {
//     id: 31,
//     productName: 'Flat Hill Slingback',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 2,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 3,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 4,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 5,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 6,
//         productImage: assets.images.womenShoeBlue
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     human: 1,
//     gender: 2,
//     category: 2,
//     brand: 2,
//     size: [1, 2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'flat-hill-slingback'
//   },
//   {
//     id: 32,
//     productName: 'Flat Hill Slingback',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 2,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 3,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 4,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 5,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 6,
//         productImage: assets.images.womenShoeBlue
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 2,
//     human: 1,
//     category: 2,
//     brand: 2,
//     size: [1, 2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'flat-hill-slingback'
//   },
//   {
//     id: 33,
//     productName: 'Leather Shoe',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.leatherShoe
//       },
//       {
//         id: 2,
//         productImage: assets.images.leatherShoe
//       },
//       {
//         id: 3,
//         productImage: assets.images.leatherShoe
//       },
//       {
//         id: 4,
//         productImage: assets.images.leatherShoe
//       },
//       {
//         id: 5,
//         productImage: assets.images.leatherShoe
//       },
//       {
//         id: 6,
//         productImage: assets.images.leatherShoe
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 2,
//     human: 4,
//     category: 2,
//     brand: 10,
//     size: [1, 2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'leatherShoe'
//   },
//   {
//     id: 34,
//     productName: 'Leather Shoe',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.leatherShoe
//       },
//       {
//         id: 2,
//         productImage: assets.images.leatherShoe
//       },
//       {
//         id: 3,
//         productImage: assets.images.leatherShoe
//       },
//       {
//         id: 4,
//         productImage: assets.images.leatherShoe
//       },
//       {
//         id: 5,
//         productImage: assets.images.leatherShoe
//       },
//       {
//         id: 6,
//         productImage: assets.images.leatherShoe
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 3,
//     category: 2,
//     brand: 2,
//     size: [1, 2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'leatherShoe'
//   },
//   {
//     id: 35,
//     productName: 'Flat Hill Slingback',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.leatherShoe
//       },
//       {
//         id: 2,
//         productImage: assets.images.leatherShoe
//       },
//       {
//         id: 3,
//         productImage: assets.images.leatherShoe
//       },
//       {
//         id: 4,
//         productImage: assets.images.leatherShoe
//       },
//       {
//         id: 5,
//         productImage: assets.images.leatherShoe
//       },
//       {
//         id: 6,
//         productImage: assets.images.leatherShoe
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 2,
//     human: 4,
//     category: 5,
//     brand: 10,
//     size: [1, 2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'flat-hill-slingback'
//   },
//   {
//     id: 36,
//     productName: 'Shoe Blue',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 2,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 3,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 4,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 5,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 6,
//         productImage: assets.images.womenShoeBlue
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 2,
//     human: 1,
//     category: 5,
//     brand: 10,
//     size: [1, 2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'shoeblue'
//   },
//   {
//     id: 37,
//     productName: 'Shoe Blue',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 2,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 3,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 4,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 5,
//         productImage: assets.images.womenShoeBlue
//       },
//       {
//         id: 6,
//         productImage: assets.images.womenShoeBlue
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 2,
//     human: 2,
//     category: 5,
//     brand: 10,
//     size: [1, 2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'flat-hill-slingback'
//   },
//   {
//     id: 38,
//     productName: 'Red dress valentino',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.reddressvalentino
//       },
//       {
//         id: 2,
//         productImage: assets.images.reddressvalentino
//       },
//       {
//         id: 3,
//         productImage: assets.images.reddressvalentino
//       },
//       {
//         id: 4,
//         productImage: assets.images.reddressvalentino
//       },
//       {
//         id: 5,
//         productImage: assets.images.reddressvalentino
//       },
//       {
//         id: 6,
//         productImage: assets.images.reddressvalentino
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 1,
//     category: 1,
//     brand: 10,
//     size: [1, 2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'reddressvalentino'
//   },
//   {
//     id: 39,
//     productName: 'Red dress valentino',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.reddressvalentino
//       },
//       {
//         id: 2,
//         productImage: assets.images.reddressvalentino
//       },
//       {
//         id: 3,
//         productImage: assets.images.reddressvalentino
//       },
//       {
//         id: 4,
//         productImage: assets.images.reddressvalentino
//       },
//       {
//         id: 5,
//         productImage: assets.images.reddressvalentino
//       },
//       {
//         id: 6,
//         productImage: assets.images.reddressvalentino
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 2,
//     human: 4,
//     category: 5,
//     brand: 10,
//     size: [1, 2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'reddressvalentino'
//   },
//   {
//     id: 40,
//     productName: 'Red dress Valentino',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.reddressvalentino
//       },
//       {
//         id: 2,
//         productImage: assets.images.reddressvalentino
//       },
//       {
//         id: 3,
//         productImage: assets.images.reddressvalentino
//       },
//       {
//         id: 4,
//         productImage: assets.images.reddressvalentino
//       },
//       {
//         id: 5,
//         productImage: assets.images.reddressvalentino
//       },
//       {
//         id: 6,
//         productImage: assets.images.reddressvalentino
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 4,
//     category: 2,
//     brand: 2,
//     size: [1, 2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'reddressvalentino'
//   },
//   {
//     id: 41,
//     productName: 'Shiny dress givenchy',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.shinydressgivenchy
//       },
//       {
//         id: 2,
//         productImage: assets.images.shinydressgivenchy
//       },
//       {
//         id: 3,
//         productImage: assets.images.shinydressgivenchy
//       },
//       {
//         id: 4,
//         productImage: assets.images.shinydressgivenchy
//       },
//       {
//         id: 5,
//         productImage: assets.images.shinydressgivenchy
//       },
//       {
//         id: 6,
//         productImage: assets.images.shinydressgivenchy
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 4,
//     category: 2,
//     brand: 2,
//     size: [2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'shinydressgivenchy'
//   },
//   {
//     id: 42,
//     productName: 'Shiny dress givenchy',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.shinydressgivenchy
//       },
//       {
//         id: 2,
//         productImage: assets.images.shinydressgivenchy
//       },
//       {
//         id: 3,
//         productImage: assets.images.shinydressgivenchy
//       },
//       {
//         id: 4,
//         productImage: assets.images.shinydressgivenchy
//       },
//       {
//         id: 5,
//         productImage: assets.images.shinydressgivenchy
//       },
//       {
//         id: 6,
//         productImage: assets.images.shinydressgivenchy
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 1,
//     category: 2,
//     brand: 2,
//     size: [3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'shinydressgivenchy'
//   },
//   {
//     id: 43,
//     productName: 'Shiny dress givenchy',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.shinydressgivenchy
//       },
//       {
//         id: 2,
//         productImage: assets.images.shinydressgivenchy
//       },
//       {
//         id: 3,
//         productImage: assets.images.shinydressgivenchy
//       },
//       {
//         id: 4,
//         productImage: assets.images.shinydressgivenchy
//       },
//       {
//         id: 5,
//         productImage: assets.images.shinydressgivenchy
//       },
//       {
//         id: 6,
//         productImage: assets.images.shinydressgivenchy
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 2,
//     category: 2,
//     brand: 2,
//     size: [1, 2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'shinydressgivenchy'
//   },
//   {
//     id: 44,
//     productName: 'Women black gucci',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.womenblackgucci
//       },
//       {
//         id: 2,
//         productImage: assets.images.womenblackgucci
//       },
//       {
//         id: 3,
//         productImage: assets.images.womenblackgucci
//       },
//       {
//         id: 4,
//         productImage: assets.images.womenblackgucci
//       },
//       {
//         id: 5,
//         productImage: assets.images.womenblackgucci
//       },
//       {
//         id: 6,
//         productImage: assets.images.womenblackgucci
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 3,
//     category: 2,
//     brand: 2,
//     size: [1],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'womenblackgucci'
//   },
//   {
//     id: 45,
//     productName: 'Women black gucci',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.womenblackgucci
//       },
//       {
//         id: 2,
//         productImage: assets.images.womenblackgucci
//       },
//       {
//         id: 3,
//         productImage: assets.images.womenblackgucci
//       },
//       {
//         id: 4,
//         productImage: assets.images.womenblackgucci
//       },
//       {
//         id: 5,
//         productImage: assets.images.womenblackgucci
//       },
//       {
//         id: 6,
//         productImage: assets.images.womenblackgucci
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 3,
//     category: 3,
//     brand: 3,
//     size: [2],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'womenblackgucci'
//   },
//   {
//     id: 46,
//     productName: 'Women black gucci',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.womenblackgucci
//       },
//       {
//         id: 2,
//         productImage: assets.images.womenblackgucci
//       },
//       {
//         id: 3,
//         productImage: assets.images.womenblackgucci
//       },
//       {
//         id: 4,
//         productImage: assets.images.womenblackgucci
//       },
//       {
//         id: 5,
//         productImage: assets.images.womenblackgucci
//       },
//       {
//         id: 6,
//         productImage: assets.images.womenblackgucci
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 4,
//     category: 3,
//     brand: 3,
//     size: [1, 2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'womenblackgucci'
//   },
//   {
//     id: 47,
//     productName: 'Women white jacket',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.womenwhitejacket
//       },
//       {
//         id: 2,
//         productImage: assets.images.womenwhitejacket
//       },
//       {
//         id: 3,
//         productImage: assets.images.womenwhitejacket
//       },
//       {
//         id: 4,
//         productImage: assets.images.womenwhitejacket
//       },
//       {
//         id: 5,
//         productImage: assets.images.womenwhitejacket
//       },
//       {
//         id: 6,
//         productImage: assets.images.womenwhitejacket
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 4,
//     category: 3,
//     brand: 3,
//     size: [1, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'womenwhitejacket'
//   },
//   {
//     id: 48,
//     productName: 'Women white jacekt',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.womenwhitejacket
//       },
//       {
//         id: 2,
//         productImage: assets.images.womenwhitejacket
//       },
//       {
//         id: 3,
//         productImage: assets.images.womenwhitejacket
//       },
//       {
//         id: 4,
//         productImage: assets.images.womenwhitejacket
//       },
//       {
//         id: 5,
//         productImage: assets.images.womenwhitejacket
//       },
//       {
//         id: 6,
//         productImage: assets.images.womenwhitejacket
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 4,
//     category: 3,
//     brand: 3,
//     size: [1, 2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'womenwhitejacket'
//   },
//   {
//     id: 49,
//     productName: 'Women white jacket',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.womenwhitejacket
//       },
//       {
//         id: 2,
//         productImage: assets.images.womenwhitejacket
//       },
//       {
//         id: 3,
//         productImage: assets.images.womenwhitejacket
//       },
//       {
//         id: 4,
//         productImage: assets.images.womenwhitejacket
//       },
//       {
//         id: 5,
//         productImage: assets.images.womenwhitejacket
//       },
//       {
//         id: 6,
//         productImage: assets.images.womenwhitejacket
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 1,
//     category: 3,
//     brand: 3,
//     size: [2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'womenwhitejacket'
//   },
//   {
//     id: 50,
//     productName: 'Elegent dress',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.elgantdress
//       },
//       {
//         id: 2,
//         productImage: assets.images.elgantdress
//       },
//       {
//         id: 3,
//         productImage: assets.images.elgantdress
//       },
//       {
//         id: 4,
//         productImage: assets.images.elgantdress
//       },
//       {
//         id: 5,
//         productImage: assets.images.elgantdress
//       },
//       {
//         id: 6,
//         productImage: assets.images.elgantdress
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 450,
//     gender: 1,
//     human: 2,
//     category: 1,
//     brand: 1,
//     size: [1, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'elgantdress'
//   },
//   {
//     id: 51,
//     productName: 'Elegent dress',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.elgantdress
//       },
//       {
//         id: 2,
//         productImage: assets.images.elgantdress
//       },
//       {
//         id: 3,
//         productImage: assets.images.elgantdress
//       },
//       {
//         id: 4,
//         productImage: assets.images.elgantdress
//       },
//       {
//         id: 5,
//         productImage: assets.images.elgantdress
//       },
//       {
//         id: 6,
//         productImage: assets.images.elgantdress
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 200,
//     gender: 1,
//     human: 3,
//     category: 1,
//     brand: 1,
//     size: [2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'elegentdress'
//   },
//   {
//     id: 52,
//     productName: 'Dolce & Gabbana',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.dolce_gabbana
//       },
//       {
//         id: 2,
//         productImage: assets.images.dolce_gabbana
//       },
//       {
//         id: 3,
//         productImage: assets.images.dolce_gabbana
//       },
//       {
//         id: 4,
//         productImage: assets.images.dolce_gabbana
//       },
//       {
//         id: 5,
//         productImage: assets.images.dolce_gabbana
//       },
//       {
//         id: 6,
//         productImage: assets.images.dolce_gabbana
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 530,
//     gender: 1,
//     human: 4,
//     category: 1,
//     brand: 1,
//     size: [2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'dolce_gabbana'
//   },
//   {
//     id: 53,
//     productName: 'Dolce & Gabbana',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.dolce_gabbana
//       },
//       {
//         id: 2,
//         productImage: assets.images.dolce_gabbana
//       },
//       {
//         id: 3,
//         productImage: assets.images.dolce_gabbana
//       },
//       {
//         id: 4,
//         productImage: assets.images.dolce_gabbana
//       },
//       {
//         id: 5,
//         productImage: assets.images.dolce_gabbana
//       },
//       {
//         id: 6,
//         productImage: assets.images.dolce_gabbana
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 2,
//     category: 1,
//     brand: 1,
//     size: [2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'dolce_gabbana'
//   },
//   {
//     id: 54,
//     productName: 'Black Dress',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.blackdress
//       },
//       {
//         id: 2,
//         productImage: assets.images.blackdress
//       },
//       {
//         id: 3,
//         productImage: assets.images.blackdress
//       },
//       {
//         id: 4,
//         productImage: assets.images.blackdress
//       },
//       {
//         id: 5,
//         productImage: assets.images.blackdress
//       },
//       {
//         id: 6,
//         productImage: assets.images.blackdress
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 1,
//     human: 3,
//     category: 1,
//     brand: 1,
//     size: [2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'blackdress'
//   },

//   {
//     id: 55,
//     productName: 'Black Dress',
//     productImages: [
//       {
//         id: 1,
//         productImage: assets.images.blackdress
//       },
//       {
//         id: 2,
//         productImage: assets.images.blackdress
//       },
//       {
//         id: 3,
//         productImage: assets.images.blackdress
//       },
//       {
//         id: 4,
//         productImage: assets.images.blackdress
//       },
//       {
//         id: 5,
//         productImage: assets.images.blackdress
//       },
//       {
//         id: 6,
//         productImage: assets.images.blackdress
//       }
//     ],
//     productDescription: ['desc 1', 'desc 2'],
//     productOriginalPrice: 400,
//     productCurrentPrice: 330,
//     gender: 2,
//     human: 3,
//     category: 1,
//     brand: 1,
//     size: [2, 3],
//     color: [2, 5],
//     reviewRate: 4,
//     slug: 'blackdress'
//   }
// ];
