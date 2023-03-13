# Gifs App - приложение для просмотра gif-картинок

## **1 уровень (необходимый минимум)**

- Реализованы Требования к функциональности, описанные в прикрепленном документе: ✔️

## React

- Пишем функциональные компоненты c хуками в приоритете над классовыми: ✔️
- Есть четкое разделение на умные и глупые компоненты: ✔️ [Умный](https://github.com/funikovsky/aston-project/blob/main/src/layout/MainLayout.tsx) , [Глупый](https://github.com/funikovsky/aston-project/blob/main/src/components/ImageContainer/ImageContainer.tsx)
- Есть рендеринг списков: ✔️ [Рендер списка](https://github.com/funikovsky/aston-project/blob/main/src/components/GifList/index.tsx)
- Реализована хотя бы одна форма: ✔️[AuthForm](https://github.com/funikovsky/aston-project/blob/main/src/components/AuthForm/AuthForm.tsx)
- Есть применение Контекст API: ✔️ [ThemeContext](https://github.com/funikovsky/aston-project/blob/main/src/hoc/ThemeProvider.tsx)
- Есть применение предохранителя: ✔️ [ErrorBoundary](https://github.com/funikovsky/aston-project/blob/main/src/ErrorBoundary/ErrorBoundary.tsx)
- Есть хотя бы один кастомный хук: ✔️ [useOperationsWithFavorits](https://github.com/funikovsky/aston-project/blob/main/src/hooks/useOperationsWithFavorits.ts), [Все хуки проекта](https://github.com/funikovsky/aston-project/tree/main/src/hooks)
- Хотя бы несколько компонентов используют PropTypes: ✔️ [ErrorInfoBlock](https://github.com/funikovsky/aston-project/blob/main/src/ErrorBoundary/ErrorInfoBlock.tsx)
- Поиск не должен триггерить много запросов к серверу: ✔️ [Поиск при нажатии кнопки или 'Enter'](https://github.com/funikovsky/aston-project/blob/main/src/components/SearchBlock/SearchBlock.tsx)
- Есть применение lazy + Suspense: ✔️[lazy](https://github.com/funikovsky/aston-project/blob/main/src/lazy/lazy.ts) + [Suspense](https://github.com/funikovsky/aston-project/blob/main/src/App.tsx)

## Redux

- Используем Modern Redux with Redux Toolkit: ✔️
- Используем слайсы: ✔️ [Слайсы](https://github.com/funikovsky/aston-project/tree/main/src/redux/slice)
- Есть хотя бы одна кастомная мидлвара: ✔️ [loggerMiddleware](https://github.com/funikovsky/aston-project/blob/main/src/redux/middleware/loggerMiddleware.ts)
- Используется RTK Query: ✔️ [searchGifsQuery](https://github.com/funikovsky/aston-project/blob/main/src/redux/query/searchGifsQuery.ts)
- Используется Transforming Responses: ✔️ [transformResponse](https://github.com/funikovsky/aston-project/blob/main/src/redux/query/searchGifsQuery.ts)

## **2 уровень (необязательный)**

- Использование TypeScript: ✔️
- Используются мемоизированные селекторы (createSelector): ✔️ [dataBaseSelector](https://github.com/funikovsky/aston-project/blob/main/src/redux/slice/selectors/dataBaseSelectors.ts)
- Подключен storybook и созданы несколько сторисов: ✔️
- Реализована фича “Поделиться в телеграм”, закрытая под фича флагом: ✔️ [Сервер](https://github.com/funikovsky/aston-project/blob/main/server/index.js), [Компонент с кнопкой](https://github.com/funikovsky/aston-project/blob/main/src/components/GifInfoBlock/GifInfoBlock.tsx), [FeatureFlagContext](https://github.com/funikovsky/aston-project/blob/main/src/hoc/FeatureFlagProvider.tsx)
