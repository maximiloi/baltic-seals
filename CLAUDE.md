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
├── components.json        # shadcn конфигурация
└── CLAUDE.md.ru          # Русская версия этого файла
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
- ✅ shadcn/ui интегрирован
- ⏳ Структура страниц в разработке
- ⏳ Компоненты команды в разработке
