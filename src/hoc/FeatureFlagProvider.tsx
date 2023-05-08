import { createContext, useEffect, useState } from 'react';
import { _apiLocal } from '../common/variables';

interface ContextProps {
  isFeatureFlag?: boolean;
}
interface Props {
  children: JSX.Element;
}

export const FeatureFlagContext = createContext<ContextProps | null>(null);

export const FeatureFlagProvider = ({ children }: Props) => {
  const [isFeatureFlag, setisFeatureFlag] = useState(false);

  useEffect(() => {
    fetch(`${_apiLocal}/api/feature-flags`)
      .then((res) => res.json())
      .then((data) => setisFeatureFlag(data.isTelegramShareEnabled));
  }, []);

  const value = { isFeatureFlag };

  return <FeatureFlagContext.Provider value={value}>{children}</FeatureFlagContext.Provider>;
};
