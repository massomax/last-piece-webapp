export interface Product {
  _id: string; // MongoDB-идентификатор (или UUID)
  title: string; // Название товара
  description: string; // Описание
  price: number; // Цена в целых рублях
  imageUrl: string; // Ссылка на фото товара
  sellerUsername: string; // Телеграм-юзернейм продавца (для связи)
  createdAt: string; // ISO-строка с датой создания
}

/**
 * Минимальный набор данных о Telegram-пользователе,
 * который мы будем брать из initDataUnsafe.user
 */
export interface TelegramUser {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code?: string;
}
