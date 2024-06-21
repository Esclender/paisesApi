export interface CountriesData {
  countries: ICountryDataInfo[];
}

export interface CountryData {
  country: ICountryDataInfo;
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
  continent: Continent;
  states: States[];
  image: string;
  flagImage: string;
}

export interface Continent {
  name: string;
}

export interface Language {
  name: string;
}

export interface States {
  name: string;
}