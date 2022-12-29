import { AxiosResponse } from 'axios';

import { instance } from './http';

export const strategyApi = {
  getStrategies() {
    return instance.get<IStrategies, AxiosResponse<IStrategies>>('list');
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
