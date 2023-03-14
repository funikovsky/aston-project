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
import { PrivateAccessForForm } from './hoc/PrivateAccessForForm';

function App() {
  return (
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

        <Route
          path="/login"
          element={
            <PrivateAccessForForm>
              <LoginPage />
            </PrivateAccessForForm>
          }
        />
        <Route
          path="/registration"
          element={
            <PrivateAccessForForm>
              <SignUp />
            </PrivateAccessForForm>
          }
        />
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
