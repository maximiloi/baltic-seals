# CLAUDE.md

Этот файл содержит инструкции для Claude Code (claude.ai/code) при работе с кодом в этом репозитории.

## Обзор проекта

**Балтийские Нерпы** — сайт команды флаг-футбола из Санкт-Петербурга, Россия.

## Технологический стек

- **Framework**: Next.js 16.2.6 с App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **UI Components**: shadcn/ui (Button, и другие компоненты по мере необходимости)
- **Icons**: lucide-react
- **Animations**: Framer Motion
- **Linting**: ESLint

## Структура проекта

```
baltic-seals/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   └── ui/                # shadcn/ui компоненты
├── lib/
│   └── utils.ts           # Утилиты (cn для классов)
├── public/                # Статические файлы
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── components.json        # shadcn конфигурация
```

## Команды разработки

- `npm run dev` — запустить dev сервер (http://localhost:3000)
- `npm run build` — собрать проект для production
- `npm start` — запустить production сервер
- `npm run lint` — проверить код с ESLint
- `npm run format` — форматировать код с Prettier
- `npm run format:check` — проверить форматирование

## Добавление компонентов shadcn/ui

```bash
npx shadcn@latest add <component-name>
```

Примеры: `button`, `card`, `input`, `dialog`, и т.д.

## Важные замечания

- При добавлении новых пакетов обновлять этот файл
- Использовать TypeScript для всего нового кода
- Следовать стилю Tailwind CSS для стилизации
- Использовать компоненты из shadcn/ui где возможно

## Текущий статус

- ✅ Next.js инициализирован
- ✅ Tailwind CSS настроен
- ✅ shadcn/ui интегрирован (Card)
- ✅ Hero Section с анимациями Framer Motion
- ✅ Flag Football Section — информация об олимпийском виде спорта с ссылкой на Olympics.com и официальным логотипом
- ✅ Stats Section с динамической статистикой из турниров
- ✅ Tournaments Section с единым дизайном
- ✅ WavesSVG компонент с бесшовными волнами (30% шире экрана)
- ✅ Единый дизайн всех секций (dark mode compatible)
- ✅ Practices Section с расписанием тренировок и ссылками на Яндекс.Карты
- ✅ Sponsors Section — спонсорская секция с преимуществами спонсорства
- ✅ Footer — полнофункциональный футтер с контактами и ссылками
- ✅ Унифицированные бэкграунды всех секций для плавного перехода

## Источники данных Google Sheets

Все данные получаются из одного Google Sheets документа:
- Лист `Tournaments` — турниры и статистика
- Лист `Practice` — расписание тренировок с местами проведения

### Формат данных Practice:
```
namePlace | address | coordinates | details | startDate | endDate | status
```

- `coordinates` — формат: "59.944852, 30.376142" (широта, долгота)
- `details` — формат: "Понедельник | 20-00 до 22-00; Пятница | 20-00 до 22-00;"
- `status` — "permanent" или "optional"
  - **permanent**: место показывается в любое время в течение периода
  - **optional**: показывается с примечанием "По согласованию" и ссылкой на ВКонтакте

Тренировки отображаются только если текущая дата попадает в диапазон `startDate`-`endDate`.

