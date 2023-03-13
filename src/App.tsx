import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SignUp } from './components/SignUp/SignUp';
import { FavoritsPage } from './pages/FavoritsPage';
import { GifInfoPage } from './pages/GifInfoPage';
import { LoginPage } from './pages/LoginPage';
import { HistoryPage } from './pages/HistoryPage';
import { ListOfGifsFromHistory } from './components/ListOfGifsFromHistory/ListOfGifsFromHistory';
import { PrivateAccess } from './hoc/PrivateAccess';
import { ErrorNotFound } from './components/ErrorNotFound/ErrorNotFound';
import { Spinner } from './components/Spinner/Spinner';
import { FoundGifsLazy, MainLayoutLazy, TrendingGifLazy } from './lazy/lazy';
import { ThemeProvider } from './hoc/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Spinner />}>
              <MainLayoutLazy />
            </Suspense>
          }>
          <Route
            index
            element={
              <Suspense fallback={<Spinner />}>
                <TrendingGifLazy />
              </Suspense>
            }
          />
          <Route
            path="/search"
            element={
              <Suspense fallback={<Spinner />}>
                <FoundGifsLazy />
              </Suspense>
            }
          />

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
    </ThemeProvider>
  );
}

export default App;
