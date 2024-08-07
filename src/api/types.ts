export interface CountriesData {
  countries: ICountryDataInfo[];
}

export interface ContinentsData {
  continents: IContinentDataInfo[];
}

export interface CountryData {
  country: ICountryDataInfo;
}

export interface Country {
  name: string;
  code: string;
  continent: Continent;
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

export interface IContinentDataInfo {
  name: string;
  code: string;
  image: string;
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