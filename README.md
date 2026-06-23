## Обзор проекта

**Балтийские Нерпы** — сайт команды флаг-футбола из Санкт-Петербурга, Россия.

## Технологический стек

- **Framework**: Next.js 16.2.6 с App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **UI Components**: shadcn/ui (Button, и другие компоненты по мере необходимости)
- **Icons**: lucide-react
- **Linting**: ESLint
- **Animations**: Framer Motion

## Структура проекта

```
baltic-seals/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── HeroSection.tsx    # Hero секция с анимациями
│   ├── FlagFootballSection.tsx
│   ├── StatsSection.tsx   # Статистика команды
│   ├── TournamentsSection.tsx
│   ├── PracticesSection.tsx
│   ├── SponsorsSection.tsx
│   ├── Footer.tsx
│   ├── WavesSVG.tsx       # Компонент волн
│   └── ui/                # shadcn/ui компоненты
├── lib/
│   ├── utils.ts           # Утилиты (cn для классов)
│   ├── tournaments.ts     # Работа с данными турниров
│   └── practices.ts       # Работа с данными тренировок
├── public/                # Статические файлы
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── components.json        # shadcn конфигурация
└── CLAUDE.md              # Документация для Claude
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
- ✅ shadcn/ui интегрирован (Card, Button)
- ✅ Hero Section с анимациями Framer Motion
- ✅ Flag Football Section с информацией об олимпийском виде спорта
- ✅ Stats Section с динамической статистикой из турниров
- ✅ Tournaments Section с единым дизайном
- ✅ WavesSVG компонент с бесшовными волнами
- ✅ Practices Section с расписанием тренировок и ссылками на Яндекс.Карты
- ✅ Sponsors Section со спонсорскими предложениями
- ✅ Footer с контактами и ссылками
- ✅ Интеграция с Google Sheets для турниров и тренировок
- ✅ Адаптивный дизайн для всех устройств
- ✅ Dark mode совместимость
