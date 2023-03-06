import { Route, Routes } from 'react-router-dom';
import { SignUp } from './components/SignUp/SignUp';

import { MainLayout } from './layout/MainLayout';
import { FavoritsPage } from './pages/FavoritsPage';
import { FoundGifsPage } from './pages/FoundGifsPage';
import { GifInfoPage } from './pages/GifInfoPage';
import { LoginPage } from './pages/LoginPage';
import { TrendingGifPage } from './pages/TrendingGifPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<TrendingGifPage />} />
        <Route path="/search" element={<FoundGifsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<SignUp />} />
        <Route path="/gifs/:id" element={<GifInfoPage />} />
        <Route path="/favorits" element={<FavoritsPage />} />
        <Route path="*" element={<div> Страница не найдена(!!в разработке!!)</div>} />
      </Route>
    </Routes>
  );
}

export default App;
