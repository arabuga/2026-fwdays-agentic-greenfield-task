export const uk = {
  shell: {
    wordmark: "Weather Explorer",
    eyebrow: "План вихідних без зайвого шуму",
    heroTitle: "Оберіть місто і оцініть, чи варта погода поїздки",
    heroSubtitle:
      "Спокійний прогноз на 7 днів з оцінкою комфорту, картою і підказкою для найближчих вихідних.",
    searchLabel: "Пошук міста",
    searchPlaceholder: "Наприклад, Львів або Одеса",
    searchHint:
      "Пошук підключимо в наступному slice. Зараз це каркас без вибраного міста.",
    themeIndicator: "Системна тема",
    geolocationPolicy: "Геолокація лише після вашої дії.",
    forecastPanelTitle: "Прогноз",
    forecastPanelText: "Тут зʼявляться 7 денних карток після вибору міста.",
    mapPanelTitle: "Карта",
    mapPanelText: "Карта OpenStreetMap буде підключена окремим client-only slice.",
    sidePanelTitle: "План",
    sidePanelText: "Спочатку пошук, потім прогноз, карта і порівняння вихідних.",
    footerText: "Open-Meteo та OpenStreetMap будуть підключені у наступних slices.",
  },
  citySearch: {
    label: "Пошук міста",
    placeholder: "Наприклад, Львів або Одеса",
    hint: "Введіть щонайменше 2 символи, щоб побачити підказки.",
    loading: "Шукаємо місто…",
    emptyResults: "Нічого не знайдено",
    error: "Не вдалося отримати підказки. Спробуйте ще раз спокійно.",
    selectedPrefix: "Активне місто",
    selectedHint: "Прогноз для цього міста підключимо в наступному slice.",
  },
} as const;
