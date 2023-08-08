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
  params: { id: string },
  searchParams: {}
}


export type PathType = {
  path: string;
}
