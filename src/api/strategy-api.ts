import { AxiosResponse } from 'axios';

import { instance } from './http';

export const strategyApi = {
  getStrategies() {
    return instance.get<IStrategies, AxiosResponse<IPublicApis>>('entries');
  },
};

export interface IStrategy {
  id: string;
  name: string;
  start_capital: string;
  start_date: string;
  end_date: string;
}

export interface IStrategies {
  strategies: IStrategy[];
}

export interface IApi {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}

export interface IPublicApis {
  count: number;
  entries: IApi[];
}
