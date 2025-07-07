# 🚀 Запуск проекта

Информация по запуску проектов находиться в `README.md` каждого отдельного репозитория

## ❌ Запуск проекта с SDK (в данный момент не поддерживается)

### 1. Установка зависимостей

В корне проекта запустить (установятся зависимости для всех приложений и пакетов)

```bash
pnpm i
```

### 2. SDK build

Затем сбилдить `musicfun-api-sdk`

```bash
pnpm build:sdk
```

️🔔 Возможно данные скрипты не являются кросc-платформенными

```json
"scripts": {
"clean": "rm -rf dist",
"build": "pnpm run clean && tsc"
}
```

тогда попробуй альтернативную команду попроще

```bash
pnpm build:sdk:simple
```

### 3. Старт проекта

- 🎶musicfun на **tanstack**

```bash
   pnpm start:musicfun-tanstack
```

- 🎶musicfun на **rtk-query**

```bash
    pnpm start:musicfun-rtk
```

- 🎶musicfun на **nextjs**

```bash
     pnpm start:musicfun-nextjs
```

Happy hacking 🚀
