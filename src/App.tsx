import { Route, Routes } from 'react-router-dom';

import { MainLayout } from './layout/MainLayout';
import { FoundGifsPage } from './pages/FoundGifsPage';
import { TrendingGifPage } from './pages/TrendingGifPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<TrendingGifPage />} />
        <Route path="/search" element={<FoundGifsPage />} />

        <Route path="*" element={<div> Страница не найдена(!!в разработке!!)</div>} />
      </Route>
    </Routes>
  );
}

export default App;
