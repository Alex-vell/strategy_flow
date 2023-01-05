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

export const defaultValueStrategy = {
  strategies: [
    {
      id: '123',
      name: 'First strategy',
      start_capital: '1000',
      start_date: '2023-01-10',
      end_date: '2023-01-20',
    },
    {
      id: '223',
      name: 'Second strategy',
      start_capital: '2000',
      start_date: '2023-02-10',
      end_date: '2023-02-20',
    },
    {
      id: '323',
      name: 'Third strategy',
      start_capital: '3000',
      start_date: '2023-03-10',
      end_date: '2023-03-20',
    },
  ],
};
