import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from 'react';

import { FilterContextValue } from '@Types';
import { SearchRegionCountries, getAllCountries } from '@helpers/getCountries';

const FilterContext = createContext<FilterContextValue>(
  {} as FilterContextValue
);

export const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(null);
  const [region, setRegion] = useState('');

  useEffect(() => {
    getAllCountries().then(el => {
      setCountries(el);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    SearchRegionCountries(region).then(setCountries);
  }, [region]);

  const value = {
    isLoading,
    countries,
    filteredCountries,
    setRegion,
    region,
    setFilteredCountries,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export default FilterProvider;
