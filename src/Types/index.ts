export type CountryListItemType = {
  data: {
    flags: {
      png: string;
      svg: string;
      alt: string;
    };
    name: {
      common: string;
      official: string;
      nativeName: any;
    };
    capital: string[];
    region: string;
    population: number;
  };
};

export type ParamsTypes = {
  params: { id: string };
  searchParams: {};
};

export type PathType = {
  path: string;
};

export type CurrentCountryProfileType = {
  data: any;
};

export type BorderCountriesBtnsType = {
  countries: string[];
};

///////////////////////////////////   interface   ////////////////////////////////

export interface ThemeContextValue {
  theme: string;
  setTheme: any;
}

export interface FilterContextValue {
  isLoading: boolean;
  countries: any[];
  filteredCountries: any[] | null;
  setRegion: any;
  region: string;
  setFilteredCountries: any;
}