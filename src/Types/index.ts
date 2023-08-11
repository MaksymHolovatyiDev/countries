export type CountryListType = {
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

export type CountryListItemType = {
  data: CountryListType;
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

export type NameType = {
  name: string;
};

export type CommonName = {
  common: string;
};

export type BorderCountriesBtnsRes = {
  name: {
    common: string;
    official: string;
  };
};

export type BorderCountriesBtnsResArr = {
  data: BorderCountriesBtnsRes[];
};

export type ClassNameType = {
  className: string
}

///////////////////////////////////   interface   ////////////////////////////////

export interface ThemeContextValue {
  theme: string;
  setTheme: (theme: string) => void;
}

export interface FilterContextValue {
  isLoading: boolean;
  countries: CountryListType[];
  filteredCountries: CountryListType[] | null;
  setRegion: (region: string) => void;
  region: string;
  setFilteredCountries: (filter: any) => void;
}
