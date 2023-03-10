import { lazy } from 'react';

export const MainLayoutLazy = lazy(() =>
  import('../layout/MainLayout').then((module) => ({
    default: module.MainLayout,
  })),
);

export const TrendingGifLazy = lazy(() =>
  import('../pages/TrendingGifPage').then((module) => ({
    default: module.TrendingGifPage,
  })),
);
export const FoundGifsLazy = lazy(() =>
  import('../pages/FoundGifsPage').then((module) => ({
    default: module.FoundGifsPage,
  })),
);
