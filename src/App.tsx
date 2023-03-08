import { Route, Routes } from 'react-router-dom';
import { SignUp } from './components/SignUp/SignUp';

import { MainLayout } from './layout/MainLayout';
import { FavoritsPage } from './pages/FavoritsPage';
import { FoundGifsPage } from './pages/FoundGifsPage';
import { GifInfoPage } from './pages/GifInfoPage';
import { LoginPage } from './pages/LoginPage';
import { HistoryPage } from './pages/HistoryPage';
import { TrendingGifPage } from './pages/TrendingGifPage';
import { ListOfGifsFromHistory } from './components/ListOfGifsFromHistory/ListOfGifsFromHistory';
import { PrivateAccess } from './hoc/PrivateAccess';
import { ErrorNotFound } from './components/ErrorNotFound/ErrorNotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<TrendingGifPage />} />
        <Route path="/search" element={<FoundGifsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<SignUp />} />
        <Route path="/gifs/:id" element={<GifInfoPage />} />

        <Route
          path="/favorits"
          element={
            <PrivateAccess>
              <FavoritsPage />
            </PrivateAccess>
          }
        />
        <Route
          path="/history"
          element={
            <PrivateAccess>
              <HistoryPage />
            </PrivateAccess>
          }>
          <Route path="/history:searchParam" element={<ListOfGifsFromHistory />} />
        </Route>
        <Route path="*" element={<ErrorNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
