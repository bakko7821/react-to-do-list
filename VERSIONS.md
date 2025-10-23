# commit 1.1.1 [LESSON №1]

Командой ```npx create-react-app client --template typescript``` был создан проект. Проект разрабатывается по уроку glo-academy. Создавая проект - я учавствую в интесиве.

# commit 1.2.1 [LESSON №1]

- Был удален весь стартовый мусор из проекта, по типу логотипов
- Создан файл **/pages/ToDoList.tsx**

Командой ```npm i sass -save-dev``` в проект установлен пре-процессор SASS

# commit 1.3.1 [LESSON №2]

- Создана четка архитектура проекта
- Верстка разбита на компоненты

```
src/assets/images
src/assets/scss
src/components/Form
src/components/Header
src/components/ToDoList
src/components/ToDoList/ToDoListItem
```

# commit 1.4.1 [LESSON №3]

- Добавленна логика создания, выполнения и удаления задач

# commit 1.5.1 [LESSON №4]

- Установленна библиотека React-Router-DOM
``` npm -i react-router-dom```
- Добавлена маршрутизация
- Создан компонент ListItem.tsx

# commit 1.6.1 [LESSON №5]

- Установленна библиотека Redux/Toolkit
```npm install @reduxjs/toolkit react-redux```
- Созданы файлы **store.ts**, **/feature/ToDoList.ts**, **/helpers/storage.ts/**

# commit 1.7.1 [LESSON №6]

- Установленна библиотека Styled Components
```npm install styled-components``

- **Form.scss** и **ToDoListItem.scss** - заменены на **Form.styled.ts** и **ToDoListItem.styles.ts**