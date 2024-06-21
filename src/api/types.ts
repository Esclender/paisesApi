export interface CountriesData {
  countries: ICountryDataInfo[];
}

export interface CountryData {
  country: ICountryDataInfo;
}

export interface ICountryDataInfo {
  code: string;
  name: string;
  capital: string;
  continent: {
    name: string;
  };
  image: string;
}

export interface Country {
  name: string;
  code: string;
  continent: {
    name: string;
  };
}

export interface ICountryDataInfo {
  code: string;
  name:string;
  capital:string;
  currencies: string[];
  phones: string[];
  languages: Language[];
  states: States[];
  image: string;
}


export interface Language {
  name: string;
}

export interface States {
  name: string;
}