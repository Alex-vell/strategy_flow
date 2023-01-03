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
  description: string;
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
      description: 'Description of the first strategy',
    },
    {
      id: '223',
      name: 'Second strategy',
      description: 'Description of the second strategy',
    },
    {
      id: '323',
      name: 'Third strategy',
      description: 'Description of the third strategy',
    },
  ],
};
