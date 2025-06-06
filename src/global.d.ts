// src/global.d.ts

// Расширяем глобальный объект Window: говорим TS, что window.Telegram существует
declare global {
  interface Window {
    Telegram: {
      WebApp: {
        // initData — строка, которую Telegram передаёт при открытии WebApp
        initData: string;
        // initDataUnsafe — разобранные данные (не гарантируют подпись)
        initDataUnsafe: {
          user?: {
            id: number;
            first_name?: string;
            last_name?: string;
            username?: string;
            language_code?: string;
          };
          chat?: {
            id: number;
            type: string;
          };
          receiver?: string;
        };
        // Функция, которую нужно вызвать, чтобы Telegram убрал спиннер
        ready: () => void;
        // Скрывает верхние меню, если нужно (пример)
        hideMenuButton: () => void;
        // Можно управлять MainButton (надпись, цвет)
        MainButton: {
          setText: (text: string) => void;
          show: () => void;
          hide: () => void;
          // другие методы по желанию...
        };
      };
    };
  }
}

// Чтобы TS видел декларацию, обязательно написать export {} (пустой экспорт)
export {};
