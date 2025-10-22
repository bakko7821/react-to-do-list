import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { ToDoListPage } from './pages/ToDoListPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ViewList } from './pages/ViewList';
import { Header } from './components/Header/Header';
import { NotFound } from './pages/404';
import { ViewListItem } from './pages/ViewListItem';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ViewList />}></Route>
          <Route path='/list/:id' element={<ViewListItem />}></Route>
          <Route path='*' element={<NotFound />}></Route>
          <Route path='/todo' element={<ToDoListPage />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
