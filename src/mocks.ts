// src/mocks.ts

import { type Product } from "./types";

// Несколько товаров-заглушек, чтобы проверить внешний вид
export const mockProducts: Product[] = [
  {
    _id: "1",
    title: "Посудомоечная машина Bosch 45 см",
    description: "Рабочая, небольшая, модель 45 см. Последний экземпляр.",
    price: 12990,
    imageUrl:
      "https://avatars.mds.yandex.net/get-mpic/4304063/img_id5454498736309914301.png/optimize", // временная картинка
    sellerUsername: "seller_bosch",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "2",
    title: "Диван-кровать IKEA",
    description: "Светло-серый, б/у. Надёжная конструкция.",
    price: 7990,
    imageUrl:
      "https://avatars.mds.yandex.net/get-mpic/16430688/2a000001971c14888bee864f14790cb81cb0/optimize",
    sellerUsername: "sofa_user",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "3",
    title: "Смартфон Xiaomi Redmi Note 9",
    description: "Полностью рабочий, без зарядника.",
    price: 4990,
    imageUrl:
      "https://avatars.mds.yandex.net/get-mpic/4590616/img_id1764329017944712732.jpeg/orig",
    sellerUsername: "xiaomi_seller",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "4",
    title: "Кухонная вытяжка Electrolux",
    description: "Мощная, почти новая. Гарантия 6 месяцев.",
    price: 5990,
    imageUrl:
      "https://avatars.mds.yandex.net/get-mpic/1924580/img_id8653184539956473429.jpeg/optimize",
    sellerUsername: "kitchen_master",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "5",
    title: "Смартфон Xiaomi Redmi Note 9",
    description: "Полностью рабочий, без зарядника.",
    price: 4990,
    imageUrl:
      "https://avatars.mds.yandex.net/get-mpic/4590616/img_id1764329017944712732.jpeg/orig",
    sellerUsername: "xiaomi_seller",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "6",
    title: "Кухонная вытяжка Electrolux",
    description: "Мощная, почти новая. Гарантия 6 месяцев.",
    price: 5990,
    imageUrl:
      "https://avatars.mds.yandex.net/get-mpic/1924580/img_id8653184539956473429.jpeg/optimize",
    sellerUsername: "kitchen_master",
    createdAt: new Date().toISOString(),
  },
];
